// Minimal three.js viewer module for hoppers preview
// Uses lazy dynamic imports so the heavy three.js bundles are only fetched when needed.

let THREE = null; // will be assigned after dynamic import
let OrbitControlsClass = null;
let STLLoaderClass = null;
let renderer, scene, camera, controls;
let container, fallbackDiv;
let currentMesh = null;
let stlLoader = null;
let loaderOverlay = null;
let hudDiv = null; // small status HUD in the corner
let currentLoadingName = null;
let wireframeOn = false;
let autoRotate = false;
let autoRotateSpeed = 0.4; // degrees per frame-ish scale
let savedCameraState = null;

let _threeReady = false;
let _threeReadyPromise = null;

function init() {
  console.debug('three-viewer: init start');
  container = document.getElementById('threejs-viewer');
  fallbackDiv = document.getElementById('threejs-fallback');
  if (!container) return;

  // WebGL capability check
  if (!('WebGLRenderingContext' in window)) {
    if (fallbackDiv) fallbackDiv.style.display = 'block';
    return;
  }

  const width = container.clientWidth;
  const height = container.clientHeight;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setSize(width, height);
  // ensure canvas is visible and gets pointer events
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.setClearColor(0x222222);
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 2, 6);

  controls = new OrbitControlsClass(camera, renderer.domElement);
  controls.enableDamping = true;

  // Lights
  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
  hemi.position.set(0, 20, 0);
  scene.add(hemi);

  const dir = new THREE.DirectionalLight(0xffffff, 0.8);
  dir.position.set(5, 10, 7.5);
  scene.add(dir);

  // Add a soft ambient light so placeholder/procedural meshes are visible
  const amb = new THREE.AmbientLight(0xffffff, 0.35);
  scene.add(amb);

  // Add an axes helper to give visual feedback that scene is rendering
  const axes = new THREE.AxesHelper(1.5);
  scene.add(axes);

  // ground plane for visual grounding
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.1, roughness: 0.9 });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.01;
  scene.add(ground);

  // initial placeholder model
  setModelToPlaceholder();

  // create a simple loader overlay (hidden by default)
  loaderOverlay = document.createElement('div');
  loaderOverlay.style.position = 'absolute';
  loaderOverlay.style.left = '0';
  loaderOverlay.style.top = '0';
  loaderOverlay.style.right = '0';
  loaderOverlay.style.bottom = '0';
  loaderOverlay.style.display = 'flex';
  loaderOverlay.style.alignItems = 'center';
  loaderOverlay.style.justifyContent = 'center';
  loaderOverlay.style.color = '#fff';
  loaderOverlay.style.fontFamily = 'sans-serif';
  loaderOverlay.style.fontSize = '14px';
  loaderOverlay.style.background = 'rgba(0,0,0,0.4)';
  loaderOverlay.style.zIndex = '10';
  loaderOverlay.textContent = 'Loading 3D model...';
  loaderOverlay.style.display = 'none';
  container.style.position = 'relative';
  container.appendChild(loaderOverlay);

  // HUD/status: small box to display current model key or status
  hudDiv = document.createElement('div');
  hudDiv.id = 'threejs-hud';
  hudDiv.style.position = 'absolute';
  hudDiv.style.right = '8px';
  hudDiv.style.top = '8px';
  hudDiv.style.background = 'rgba(0,0,0,0.6)';
  hudDiv.style.color = '#fff';
  hudDiv.style.padding = '6px 8px';
  hudDiv.style.borderRadius = '6px';
  hudDiv.style.fontFamily = 'sans-serif';
  hudDiv.style.fontSize = '12px';
  hudDiv.style.zIndex = '12';
  hudDiv.textContent = '3D viewer ready';
  container.appendChild(hudDiv);

  // control row below HUD (buttons)
  const ctrlRow = document.createElement('div');
  ctrlRow.style.position = 'absolute';
  ctrlRow.style.right = '8px';
  ctrlRow.style.top = '44px';
  ctrlRow.style.display = 'flex';
  ctrlRow.style.gap = '6px';
  ctrlRow.style.zIndex = '12';

  const btn = (label, title) => {
    const b = document.createElement('button');
    b.textContent = label;
    b.title = title || label;
    b.style.padding = '6px 8px';
    b.style.borderRadius = '6px';
    b.style.border = 'none';
    b.style.background = 'rgba(255,255,255,0.06)';
    b.style.color = '#fff';
    b.style.cursor = 'pointer';
    b.onmouseenter = () => b.style.background = 'rgba(255,255,255,0.12)';
    b.onmouseleave = () => b.style.background = 'rgba(255,255,255,0.06)';
    return b;
  };

  const wireBtn = btn('Wire', 'Toggle wireframe');
  wireBtn.onclick = () => { toggleWireframe(); };
  ctrlRow.appendChild(wireBtn);

  const rotBtn = btn('Rotate', 'Toggle auto-rotate');
  rotBtn.onclick = () => { toggleAutoRotate(); rotBtn.textContent = autoRotate ? 'Rotating' : 'Rotate'; };
  ctrlRow.appendChild(rotBtn);

  const resetBtn = btn('Reset', 'Reset camera view');
  resetBtn.onclick = () => { resetCamera(); };
  ctrlRow.appendChild(resetBtn);

  // small speed input
  const speedInput = document.createElement('input');
  speedInput.type = 'range';
  speedInput.min = '0';
  speedInput.max = '2';
  speedInput.step = '0.05';
  speedInput.value = String(autoRotateSpeed);
  speedInput.title = 'Auto-rotate speed';
  speedInput.style.width = '80px';
  speedInput.oninput = (e) => { autoRotateSpeed = parseFloat(e.target.value); };
  ctrlRow.appendChild(speedInput);

  container.appendChild(ctrlRow);

  window.addEventListener('resize', onWindowResize);
  animate();
  console.debug('three-viewer: init complete');
}

