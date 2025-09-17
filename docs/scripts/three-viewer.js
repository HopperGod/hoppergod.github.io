// Minimal three.js viewer module for hoppers preview
// Loads via ES module script tag. Uses CDN imports of three and OrbitControls.

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.159.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.159.0/examples/jsm/controls/OrbitControls.js';

let renderer, scene, camera, controls;
let container, fallbackDiv;
let currentMesh = null;

function init() {
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
  renderer.setClearColor(0x222222);
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 2, 6);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // Lights
  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
  hemi.position.set(0, 20, 0);
  scene.add(hemi);

  const dir = new THREE.DirectionalLight(0xffffff, 0.8);
  dir.position.set(5, 10, 7.5);
  scene.add(dir);

  // ground plane for visual grounding
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.1, roughness: 0.9 });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.01;
  scene.add(ground);

  // initial placeholder model
  setModelToPlaceholder();

  window.addEventListener('resize', onWindowResize);
  animate();
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
  if (controls) controls.update();
  if (renderer && scene && camera) renderer.render(scene, camera);
}

function clearCurrentMesh() {
  if (!currentMesh) return;
  currentMesh.geometry.dispose();
  if (Array.isArray(currentMesh.material)) {
    currentMesh.material.forEach(m => m.dispose());
  } else {
    currentMesh.material.dispose();
  }
  scene.remove(currentMesh);
  currentMesh = null;
}

function setModelToPlaceholder() {
  clearCurrentMesh();
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
window.updateModelForSelections = function() {
  const get = id => document.getElementById(id) && document.getElementById(id).value;
  const vals = {
    selectionA: get('selectionA'),
    selectionB: get('selectionB'),
    selectionC: get('selectionC'),
    selectionD: get('selectionD'),
    selectionE: get('selectionE'),
    selectionF: get('selectionF')
  };

  // If not all selections chosen, show placeholder
  const allChosen = Object.values(vals).every(v => v && v !== '--Please Select An Option--');
  if (!allChosen) {
    setModelToPlaceholder();
    return;
  }

  // create/update model based on selector values
  makeModelFromSelectors(vals);
};

// Initialize automatically when module loads
document.addEventListener('DOMContentLoaded', () => {
  try {
    init();
  } catch (e) {
    if (fallbackDiv) fallbackDiv.style.display = 'block';
    console.error('three-viewer init error', e);
  }
});
