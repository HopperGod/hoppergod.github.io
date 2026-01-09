// === Refactored Script for Hopper Configurator ===

const coneSizes = ['--Please Select An Option--', '14 ft', '15 ft', '15 ft 10 inch Behlen', '18 ft', '19 ft', '21 ft', '24 ft', '27 ft', '33 ft'];
const binSizes = ['--Please Select An Option--', 'Behlen', '5 Tier', '6 Tier', '7 Tier', '8 Tier', '9 Tier', '10 Tier'];
const skidTypes = ['--Please Select An Option--', 'No Skid', 'Double Skid', 'Triple Skid', 'Triple Inset Skid', 'Quad Skid', 'Quad Inset Skid', 'Heavy Quad Skid'];
const chuteTypes = ['--Please Select An Option--', 'Standard Pull', 'Rack & Pinion'];
const airTypes = ['--Please Select An Option--', 'No Air', 'Inverted V', 'X-Air'];
const inletSizes = ['--Please Select An Option--', '18 inch', '24 inch', '28 inch', 'Not Applicable'];

const coneHeightsWithSkid = ['', '6.79', '7.33', '8.12', '8.79', '9.54', '9.96', '11.06', '12.06', '13.94'];
const coneHeightsNoSkid = ['', '6.46', '7.01', '7.80', '8.46', '9.21', '9.65', '10.76', '11.76', '13.64'];

const selects = [
  document.getElementById('selectionA'),
  document.getElementById('selectionB'),
  document.getElementById('selectionC'),
  document.getElementById('selectionD'),
  document.getElementById('selectionE'),
  document.getElementById('selectionF')
];

const outputs = {
  weight: document.getElementById('weightNumber'),
  bp: document.getElementById('bPNumber'),
  capacity: document.getElementById('capacityNumber'),
  leg: document.getElementById('legNumber'),
  height: document.getElementById('heightNumber')
};

const slides = [
  document.getElementById('firstSlide'),
  document.getElementById('secondSlide'),
  document.getElementById('thirdSlide')
];

const PLACEHOLDER_IMG = "resources/images/slide photos/disclaimer.png";

const coneToBinCompatibility = {
    1: [2, 3],
    2: [2, 3],
    3: [1],
    4: [2, 3, 4, 5],
    5: [5],
    6: [3, 4, 5],
    7: [3, 4, 5, 6],
    8: [2, 3, 4, 5, 6],
    9: [7]
  };
  
  const coneBinToSkidCompatibility = {
    '1-2': [1, 2, 3],
    '1-3': [1, 2, 3],
    '2-2': [1, 2, 3],
    '2-3': [1, 2, 3],
    '3-1': [1, 2, 3],
    '4-2': [1, 3],
    '4-3': [1, 3],
    '4-4': [1, 5],
    '4-5': [1, 5],
    '5-5': [1, 3],
    '6-3': [1, 3, 4],
    '6-4': [1, 5, 6],
    '6-5': [1, 5, 6],
    '7-3': [1, 5, 7],
    '7-4': [1, 5, 7],
    '7-5': [1, 7],
    '7-6': [1, 7],
    '8-2': [1, 5],
    '8-3': [1, 5],
    '8-4': [1, 5],
    '8-5': [1, 5],
    '8-6': [1, 7],
    '9-7': [1, 7]
  };

const coneToAirCompatibility = {
  1: [1, 2],
  2: [1, 2],
  3: [1, 2],
  4: [1, 2, 3],
  5: [1, 2, 3],
  6: [1, 2, 3],
  7: [1, 2, 3],
  8: [1, 2, 3],
  9: [1, 2, 3]
};

function resetSlides() {
  slides.forEach(slide => slide.src = PLACEHOLDER_IMG);
}

function resetOutput() {
  outputs.weight.textContent = '0';
  outputs.bp.textContent = '0';
  outputs.capacity.textContent = '0';
  outputs.leg.textContent = '0';
  outputs.height.textContent = '0';
  resetSlides();
}

function allSelectionsMade() {
  return selects.every(select => select.selectedIndex > 0);
}

function resetDropdownsFrom(index) {
  for (let i = index + 1; i < selects.length; i++) {
    selects[i].selectedIndex = 0;
    selects[i].disabled = true;
    enableAllOptions(selects[i]);
  }
  resetOutput();
}

function enableAllOptions(selectElement) {
  Array.from(selectElement.options).forEach(option => {
    option.disabled = false;
  });
}