// Ensure three.js and example classes are loaded. Returns a promise that resolves once ready.
async function ensureThree() {
  if (_threeReady) return;
  if (_threeReadyPromise) return _threeReadyPromise;
  _threeReadyPromise = (async () => {
    try {
      // dynamic import of core three module
      const threeMod = await import('https://cdn.jsdelivr.net/npm/three@0.159.0/build/three.module.js');
      THREE = threeMod;
      // dynamic import of example helpers (they rely on the import map for 'three')
      const oc = await import('https://cdn.jsdelivr.net/npm/three@0.159.0/examples/jsm/controls/OrbitControls.js');
      OrbitControlsClass = oc.OrbitControls;
      const stlMod = await import('https://cdn.jsdelivr.net/npm/three@0.159.0/examples/jsm/loaders/STLLoader.js');
      STLLoaderClass = stlMod.STLLoader;
      _threeReady = true;
      return true;
    } catch (e) {
      console.error('three-viewer: failed to load three or examples', e);
      throw e;
    }
  })();
  return _threeReadyPromise;
}

function onWindowResize() {
  if (!container || !camera || !renderer) return;
  const width = container.clientWidth;
  const height = container.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function animate() {
  requestAnimationFrame(animate);
  if (autoRotate && currentMesh) {
    // rotate the current mesh slowly on Y axis
    currentMesh.rotation.y += 0.01 * autoRotateSpeed;
  }
  if (controls) controls.update();
  if (renderer && scene && camera) renderer.render(scene, camera);
}

function toggleWireframe() {
  wireframeOn = !wireframeOn;
  if (!currentMesh) return;
  currentMesh.traverse((m) => {
    if (m.material) {
      if (Array.isArray(m.material)) m.material.forEach(mm => mm.wireframe = wireframeOn);
      else m.material.wireframe = wireframeOn;
    }
  });
}

function toggleAutoRotate() {
  autoRotate = !autoRotate;
  if (hudDiv) hudDiv.textContent = autoRotate ? 'Auto-rotate: ON' : 'Ready';
}

function resetCamera(preset) {
  // preset can be 'front'|'top'|'iso' or undefined
  if (!camera) return;
  if (!preset) {
    camera.position.set(0, 2, 6);
    camera.lookAt(0, 1, 0);
  } else if (preset === 'front') {
    camera.position.set(0, 1.5, 4.5);
    camera.lookAt(0, 1, 0);
  } else if (preset === 'top') {
    camera.position.set(0, 6, 0.01);
    camera.lookAt(0, 0, 0);
  } else if (preset === 'iso') {
    camera.position.set(3, 2.5, 3);
    camera.lookAt(0, 1, 0);
  }
  if (controls) controls.update();
}

function clearCurrentMesh() {
  if (!currentMesh) return;
  // defensive: traverse and dispose where possible
  currentMesh.traverse((obj) => {
    if (obj.geometry) {
      try { obj.geometry.dispose(); } catch (e) { /* ignore */ }
    }
    if (obj.material) {
      try {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose && m.dispose());
        else obj.material.dispose && obj.material.dispose();
      } catch (e) { /* ignore */ }
    }
  });
  scene.remove(currentMesh);
  currentMesh = null;
}

