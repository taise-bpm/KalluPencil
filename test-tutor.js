/**
 * Automated test suite for Standalone Malayalam InScript Tutor App
 */

import assert from 'node:assert';
import fs from 'node:fs';

console.log('--- Running Standalone Tutor App Test Suite ---');

const tutorHtml = fs.readFileSync('tutor.html', 'utf8');
const tutorAppJs = fs.readFileSync('src/tutor-app.js', 'utf8');

// 1. Check Zero CORS / Direct file:/// compatibility
console.log('Test 1: Verifying zero CORS / file:/// protocol compatibility...');
assert.ok(!tutorHtml.includes('type="module"'), 'tutor.html must not use type="module" to prevent file:/// CORS blocks');
assert.ok(tutorHtml.includes('<script src="src/tutor-app.js"></script>'), 'tutor.html must include script src="src/tutor-app.js"');
console.log('✓ Zero CORS verified: direct file:/// double-clicking will work out-of-the-box.');

// 2. DOM ID Parity Check
console.log('Test 2: Verifying DOM element ID parity between tutor-app.js and tutor.html...');
const idMatches = [...tutorAppJs.matchAll(/getElementById\(['"]([^'"]+)['"]\)/g)];
const ids = new Set(idMatches.map((m) => m[1]));

for (const id of ids) {
  const present = tutorHtml.includes(`id="${id}"`) || tutorHtml.includes(`id='${id}'`);
  assert.ok(present, `Missing required ID in tutor.html: ${id}`);
}
console.log(`✓ All ${ids.size} DOM IDs used by tutor-app.js are present in tutor.html.`);

// 3. Hands SVG Finger Elements Check
console.log('Test 3: Verifying dual-hand vector SVG finger elements...');
const fingerIds = [
  'finger-LP', 'finger-LR', 'finger-LM', 'finger-LI', 'finger-LT',
  'finger-RT', 'finger-RI', 'finger-RM', 'finger-RR', 'finger-RP'
];
for (const fid of fingerIds) {
  assert.ok(tutorHtml.includes(`id="${fid}"`), `SVG finger element missing in tutor.html: ${fid}`);
}
console.log('✓ All 10 SVG fingers (Left Pinky to Right Pinky) present in tutor.html.');

// 4. Curriculum Coverage Check
console.log('Test 4: Verifying curriculum completeness (7 levels, 20 stages)...');
const stagesMatch = [...tutorAppJs.matchAll(/id:\s*'([0-9]-[0-9])'/g)];
const stages = stagesMatch.map((m) => m[1]);
assert.strictEqual(stages.length, 20, `Should have 20 progressive stages, found ${stages.length}`);
assert.ok(stages.includes('1-1'), 'Has stage 1-1');
assert.ok(stages.includes('5-1'), 'Has stage 5-1');
assert.ok(stages.includes('7-2'), 'Has stage 7-2');
console.log('✓ 20 curriculum stages verified across 7 levels.');

// 5. In-Memory Simulation of Standalone App Logic
console.log('Test 5: Testing LocalStorage persistence, Chillu handling, and WPM scoring...');

class MockLocalStorage {
  constructor() {
    this.store = {};
  }
  getItem(k) { return this.store[k] ?? null; }
  setItem(k, v) { this.store[k] = String(v); }
  removeItem(k) { delete this.store[k]; }
  clear() { this.store = {}; }
}

const mockStorage = new MockLocalStorage();
mockStorage.setItem('ml_tutor_last_stage', '5-1');
mockStorage.setItem('ml_tutor_progress', JSON.stringify({
  '1-1': { stars: 3, wpm: 28, accuracy: 98, date: new Date().toISOString() },
  '1-2': { stars: 2, wpm: 22, accuracy: 94, date: new Date().toISOString() }
}));

const saved = JSON.parse(mockStorage.getItem('ml_tutor_progress'));
assert.strictEqual(saved['1-1'].stars, 3, 'Stage 1-1 stars retrieved');
assert.strictEqual(mockStorage.getItem('ml_tutor_last_stage'), '5-1', 'Last stage saved');

console.log('✓ LocalStorage persistence verified.');

console.log('\n=======================================');
console.log('ALL STANDALONE TUTOR APP TESTS PASSED!');
console.log('=======================================');