function updateOutput() {
  const coneIndex = selects[0].selectedIndex;
  const binIndex = selects[1].selectedIndex;
  const skidIndex = selects[2].selectedIndex;
  const chuteIndex = selects[3].selectedIndex;
  const airIndex = selects[4].selectedIndex;
  const inletIndex = selects[5].selectedIndex;

  const configKey = `${coneIndex}-${binIndex}-${skidIndex}-${chuteIndex}-${airIndex}-${inletIndex}`;

  const configData = {
    //14 footers
    '1-2-1-1-1-4': {
      weight: '1724',
      bp: 'N/A',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-2-1-1-2-1': {
      weight: '1724',
      bp: 'N/A',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-2-1-2-1-4': {
      weight: '1724',
      bp: 'N/A',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-2-1-2-2-1': {
      weight: '1724',
      bp: 'N/A',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-3-1-1-1-4': {
      weight: '1724',
      bp: 'N/A',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-3-1-1-2-1': {
      weight: '1724',
      bp: 'N/A',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-3-1-2-1-4': {
      weight: '1724',
      bp: 'N/A',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-3-1-2-2-1': {
      weight: '1724',
      bp: 'N/A',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-2-2-1-1-4': {
      weight: '2280',
      bp: '29',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/14 w 2skid Front View.jpg',
        'resources/images/slide photos/14 w 2skid Iso View.jpg',
        'resources/images/slide photos/14 w 2skid Top View.jpg'
      ]
    },
    '1-2-2-1-2-1': {
      weight: '2280',
      bp: '29',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-2-2-2-1-4': {
      weight: '2280',
      bp: '29',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-2-2-2-2-1': {
      weight: '2280',
      bp: '29',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-3-2-1-1-4': {
      weight: '2280',
      bp: '29',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/14 w 2skid Front View.jpg',
        'resources/images/slide photos/14 w 2skid Iso View.jpg',
        'resources/images/slide photos/14 w 2skid Top View.jpg'
      ]
    },
    '1-3-2-1-2-1': {
      weight: '2280',
      bp: '29',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-3-2-2-1-4': {
      weight: '2280',
      bp: '29',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-3-2-2-2-1': {
      weight: '2280',
      bp: '29',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-2-3-1-1-4': {
      weight: '2560',
      bp: '23',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-2-3-1-2-1': {
      weight: '2560',
      bp: '23',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-2-3-2-1-4': {
      weight: '2560',
      bp: '23',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-2-3-2-2-1': {
      weight: '2560',
      bp: '23',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-3-3-1-1-4': {
      weight: '2560',
      bp: '23',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-3-3-1-2-1': {
      weight: '2560',
      bp: '23',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-3-3-2-1-4': {
      weight: '2560',
      bp: '23',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '1-3-3-2-2-1': {
      weight: '2560',
      bp: '23',
      capacity: '176',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    //15 footers
    '2-2-1-1-1-4': {
      weight: '1783',
      bp: 'N/A',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-1-2-1-4': {
      weight: '1783',
      bp: 'N/A',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-1-1-2-1': {
      weight: '1783',
      bp: 'N/A',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-1-2-2-1': {
      weight: '1783',
      bp: 'N/A',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-1-1-2-2': {
      weight: '1783',
      bp: 'N/A',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-1-2-2-2': {
      weight: '1783',
      bp: 'N/A',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-1-1-1-4': {
      weight: '1783',
      bp: 'N/A',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-1-2-1-4': {
      weight: '1783',
      bp: 'N/A',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-1-1-2-1': {
      weight: '1783',
      bp: 'N/A',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-1-2-2-1': {
      weight: '1783',
      bp: 'N/A',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-1-1-2-2': {
      weight: '1783',
      bp: 'N/A',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-1-2-2-2': {
      weight: '1783',
      bp: 'N/A',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-2-1-1-4': {
      weight: '2400',
      bp: '44',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-2-2-1-4': {
      weight: '2400',
      bp: '44',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-2-1-2-1': {
      weight: '2400',
      bp: '44',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-2-2-2-1': {
      weight: '2400',
      bp: '44',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/15 w 2skid Front View.jpg',
        'resources/images/slide photos/15 w 2skid Iso View.jpg',
        'resources/images/slide photos/15 w 2skid Top View.jpg'
      ]
    },
    '2-2-2-1-2-2': {
      weight: '2400',
      bp: '44',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-2-2-2-2': {
      weight: '2400',
      bp: '44',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-2-1-1-4': {
      weight: '2400',
      bp: '44',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-2-2-1-4': {
      weight: '2400',
      bp: '44',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-2-1-2-1': {
      weight: '2400',
      bp: '44',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-2-2-2-1': {
      weight: '2400',
      bp: '44',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/15 w 2skid Front View.jpg',
        'resources/images/slide photos/15 w 2skid Iso View.jpg',
        'resources/images/slide photos/15 w 2skid Top View.jpg'
      ]
    },
    '2-3-2-1-2-2': {
      weight: '2400',
      bp: '44',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-2-2-2-2': {
      weight: '2400',
      bp: '44',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-3-1-1-4': {
      weight: '2720',
      bp: '30',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-3-2-1-4': {
      weight: '2720',
      bp: '30',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-3-1-2-1': {
      weight: '2720',
      bp: '30',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-3-2-2-1': {
      weight: '2720',
      bp: '30',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-3-1-2-2': {
      weight: '2720',
      bp: '30',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-2-3-2-2-2': {
      weight: '2720',
      bp: '30',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-3-1-1-4': {
      weight: '2720',
      bp: '30',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-3-2-1-4': {
      weight: '2720',
      bp: '30',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-3-1-2-1': {
      weight: '2720',
      bp: '30',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-3-2-2-1': {
      weight: '2720',
      bp: '30',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-3-1-2-2': {
      weight: '2720',
      bp: '30',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '2-3-3-2-2-2': {
      weight: '2720',
      bp: '30',
      capacity: '234',
      leg: '8',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    //15' 10" Behlen
    '3-1-1-1-1-4': {
      weight: '2235',
      bp: 'N/A',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-1-2-1-4': {
      weight: '2235',
      bp: 'N/A',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-1-1-2-1': {
      weight: '2235',
      bp: 'N/A',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-1-2-2-1': {
      weight: '2235',
      bp: 'N/A',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-1-1-2-2': {
      weight: '2235',
      bp: 'N/A',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-1-2-2-2': {
      weight: '2235',
      bp: 'N/A',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-2-1-1-4': {
      weight: '2895',
      bp: 'placeholder',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-2-2-1-4': {
      weight: '2895',
      bp: 'placeholder',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-2-1-2-1': {
      weight: '2895',
      bp: 'placeholder',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-2-2-2-1': {
      weight: '2895',
      bp: 'placeholder',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-2-1-2-2': {
      weight: '2895',
      bp: 'placeholder',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-2-2-2-2': {
      weight: '2895',
      bp: 'placeholder',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-3-1-1-4': {
      weight: '3240',
      bp: 'placeholder',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-3-2-1-4': {
      weight: '3240',
      bp: 'placeholder',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-3-1-2-1': {
      weight: '3240',
      bp: 'placeholder',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-3-2-2-1': {
      weight: '3240',
      bp: 'placeholder',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-3-1-2-2': {
      weight: '3240',
      bp: 'placeholder',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '3-1-3-2-2-2': {
      weight: '3240',
      bp: 'placeholder',
      capacity: '303',
      leg: '10',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    //18 footers
    '4-2-1-1-1-4': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-1-2-1-4': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-1-1-2-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-1-2-2-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-1-1-2-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-1-2-2-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-1-1-3-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-1-2-3-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-1-1-3-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-1-2-3-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '4-3-1-1-1-4': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-1-2-1-4': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-1-1-2-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-1-2-2-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-1-1-2-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-1-2-2-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-1-1-3-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-1-2-3-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-1-1-3-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-1-2-3-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '4-4-1-1-1-4': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-1-2-1-4': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-1-1-2-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-1-2-2-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-1-1-2-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-1-2-2-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-1-1-3-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-1-2-3-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-1-1-3-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-1-2-3-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '4-5-1-1-1-4': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-1-2-1-4': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-1-1-2-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-1-2-2-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-1-1-2-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-1-2-2-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-1-1-3-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-1-2-3-1': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-1-1-3-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-1-2-3-2': {
      weight: '3370',
      bp: 'N/A',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '4-2-3-1-1-4': {
      weight: '3927',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/18 w 3skid Front View.jpg',
        'resources/images/slide photos/18 w 3skid Iso View.jpg',
        'resources/images/slide photos/18 w 3skid Top View.jpg'
      ]
    },
    '4-2-3-2-1-4': {
      weight: '3927',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-3-1-2-1': {
      weight: '3927',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-3-2-2-1': {
      weight: '3927',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-3-1-2-2': {
      weight: '3927',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-3-2-2-2': {
      weight: '3927',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-3-1-3-1': {
      weight: '3927',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-3-2-3-1': {
      weight: '3927',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-3-1-3-2': {
      weight: '3927',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-2-3-2-3-2': {
      weight: '3927',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '4-3-3-1-1-4': {
      weight: '3927',
      bp: '40',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/18 w 3skid Front View.jpg',
        'resources/images/slide photos/18 w 3skid Iso View.jpg',
        'resources/images/slide photos/18 w 3skid Top View.jpg'
      ]
    },
    '4-3-3-2-1-4': {
      weight: '3927',
      bp: '40',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-3-1-2-1': {
      weight: '3927',
      bp: '40',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-3-2-2-1': {
      weight: '3927',
      bp: '40',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-3-1-2-2': {
      weight: '3927',
      bp: '40',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-3-2-2-2': {
      weight: '3927',
      bp: '40',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-3-1-3-1': {
      weight: '3927',
      bp: '40',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-3-2-3-1': {
      weight: '3927',
      bp: '40',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-3-1-3-2': {
      weight: '3927',
      bp: '40',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-3-3-2-3-2': {
      weight: '3927',
      bp: '40',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '4-4-5-1-1-4': {
      weight: '4810',
      bp: '31',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-5-2-1-4': {
      weight: '4810',
      bp: '31',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-5-1-2-1': {
      weight: '4810',
      bp: '31',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-5-2-2-1': {
      weight: '4810',
      bp: '31',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-5-1-2-2': {
      weight: '4810',
      bp: '31',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-5-2-2-2': {
      weight: '4810',
      bp: '31',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-5-1-3-1': {
      weight: '4810',
      bp: '31',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-5-2-3-1': {
      weight: '4810',
      bp: '31',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-5-1-3-2': {
      weight: '4810',
      bp: '31',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-4-5-2-3-2': {
      weight: '4810',
      bp: '31',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '4-5-5-1-1-4': {
      weight: '4810',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-5-2-1-4': {
      weight: '4810',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-5-1-2-1': {
      weight: '4810',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-5-2-2-1': {
      weight: '4810',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-5-1-2-2': {
      weight: '4810',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-5-2-2-2': {
      weight: '4810',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-5-1-3-1': {
      weight: '4810',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-5-2-3-1': {
      weight: '4810',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-5-1-3-2': {
      weight: '4810',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '4-5-5-2-3-2': {
      weight: '4810',
      bp: '35',
      capacity: '398',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    //19 footers
    '5-5-1-1-1-4': {
      weight: '2965',
      bp: 'N/A',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-1-2-1-4': {
      weight: '2965',
      bp: 'N/A',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-1-1-2-1': {
      weight: '2965',
      bp: 'N/A',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-1-2-2-1': {
      weight: '2965',
      bp: 'N/A',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-1-1-2-2': {
      weight: '2965',
      bp: 'N/A',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-1-2-2-2': {
      weight: '2965',
      bp: 'N/A',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-1-1-3-1': {
      weight: '2965',
      bp: 'N/A',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-1-2-3-1': {
      weight: '2965',
      bp: 'N/A',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-1-1-3-2': {
      weight: '2965',
      bp: 'N/A',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-1-2-3-2': {
      weight: '2965',
      bp: 'N/A',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '5-5-3-1-1-4': {
      weight: '4195',
      bp: '38',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-3-2-1-4': {
      weight: '4195',
      bp: '38',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-3-1-2-1': {
      weight: '4195',
      bp: '38',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-3-2-2-1': {
      weight: '4195',
      bp: '38',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-3-1-2-2': {
      weight: '4195',
      bp: '38',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-3-2-2-2': {
      weight: '4195',
      bp: '38',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-3-1-3-1': {
      weight: '4195',
      bp: '38',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-3-2-3-1': {
      weight: '4195',
      bp: '38',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-3-1-3-2': {
      weight: '4195',
      bp: '38',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '5-5-3-2-3-2': {
      weight: '4195',
      bp: '38',
      capacity: '549',
      leg: '12',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    //21 footers
    '6-3-1-1-1-4': {
      weight: '5252',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-1-2-1-4': {
      weight: '5252',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-1-1-2-1': {
      weight: '5252',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-1-2-2-1': {
      weight: '5252',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-1-1-2-2': {
      weight: '5252',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-1-2-2-2': {
      weight: '5252',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-1-1-2-3': {
      weight: '5252',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-1-2-2-3': {
      weight: '5252',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-1-1-3-1': {
      weight: '5252',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-1-2-3-1': {
      weight: '5252',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-1-1-3-2': {
      weight: '5252',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-1-2-3-2': {
      weight: '5252',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-1-1-3-3': {
      weight: '5252',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-1-2-3-3': {
      weight: '5252',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '6-4-1-1-1-4': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-1-2-1-4': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-1-1-2-1': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-1-2-2-1': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-1-1-2-2': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-1-2-2-2': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-1-1-2-3': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-1-2-2-3': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-1-1-3-1': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-1-2-3-1': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-1-1-3-2': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-1-2-3-2': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-1-1-3-3': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-1-2-3-3': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '6-5-1-1-1-4': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-1-2-1-4': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-1-1-2-1': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-1-2-2-1': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-1-1-2-2': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-1-2-2-2': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-1-1-2-3': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-1-2-2-3': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-1-1-3-1': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-1-2-3-1': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-1-1-3-2': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-1-2-3-2': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-1-1-3-3': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-1-2-3-3': {
      weight: '6805',
      bp: 'N/A',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '6-3-3-1-1-4': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/21 w 3skid Front View.jpg',
        'resources/images/slide photos/21 w 3skid Iso View.jpg',
        'resources/images/slide photos/21 w 3skid Top View.jpg'
      ]
    },
    '6-3-3-2-1-4': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-3-1-2-1': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-3-2-2-1': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-3-1-2-2': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-3-2-2-2': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-3-1-2-3': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-3-2-2-3': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-3-1-3-1': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-3-2-3-1': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-3-1-3-2': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-3-2-3-2': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-3-1-3-3': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-3-2-3-3': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '6-3-4-1-1-4': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-4-2-1-4': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-4-1-2-1': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-4-2-2-1': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-4-1-2-2': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-4-2-2-2': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-4-1-2-3': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-4-2-2-3': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-4-1-3-1': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-4-2-3-1': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-4-1-3-2': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-4-2-3-2': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-4-1-3-3': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-3-4-2-3-3': {
      weight: '6405',
      bp: '46',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '6-4-5-1-1-4': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-5-2-1-4': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-5-1-2-1': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-5-2-2-1': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-5-1-2-2': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-5-2-2-2': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-5-1-2-3': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-5-2-2-3': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-5-1-3-1': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-5-2-3-1': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-5-1-3-2': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-5-2-3-2': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-5-1-3-3': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-5-2-3-3': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '6-4-6-1-1-4': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-6-2-1-4': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-6-1-2-1': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-6-2-2-1': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-6-1-2-2': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-6-2-2-2': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-6-1-2-3': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-6-2-2-3': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-6-1-3-1': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-6-2-3-1': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-6-1-3-2': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-6-2-3-2': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-6-1-3-3': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-4-6-2-3-3': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '6-5-5-1-1-4': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-5-2-1-4': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-5-1-2-1': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-5-2-2-1': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-5-1-2-2': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-5-2-2-2': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-5-1-2-3': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-5-2-2-3': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-5-1-3-1': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-5-2-3-1': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-5-1-3-2': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-5-2-3-2': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-5-1-3-3': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-5-2-3-3': {
      weight: '7590',
      bp: '40',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '6-5-6-1-1-4': {
      weight: '7590',
      bp: '45',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-6-2-1-4': {
      weight: '7590',
      bp: '45',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-6-1-2-1': {
      weight: '7590',
      bp: '45',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-6-2-2-1': {
      weight: '7590',
      bp: '45',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-6-1-2-2': {
      weight: '7590',
      bp: '45',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-6-2-2-2': {
      weight: '7590',
      bp: '45',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-6-1-2-3': {
      weight: '7590',
      bp: '45',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-6-2-2-3': {
      weight: '7590',
      bp: '45',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-6-1-3-1': {
      weight: '7590',
      bp: '45',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-6-2-3-1': {
      weight: '7590',
      bp: '45',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-6-1-3-2': {
      weight: '7590',
      bp: '45',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-6-2-3-2': {
      weight: '7590',
      bp: '45',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-6-1-3-3': {
      weight: '7590',
      bp: '45',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '6-5-6-2-3-3': {
      weight: '7590',
      bp: '45',
      capacity: '692',
      leg: '14',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    //24 footers
    '7-3-1-1-1-4': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-3-1-2-1-4': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-3-1-1-2-1': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-3-1-2-2-1': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-3-1-1-2-2': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-3-1-2-2-2': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-3-1-1-2-3': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-3-1-2-2-3': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-3-1-1-3-1': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-3-1-2-3-1': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-3-1-1-3-2': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-3-1-2-3-2': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-3-1-1-3-3': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-3-1-2-3-3': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },

    '7-4-1-1-1-4': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-4-1-2-1-4': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-4-1-1-2-1': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-4-1-2-2-1': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-4-1-1-2-2': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-4-1-2-2-2': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-4-1-1-2-3': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-4-1-2-2-3': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-4-1-1-3-1': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-4-1-2-3-1': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-4-1-1-3-2': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-4-1-2-3-2': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-4-1-1-3-3': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-4-1-2-3-3': {
      weight: '7250',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },

    '7-3-5-1-1-4': {
      weight: '9350',
      bp: '42',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-5-2-1-4': {
      weight: '9350',
      bp: '42',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-5-1-2-1': {
      weight: '9350',
      bp: '42',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-5-2-2-1': {
      weight: '9350',
      bp: '42',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-5-1-2-2': {
      weight: '9350',
      bp: '42',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-5-2-2-2': {
      weight: '9350',
      bp: '42',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },'7-3-5-1-2-3': {
      weight: '9350',
      bp: '42',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-5-2-2-3': {
      weight: '9350',
      bp: '42',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-5-1-3-1': {
      weight: '9350',
      bp: '42',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-5-2-3-1': {
      weight: '9350',
      bp: '42',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-5-1-3-2': {
      weight: '9350',
      bp: '42',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-5-2-3-2': {
      weight: '9350',
      bp: '42',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-5-1-3-3': {
      weight: '9350',
      bp: '42',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-5-2-3-3': {
      weight: '9350',
      bp: '42',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },

    '7-4-5-1-1-4': {
      weight: '9350',
      bp: '47',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-5-2-1-4': {
      weight: '7250',
      bp: '47',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-5-1-2-1': {
      weight: '9350',
      bp: '47',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-5-2-2-1': {
      weight: '9350',
      bp: '47',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-5-1-2-2': {
      weight: '9350',
      bp: '47',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-5-2-2-2': {
      weight: '9350',
      bp: '47',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },'7-4-5-1-2-3': {
      weight: '9350',
      bp: '47',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-5-2-2-3': {
      weight: '9350',
      bp: '47',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-5-1-3-1': {
      weight: '9350',
      bp: '47',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-5-2-3-1': {
      weight: '9350',
      bp: '47',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-5-1-3-2': {
      weight: '9350',
      bp: '47',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-5-2-3-2': {
      weight: '9350',
      bp: '47',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-5-1-3-3': {
      weight: '9350',
      bp: '47',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-5-2-3-3': {
      weight: '9350',
      bp: '47',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },

    '7-3-7-1-1-4': {
      weight: '9695',
      bp: '41',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-7-2-1-4': {
      weight: '9695',
      bp: '41',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-7-1-2-1': {
      weight: '9695',
      bp: '41',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-7-2-2-1': {
      weight: '9695',
      bp: '41',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-7-1-2-2': {
      weight: '9695',
      bp: '41',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-7-2-2-2': {
      weight: '9695',
      bp: '41',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-7-1-2-3': {
      weight: '9695',
      bp: '41',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-7-2-2-3': {
      weight: '9695',
      bp: '41',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-7-1-3-1': {
      weight: '9695',
      bp: '41',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-7-2-3-1': {
      weight: '9695',
      bp: '41',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-7-1-3-2': {
      weight: '9695',
      bp: '41',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-7-2-3-2': {
      weight: '9695',
      bp: '41',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-7-1-3-3': {
      weight: '9695',
      bp: '41',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-3-7-2-3-3': {
      weight: '9695',
      bp: '41',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },

    '7-4-7-1-1-4': {
      weight: '9695',
      bp: 'placeholder',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-7-2-1-4': {
      weight: '9695',
      bp: 'placeholder',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-7-1-2-1': {
      weight: '9695',
      bp: 'placeholder',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-7-2-2-1': {
      weight: '9695',
      bp: 'placeholder',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-7-1-2-2': {
      weight: '9695',
      bp: 'placeholder',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-7-2-2-2': {
      weight: '9695',
      bp: 'placeholder',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-7-1-2-3': {
      weight: '9695',
      bp: 'placeholder',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-7-2-2-3': {
      weight: '9695',
      bp: 'placeholder',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-7-1-3-1': {
      weight: '9695',
      bp: 'placeholder',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-7-2-3-1': {
      weight: '9695',
      bp: 'placeholder',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-7-1-3-2': {
      weight: '9695',
      bp: 'placeholder',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-7-2-3-2': {
      weight: '9695',
      bp: 'placeholder',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-7-1-3-3': {
      weight: '9695',
      bp: 'placeholder',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-4-7-2-3-3': {
      weight: '9695',
      bp: 'placeholder',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },

    '7-5-1-1-1-4': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-5-1-2-1-4': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-5-1-1-2-1': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-5-1-2-2-1': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-5-1-1-2-2': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-5-1-2-2-2': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-5-1-1-2-3': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-5-1-2-2-3': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-5-1-1-3-1': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-5-1-2-3-1': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-5-1-1-3-2': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-5-1-2-3-2': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-5-1-1-3-3': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-5-1-2-3-3': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },

    '7-6-1-1-1-4': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-6-1-2-1-4': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-6-1-1-2-1': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-6-1-2-2-1': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-6-1-1-2-2': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-6-1-2-2-2': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-6-1-1-2-3': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-6-1-2-2-3': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-6-1-1-3-1': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-6-1-2-3-1': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-6-1-1-3-2': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-6-1-2-3-2': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-6-1-1-3-3': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },
    '7-6-1-2-3-3': {
      weight: '7830',
      bp: 'N/A',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Pads Front View.png',
        'resources/images/slide photos/24 w Pads Iso View.png',
        'resources/images/slide photos/24 w Pads Iso Low View.png'
      ]
    },

    '7-5-7-1-1-4': {
      weight: '10250',
      bp: '39',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-5-7-2-1-4': {
      weight: '10250',
      bp: '39',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-5-7-1-2-1': {
      weight: '10250',
      bp: '39',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-5-7-2-2-1': {
      weight: '10250',
      bp: '39',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-5-7-1-2-2': {
      weight: '10250',
      bp: '39',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-5-7-2-2-2': {
      weight: '10250',
      bp: '39',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-5-7-1-2-3': {
      weight: '10250',
      bp: '39',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-5-7-2-2-3': {
      weight: '10250',
      bp: '39',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-5-7-1-3-1': {
      weight: '10250',
      bp: '39',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-5-7-2-3-1': {
      weight: '10250',
      bp: '39',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-5-7-1-3-2': {
      weight: '10250',
      bp: '39',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-5-7-2-3-2': {
      weight: '10250',
      bp: '39',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-5-7-1-3-3': {
      weight: '10250',
      bp: '39',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-5-7-2-3-3': {
      weight: '10250',
      bp: '39',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },

     '7-6-7-1-1-4': {
      weight: '10250',
      bp: '43',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-6-7-2-1-4': {
      weight: '10250',
      bp: '43',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-6-7-1-2-1': {
      weight: '10250',
      bp: '43',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-6-7-2-2-1': {
      weight: '10250',
      bp: '43',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-6-7-1-2-2': {
      weight: '10250',
      bp: '43',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-6-7-2-2-2': {
      weight: '10250',
      bp: '43',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-6-7-1-2-3': {
      weight: '10250',
      bp: '43',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-6-7-2-2-3': {
      weight: '10250',
      bp: '43',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-6-7-1-3-1': {
      weight: '10250',
      bp: '43',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-6-7-2-3-1': {
      weight: '10250',
      bp: '43',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-6-7-1-3-2': {
      weight: '10250',
      bp: '43',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-6-7-2-3-2': {
      weight: '10250',
      bp: '43',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-6-7-1-3-3': {
      weight: '10250',
      bp: '43',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    '7-6-7-2-3-3': {
      weight: '10250',
      bp: '43',
      capacity: '1043',
      leg: '16',
      images: [
        'resources/images/slide photos/24 w Skid Front View.png',
        'resources/images/slide photos/24 w Skid Iso View.png',
        'resources/images/slide photos/24 w Skid Iso Low View.png'
      ]
    },
    //27 footers
    '8-2-1-1-1-4': {
      weight: '8905',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-2-1-2-1-4': {
      weight: '8905',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-2-1-1-2-3': {
      weight: '8905',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-2-1-2-2-3': {
      weight: '8905',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-2-1-1-3-3': {
      weight: '8905',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-2-1-2-3-3': {
      weight: '8905',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-2-5-1-1-4': {
      weight: '11375',
      bp: '44',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-2-5-2-1-4': {
      weight: '11375',
      bp: '44',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-2-5-1-2-3': {
      weight: '11375',
      bp: '44',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-2-5-2-2-3': {
      weight: '11375',
      bp: '44',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-2-5-1-3-3': {
      weight: '11375',
      bp: '44',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-2-5-2-3-3': {
      weight: '11375',
      bp: '44',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-3-1-1-1-4': {
      weight: '9820',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-3-1-2-1-4': {
      weight: '9820',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-3-1-1-2-3': {
      weight: '9820',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-3-1-2-2-3': {
      weight: '9820',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-3-1-1-3-3': {
      weight: '9820',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-3-1-2-3-3': {
      weight: '9820',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-3-5-1-1-4': {
      weight: '12750',
      bp: '41',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-3-5-2-1-4': {
      weight: '12750',
      bp: '41',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-3-5-1-2-3': {
      weight: '12750',
      bp: '41',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-3-5-2-2-3': {
      weight: '12750',
      bp: '41',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-3-5-1-3-3': {
      weight: '12750',
      bp: '41',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-3-5-2-3-3': {
      weight: '12750',
      bp: '41',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-4-1-1-1-4': {
      weight: '10665',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-4-1-2-1-4': {
      weight: '10665',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-4-1-1-2-3': {
      weight: '10665',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-4-1-2-2-3': {
      weight: '10665',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-4-1-1-3-3': {
      weight: '10665',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-4-1-2-3-3': {
      weight: '10665',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-4-5-1-1-4': {
      weight: '13990',
      bp: '39',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-4-5-2-1-4': {
      weight: '13990',
      bp: '39',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-4-5-1-2-3': {
      weight: '13990',
      bp: '39',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-4-5-2-2-3': {
      weight: '13990',
      bp: '39',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-4-5-1-3-3': {
      weight: '13990',
      bp: '39',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '8-4-5-2-3-3': {
      weight: '13990',
      bp: '39',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },

    '8-5-1-1-1-4': {
      weight: '10665',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Pads Front View.png',
        'resources/images/slide photos/2708 09 w Pads Iso View.png',
        'resources/images/slide photos/2708 09 w Pads Iso Low View.png'
      ]
    },
    '8-5-1-2-1-4': {
      weight: '10665',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Pads Front View.png',
        'resources/images/slide photos/2708 09 w Pads Iso View.png',
        'resources/images/slide photos/2708 09 w Pads Iso Low View.png'
      ]
    },
    '8-5-1-1-2-3': {
      weight: '10665',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Pads Front View.png',
        'resources/images/slide photos/2708 09 w Pads Iso View.png',
        'resources/images/slide photos/2708 09 w Pads Iso Low View.png'
      ]
    },
    '8-5-1-2-2-3': {
      weight: '10665',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Pads Front View.png',
        'resources/images/slide photos/2708 09 w Pads Iso View.png',
        'resources/images/slide photos/2708 09 w Pads Iso Low View.png'
      ]
    },
    '8-5-1-1-3-3': {
      weight: '10665',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Pads Front View.png',
        'resources/images/slide photos/2708 09 w Pads Iso View.png',
        'resources/images/slide photos/2708 09 w Pads Iso Low View.png'
      ]
    },
    '8-5-1-2-3-3': {
      weight: '10665',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Pads Front View.png',
        'resources/images/slide photos/2708 09 w Pads Iso View.png',
        'resources/images/slide photos/2708 09 w Pads Iso Low View.png'
      ]
    },
    '8-6-1-1-1-4': {
      weight: '11630',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Pads Front View.png',
        'resources/images/slide photos/2708 09 w Pads Iso View.png',
        'resources/images/slide photos/2708 09 w Pads Iso Low View.png'
      ]
    },
    '8-6-1-2-1-4': {
      weight: '11630',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Pads Front View.png',
        'resources/images/slide photos/2708 09 w Pads Iso View.png',
        'resources/images/slide photos/2708 09 w Pads Iso Low View.png'
      ]
    },
    '8-6-1-1-2-3': {
      weight: '11630',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Pads Front View.png',
        'resources/images/slide photos/2708 09 w Pads Iso View.png',
        'resources/images/slide photos/2708 09 w Pads Iso Low View.png'
      ]
    },
    '8-6-1-2-2-3': {
      weight: '11630',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Pads Front View.png',
        'resources/images/slide photos/2708 09 w Pads Iso View.png',
        'resources/images/slide photos/2708 09 w Pads Iso Low View.png'
      ]
    },
    '8-6-1-1-3-3': {
      weight: '11630',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Pads Front View.png',
        'resources/images/slide photos/2708 09 w Pads Iso View.png',
        'resources/images/slide photos/2708 09 w Pads Iso Low View.png'
      ]
    },
    '8-6-1-2-3-3': {
      weight: '11630',
      bp: 'N/A',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Pads Front View.png',
        'resources/images/slide photos/2708 09 w Pads Iso View.png',
        'resources/images/slide photos/2708 09 w Pads Iso Low View.png'
      ]
    },

    '8-5-5-1-1-4': {
      weight: '13990',
      bp: '42',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Skid Front View.png',
        'resources/images/slide photos/2708 09 w Skid Iso View.png',
        'resources/images/slide photos/2708 09 w SKid Iso Low View.png'
      ]
    },
    '8-5-5-2-1-4': {
      weight: '13990',
      bp: '42',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Skid Front View.png',
        'resources/images/slide photos/2708 09 w Skid Iso View.png',
        'resources/images/slide photos/2708 09 w Skid Iso Low View.png'
      ]
    },
    '8-5-5-1-2-3': {
      weight: '13990',
      bp: '42',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Skid Front View.png',
        'resources/images/slide photos/2708 09 w Skid Iso View.png',
        'resources/images/slide photos/2708 09 w SKid Iso Low View.png'
      ]
    },
    '8-5-5-2-2-3': {
      weight: '13990',
      bp: '42',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Skid Front View.png',
        'resources/images/slide photos/2708 09 w Skid Iso View.png',
        'resources/images/slide photos/2708 09 w Skid Iso Low View.png'
      ]
    },
    '8-5-5-1-3-3': {
      weight: '13990',
      bp: '42',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Skid Front View.png',
        'resources/images/slide photos/2708 09 w Skid Iso View.png',
        'resources/images/slide photos/2708 09 w SKid Iso Low View.png'
      ]
    },
    '8-5-5-2-3-3': {
      weight: '13990',
      bp: '42',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Skid Front View.png',
        'resources/images/slide photos/2708 09 w Skid Iso View.png',
        'resources/images/slide photos/2708 09 w Skid Iso Low View.png'
      ]
    },

    '8-6-7-1-1-4': {
      weight: '15500',
      bp: '47',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Skid Front View.png',
        'resources/images/slide photos/2708 09 w Skid Iso View.png',
        'resources/images/slide photos/2708 09 w SKid Iso Low View.png'
      ]
    },
    '8-6-7-2-1-4': {
      weight: '15500',
      bp: '47',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Skid Front View.png',
        'resources/images/slide photos/2708 09 w Skid Iso View.png',
        'resources/images/slide photos/2708 09 w Skid Iso Low View.png'
      ]
    },
    '8-6-7-1-2-3': {
      weight: '15500',
      bp: '47',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Skid Front View.png',
        'resources/images/slide photos/2708 09 w Skid Iso View.png',
        'resources/images/slide photos/2708 09 w SKid Iso Low View.png'
      ]
    },
    '8-6-7-2-2-3': {
      weight: '15500',
      bp: '47',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Skid Front View.png',
        'resources/images/slide photos/2708 09 w Skid Iso View.png',
        'resources/images/slide photos/2708 09 w Skid Iso Low View.png'
      ]
    },
    '8-6-7-1-3-3': {
      weight: '15500',
      bp: '47',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Skid Front View.png',
        'resources/images/slide photos/2708 09 w Skid Iso View.png',
        'resources/images/slide photos/2708 09 w SKid Iso Low View.png'
      ]
    },
    '8-6-7-2-3-3': {
      weight: '15500',
      bp: '47',
      capacity: '1464',
      leg: '18',
      images: [
        'resources/images/slide photos/2708 09 w Skid Front View.png',
        'resources/images/slide photos/2708 09 w Skid Iso View.png',
        'resources/images/slide photos/2708 09 w Skid Iso Low View.png'
      ]
    },
    //33 footers
    '9-7-1-1-1-4': {
      weight: '21256',
      bp: 'N/A',
      capacity: '2750',
      leg: '22',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '9-7-1-2-1-4': {
      weight: '21256',
      bp: 'N/A',
      capacity: '2750',
      leg: '22',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '9-7-1-1-2-3': {
      weight: '21256',
      bp: 'N/A',
      capacity: '2750',
      leg: '22',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '9-7-1-2-2-3': {
      weight: '21256',
      bp: 'N/A',
      capacity: '2750',
      leg: '22',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '9-7-1-1-3-3': {
      weight: '21256',
      bp: 'N/A',
      capacity: '2750',
      leg: '22',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '9-7-1-2-3-3': {
      weight: '21256',
      bp: 'N/A',
      capacity: '2750',
      leg: '22',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '9-7-7-1-1-4': {
      weight: '29439',
      bp: '48.8',
      capacity: '2750',
      leg: '22',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '9-7-7-2-1-4': {
      weight: '29439',
      bp: '48.8',
      capacity: '2750',
      leg: '22',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '9-7-7-1-2-3': {
      weight: '29439',
      bp: '48.8',
      capacity: '2750',
      leg: '22',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '9-7-7-2-2-3': {
      weight: '29439',
      bp: '48.8',
      capacity: '2750',
      leg: '22',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '9-7-7-1-3-3': {
      weight: '29439',
      bp: '48.8',
      capacity: '2750',
      leg: '22',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    },
    '9-7-7-2-3-3': {
      weight: '29439',
      bp: '48.8',
      capacity: '2750',
      leg: '22',
      images: [
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png',
        'resources/images/slide photos/disclaimer.png'
      ]
    }
  };
  

  const match = configData[configKey];
  if (match) {
    outputs.weight.textContent = match.weight;
    outputs.bp.textContent = match.bp;
    outputs.capacity.textContent = match.capacity;
    outputs.leg.textContent = match.leg;
    slides.forEach((slide, i) => {
      slide.src = match.images[i] || PLACEHOLDER_IMG;
    });
  } else {
    outputs.weight.textContent = 'N/A';
    outputs.bp.textContent = 'N/A';
    outputs.capacity.textContent = 'N/A';
    outputs.leg.textContent = 'N/A';
    resetSlides();
  }
}

function onSelectionChange(index) {
  resetDropdownsFrom(index);

  if (index === 0) {
    const coneIndex = selects[0].selectedIndex;
    const binSelect = selects[1];
    enableAllOptions(binSelect);

    if (coneToBinCompatibility[coneIndex]) {
      const validBinIndices = coneToBinCompatibility[coneIndex];
      Array.from(binSelect.options).forEach((opt, idx) => {
        if (idx === 0) return;
        opt.disabled = !validBinIndices.includes(idx);
      });
      binSelect.disabled = false;
    } else {
      binSelect.disabled = true;
    }
  }

  if (index === 1) {
    const coneIndex = selects[0].selectedIndex;
    const binIndex = selects[1].selectedIndex;
    const skidSelect = selects[2];
    const comboKey = `${coneIndex}-${binIndex}`;
    enableAllOptions(skidSelect);

    if (coneBinToSkidCompatibility[comboKey]) {
      const validSkidIndices = coneBinToSkidCompatibility[comboKey];
      Array.from(skidSelect.options).forEach((opt, idx) => {
        if (idx === 0) return;
        opt.disabled = !validSkidIndices.includes(idx);
      });
    } else {
      Array.from(skidSelect.options).forEach((opt, idx) => {
        if (idx !== 0) opt.disabled = true;
      });
    }
    skidSelect.disabled = false;
  }

  if (index === 3) {
    const coneIndex = selects[0].selectedIndex;
    const airSelect = selects[4];
    enableAllOptions(airSelect);

    if (coneToAirCompatibility[coneIndex]) {
      const validAirIndices = coneToAirCompatibility[coneIndex];
      Array.from(airSelect.options).forEach((opt, idx) => {
        if (idx === 0) return;
        opt.disabled = !validAirIndices.includes(idx);
      });
    } else {
      Array.from(airSelect.options).forEach((opt, idx) => {
        if (idx !== 0) opt.disabled = true;
      });
    }
    airSelect.disabled = false;
  }

 if (index === 4) {
    const coneIndex = selects[0].selectedIndex;
    const airIndex = selects[4].selectedIndex;
    const inletSelect = selects[5];
    enableAllOptions(inletSelect);

    if (airIndex === 1) {
      // No Air — only "Not Applicable"
      Array.from(inletSelect.options).forEach((opt, idx) => {
        if (idx !== 0 && idx !== 4) opt.disabled = true;
      });
    } else {
      // With air — apply rules based on cone size
      if (coneIndex === 1) {
        // 14 ft — 18 inch only
        Array.from(inletSelect.options).forEach((opt, idx) => {
          if (idx !== 0 && idx !== 1) opt.disabled = true;
        });
      } else if ([2, 4, 5].includes(coneIndex)) {
        // 15 ft, 15'10 Behlen, 18 ft, 19 ft — 18 or 24 inch
        Array.from(inletSelect.options).forEach((opt, idx) => {
          if (![0, 1, 2].includes(idx)) opt.disabled = true;
        });
      } else if ([6, 7].includes(coneIndex)) {
        // 21 ft, 24 ft — 18, 24, 28 inch
        Array.from(inletSelect.options).forEach((opt, idx) => {
          if (![0, 1, 2, 3].includes(idx)) opt.disabled = true;
        });
      } else if ([8, 9].includes(coneIndex)) {
        // 27 ft, 33 ft — only 28 inch
        Array.from(inletSelect.options).forEach((opt, idx) => {
          if (idx !== 0 && idx !== 3) opt.disabled = true;
        });
      } else {
        // Fallback — disable all but default
        Array.from(inletSelect.options).forEach((opt, idx) => {
          if (idx !== 0) opt.disabled = true;
        });
      }
    }

    inletSelect.disabled = false;
  }

  if (index + 1 < selects.length) {
    selects[index + 1].disabled = false;
  }

  // Update height when cone or skid changes
  if (index === 0 || index === 2) {
    const coneIndex = selects[0].selectedIndex;
    const skidIndex = selects[2].selectedIndex;
    if (coneIndex > 0) {
      if (skidIndex === 1) {
        outputs.height.textContent = coneHeightsNoSkid[coneIndex] || '0';
      } else if (skidIndex > 1) {
        outputs.height.textContent = coneHeightsWithSkid[coneIndex] || '0';
      } else {
        // Skid not selected yet, show no skid height as default
        outputs.height.textContent = coneHeightsNoSkid[coneIndex] || '0';
      }
    } else {
      outputs.height.textContent = '0';
    }
  }

  if (allSelectionsMade()) {
    updateOutput();
  }
}

selects.forEach((select, i) => {
  select.addEventListener('change', () => onSelectionChange(i));
});

resetDropdownsFrom(0);
selects[0].disabled = false;

// === Slideshow shim (maintains legacy HTML controls) ===
(function () {
let slideIndex = 1;


function showSlides(n) {
const slidesEls = document.getElementsByClassName('mySlides');
const dots = document.getElementsByClassName('dot');
if (slidesEls.length === 0) return; // defensive: no slides on page


if (n > slidesEls.length) { slideIndex = 1; }
if (n < 1) { slideIndex = slidesEls.length; }


for (let i = 0; i < slidesEls.length; i++) {
slidesEls[i].style.display = 'none';
}
for (let i = 0; i < dots.length; i++) {
// remove just one trailing ' active' if present
dots[i].className = dots[i].className.replace(' active', '');
}


slidesEls[slideIndex - 1].style.display = 'block';
if (dots[slideIndex - 1]) {
dots[slideIndex - 1].className += ' active';
}
}


// Expose the two handlers that the HTML uses
window.plusSlides = function (n) {
showSlides((slideIndex += n));
};
window.currentSlide = function (n) {
showSlides((slideIndex = n));
};


// Since scripts are loaded with `defer`, DOM is parsed by now, but this is safe.
document.addEventListener('DOMContentLoaded', function () {
showSlides(slideIndex);
});
})();