function setModelToPlaceholder() {
  clearCurrentMesh();
  if (!THREE) return; // not ready yet
  // programmatic cone geometry as a simple placeholder for a hopper
  const geometry = new THREE.ConeGeometry(1.6, 2.5, 16, 1, true);
  geometry.translate(0, 0.75, 0);
  const material = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, metalness: 0.3, roughness: 0.6 });
  currentMesh = new THREE.Mesh(geometry, material);
  scene.add(currentMesh);
}

function makeModelFromSelectors(selectValues) {
  // selectValues: { selectionA, selectionB, selectionC, selectionD, selectionE, selectionF }
  // For a first pass, map cone size -> scale and color
  const sizeMap = {
    '14 ft': 0.6,
    '15 ft': 0.65,
    '15 ft 10 inch Behlen': 0.68,
    '18 ft': 0.8,
    '19 ft': 0.85,
    '21 ft': 0.95,
    '24 ft': 1.1,
    '27 ft': 1.2,
    '33 ft': 1.45
  };

  const colorMap = {
    'No Skid': 0x8b5a2b,
    'Double Skid': 0x7a6b53,
    'Triple Skid': 0x6f8f76,
    'Quad Skid': 0x556b2f,
    'Heavy Quad Skid': 0x333333,
    'Rack & Pinion': 0x444444
  };

  const scale = sizeMap[selectValues.selectionA] || 1.0;
  const color = colorMap[selectValues.selectionC] || 0x8b5a2b;

  clearCurrentMesh();
  // Using a lathe geometry to approximate a hopper profile
  const points = [];
  points.push(new THREE.Vector2(0.0, 0.0));
  points.push(new THREE.Vector2(0.8 * scale, 0.0));
  points.push(new THREE.Vector2(1.6 * scale, 0.8 * scale));
  points.push(new THREE.Vector2(1.4 * scale, 1.4 * scale));
  points.push(new THREE.Vector2(0.9 * scale, 2.0 * scale));
  points.push(new THREE.Vector2(0.0, 2.0 * scale));

  const geometry = new THREE.LatheGeometry(points, 32);
  const material = new THREE.MeshStandardMaterial({ color: color, metalness: 0.25, roughness: 0.55 });
  currentMesh = new THREE.Mesh(geometry, material);
  currentMesh.position.y = 0;
  scene.add(currentMesh);

  // adjust camera for a good framing
  camera.position.set(0, 1.5 * scale, 4.5 * scale);
  controls.update();
}

// Exposed function used by page script to update viewer when selections change
window.updateModelForSelections = async function() {
  try {
    await ensureThree();
  } catch (e) {
    console.warn('three-viewer: ensureThree failed, aborting update', e);
    return;
  }
  // Compute selectedIndex values consistently
  const a = document.getElementById('selectionA') && document.getElementById('selectionA').selectedIndex;
  const b = document.getElementById('selectionB') && document.getElementById('selectionB').selectedIndex;
  const c = document.getElementById('selectionC') && document.getElementById('selectionC').selectedIndex;
  const d = document.getElementById('selectionD') && document.getElementById('selectionD').selectedIndex;
  const e = document.getElementById('selectionE') && document.getElementById('selectionE').selectedIndex;
  const f = document.getElementById('selectionF') && document.getElementById('selectionF').selectedIndex;

  // If any are missing or default (0), show placeholder
  if (![a,b,c,d,e,f].every(idx => typeof idx === 'number' && idx > 0)) {
    console.debug('three-viewer: not all selections made', {a,b,c,d,e,f});
    setModelToPlaceholder();
    return;
  }

  const configKey = `${a}-${b}-${c}-${d}-${e}-${f}`;
  console.debug('three-viewer: computed configKey', configKey);
  if (hudDiv) hudDiv.textContent = `Key: ${configKey}`;
  const info = modelMap[configKey];
  if (info) console.debug('three-viewer: found mapping', info);

  if (info) {
    if (info.type === 'stl') {
      const name = info.url.split('/').pop();
      console.log('three-viewer: start loading STL', name, info.url);
      if (hudDiv) hudDiv.textContent = `Loading: ${name}`;
      currentLoadingName = name;
      showLoader(true);
      // safety: clear loader after 10s if something goes wrong
      const safety = setTimeout(() => {
        if (loaderOverlay && loaderOverlay.style.display === 'flex') {
          console.warn('three-viewer: loader safety timeout reached, clearing loader');
          showLoader(false);
          if (hudDiv) hudDiv.textContent = 'Ready';
          currentLoadingName = null;
        }
      }, 10000);
      loadSTL(info.url, info.color).then(() => clearTimeout(safety)).catch(() => clearTimeout(safety));
    } else if (info.type === 'glb') {
      const name = info.url.split('/').pop();
      console.log('three-viewer: start loading GLB', name, info.url);
      if (hudDiv) hudDiv.textContent = `Loading: ${name}`;
      currentLoadingName = name;
      showLoader(true);
      const safety = setTimeout(() => {
        if (loaderOverlay && loaderOverlay.style.display === 'flex') {
          console.warn('three-viewer: loader safety timeout reached, clearing loader');
          showLoader(false);
          if (hudDiv) hudDiv.textContent = 'Ready';
          currentLoadingName = null;
        }
      }, 10000);
      loadGLB(info.url).then(() => clearTimeout(safety)).catch(() => clearTimeout(safety));
    } else {
      makeModelFromSelectors({ selectionA: document.getElementById('selectionA').value });
    }
  } else {
    if (hudDiv) hudDiv.textContent = `Procedural model`;
    makeModelFromSelectors({ selectionA: document.getElementById('selectionA') && document.getElementById('selectionA').value });
  }
};

// Simple mapping: configKey -> { type: 'stl'|'glb', url: 'resources/models/..', color: 0x.. }
// Fill this map with your model filenames. Example keys match the config keys used elsewhere.
const modelMap = {
  // Mapping keys that previously showed '2708 09 w Pads Front View.png'
  '8-5-1-1-1-4': { type: 'stl', url: 'resources/models/stl/BUSHING FOR HANDLE 2HOLE R2.stl', color: 0x999999 },
  '8-5-1-2-1-4': { type: 'stl', url: 'resources/models/stl/BUSHING FOR HANDLE 2HOLE R2.stl', color: 0x999999 },
  '8-5-1-1-2-3': { type: 'stl', url: 'resources/models/stl/BUSHING FOR HANDLE 2HOLE R2.stl', color: 0x999999 },
  '8-5-1-2-2-3': { type: 'stl', url: 'resources/models/stl/BUSHING FOR HANDLE 2HOLE R2.stl', color: 0x999999 },
  '8-5-1-1-3-3': { type: 'stl', url: 'resources/models/stl/BUSHING FOR HANDLE 2HOLE R2.stl', color: 0x999999 },
  '8-5-1-2-3-3': { type: 'stl', url: 'resources/models/stl/BUSHING FOR HANDLE 2HOLE R2.stl', color: 0x999999 },
  '8-6-1-1-1-4': { type: 'stl', url: 'resources/models/stl/BUSHING FOR HANDLE 2HOLE R2.stl', color: 0x999999 },
  '8-6-1-2-1-4': { type: 'stl', url: 'resources/models/stl/BUSHING FOR HANDLE 2HOLE R2.stl', color: 0x999999 },
  '8-6-1-1-2-3': { type: 'stl', url: 'resources/models/stl/BUSHING FOR HANDLE 2HOLE R2.stl', color: 0x999999 },
  '8-6-1-2-2-3': { type: 'stl', url: 'resources/models/stl/BUSHING FOR HANDLE 2HOLE R2.stl', color: 0x999999 },
  '8-6-1-1-3-3': { type: 'stl', url: 'resources/models/stl/BUSHING FOR HANDLE 2HOLE R2.stl', color: 0x999999 },
  '8-6-1-2-3-3': { type: 'stl', url: 'resources/models/stl/BUSHING FOR HANDLE 2HOLE R2.stl', color: 0x999999 }
};

// Loader helpers
function loadSTL(url, colorHex = 0xaaaaaa) {
  return new Promise((resolve, reject) => {
    // ensure stlLoader exists
    if (!stlLoader) stlLoader = new STLLoaderClass();
    stlLoader.load(url, (geometry) => {
      try {
        if (!geometry) return reject(new Error('No geometry'));
        if (!geometry.attributes.normal) geometry.computeVertexNormals();
        geometry.center && geometry.center();

        // scale to fit roughly in the scene
        const bbox = new THREE.Box3().setFromBufferAttribute(geometry.attributes.position);
        const size = new THREE.Vector3();
        bbox.getSize(size);
        const maxDim = Math.max(size.x, size.y, size.z);
        const desired = 2.0; // tweak for desired scene size
        const scale = maxDim > 0 ? (desired / maxDim) : 1;
        geometry.scale(scale, scale, scale);

        const mat = new THREE.MeshStandardMaterial({ color: colorHex, metalness: 0.1, roughness: 0.8 });
        const mesh = new THREE.Mesh(geometry, mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.position.y = 0;
        clearCurrentMesh();
        currentMesh = mesh;
        scene.add(currentMesh);
        // update HUD and loader state
        showLoader(false);
        if (hudDiv && currentLoadingName) {
          hudDiv.textContent = `Loaded: ${currentLoadingName}`;
          // revert to ready after a short delay
          setTimeout(() => { if (hudDiv) hudDiv.textContent = 'Ready'; }, 1200);
        }
        currentLoadingName = null;
        console.log('three-viewer: stl loaded', url);
        resolve();
      } catch (err) {
        console.warn('STL processing error', err);
        showLoader(false);
        if (hudDiv && currentLoadingName) {
          hudDiv.textContent = `Error loading: ${currentLoadingName}`;
          setTimeout(() => { if (hudDiv) hudDiv.textContent = 'Ready'; }, 1800);
        }
        currentLoadingName = null;
        reject(err);
      }
    }, undefined, (err) => {
      console.warn('STL load error', err);
      showLoader(false);
      if (hudDiv && currentLoadingName) {
        hudDiv.textContent = `Error loading: ${currentLoadingName}`;
        setTimeout(() => { if (hudDiv) hudDiv.textContent = 'Ready'; }, 1800);
      }
      currentLoadingName = null;
      reject(err);
    });
  });
}

// Minimal GLB loader wrapper (uses existing import pattern if GLTFLoader is available)
let gltfLoader = null;
function ensureGLTFLoader() {
  if (gltfLoader) return;
  try {
    // dynamic import of GLTFLoader (works when served over http)
    // we avoid top-level import to keep module light when GLB isn't used
    // eslint-disable-next-line no-undef
    const moduleUrl = 'https://cdn.jsdelivr.net/npm/three@0.159.0/examples/jsm/loaders/GLTFLoader.js';
    import(moduleUrl).then(mod => { gltfLoader = new mod.GLTFLoader(); }).catch(e => console.warn('GLTFLoader load failed', e));
  } catch (e) {
    console.warn('ensureGLTFLoader failed', e);
  }
}

function loadGLB(url) {
  return new Promise(async (resolve, reject) => {
    try {
      // dynamic-import GLTFLoader and create an instance
      const mod = await import('https://cdn.jsdelivr.net/npm/three@0.159.0/examples/jsm/loaders/GLTFLoader.js');
      const Loader = mod.GLTFLoader;
      const loader = new Loader();
      loader.load(url, (gltf) => {
        try {
          clearCurrentMesh();
          currentMesh = gltf.scene;
          scene.add(currentMesh);
          showLoader(false);
          if (hudDiv && currentLoadingName) {
            hudDiv.textContent = `Loaded: ${currentLoadingName}`;
            setTimeout(() => { if (hudDiv) hudDiv.textContent = 'Ready'; }, 1200);
          }
          currentLoadingName = null;
          console.log('three-viewer: glb loaded', url);
          resolve();
        } catch (err) {
          console.warn('GLB processing error', err);
          showLoader(false);
          if (hudDiv && currentLoadingName) {
            hudDiv.textContent = `Error loading: ${currentLoadingName}`;
            setTimeout(() => { if (hudDiv) hudDiv.textContent = 'Ready'; }, 1800);
          }
          currentLoadingName = null;
          reject(err);
        }
      }, undefined, (err) => {
        console.warn('GLB load error', err);
        showLoader(false);
        if (hudDiv && currentLoadingName) {
          hudDiv.textContent = `Error loading: ${currentLoadingName}`;
          setTimeout(() => { if (hudDiv) hudDiv.textContent = 'Ready'; }, 1800);
        }
        currentLoadingName = null;
        reject(err);
      });
    } catch (e) {
      console.warn('GLTFLoader import failed', e);
      showLoader(false);
      if (hudDiv && currentLoadingName) {
        hudDiv.textContent = `Error loading: ${currentLoadingName}`;
        setTimeout(() => { if (hudDiv) hudDiv.textContent = 'Ready'; }, 1800);
      }
      currentLoadingName = null;
      reject(e);
    }
  });
}

function showLoader(yes) {
  if (!loaderOverlay) return;
  if (hudDiv && !yes) {
    // when loading finished, reflect ready state briefly
    hudDiv.textContent = hudDiv.textContent || 'Ready';
  }
  loaderOverlay.style.display = yes ? 'flex' : 'none';
}

// Initialize automatically when module loads (robust to readyState)
function initSafely() {
  try {
    // initialize three and then run init
    ensureThree().then(() => init()).catch(e => {
      if (fallbackDiv) fallbackDiv.style.display = 'block';
      console.error('three-viewer init error (ensureThree)', e);
    });
  } catch (e) {
    if (fallbackDiv) fallbackDiv.style.display = 'block';
    console.error('three-viewer init error', e);
  }
}

// Start initialization only after DOM is parsed so container exists — but we keep three.js lazy-loaded via ensureThree()
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSafely);
} else {
  initSafely();
}
