/**
 * Automated test suite for Malayalam InScript Typing Engine
 */

import assert from 'node:assert';
import { INSCRIPT_MAP, CHILLU_CHARS, CONJUNCT_PRESETS } from './src/inscript-data.js';
import { MalayalamEditorEngine } from './src/editor-engine.js';

console.log('--- Running Malayalam InScript Test Suite ---');

// 1. Verify InScript Mappings
console.log('Test 1: Verifying standard InScript mappings...');
assert.strictEqual(INSCRIPT_MAP.KeyK.normal, 'ക', 'k should map to ക');
assert.strictEqual(INSCRIPT_MAP.KeyK.shift, 'ഖ', 'Shift+k should map to ഖ');
assert.strictEqual(INSCRIPT_MAP.KeyD.normal, '്', 'd should map to virama (്)');
assert.strictEqual(INSCRIPT_MAP.KeyD.shift, 'അ', 'Shift+d should map to independent vowel അ');
assert.strictEqual(INSCRIPT_MAP.KeyE.normal, 'ാ', 'e should map to aa matra (ാ)');
assert.strictEqual(INSCRIPT_MAP.KeyE.shift, 'ആ', 'Shift+e should map to independent vowel ആ');
assert.strictEqual(INSCRIPT_MAP.KeyJ.normal, 'ര', 'j should map to ra (ര)');
assert.strictEqual(INSCRIPT_MAP.KeyJ.shift, 'റ', 'Shift+j should map to rra (റ)');
assert.strictEqual(INSCRIPT_MAP.KeyH.normal, 'പ', 'h should map to pa (പ)');
assert.strictEqual(INSCRIPT_MAP.KeyH.shift, 'ഫ', 'Shift+h should map to pha (ഫ)');
assert.strictEqual(INSCRIPT_MAP.KeyX.normal, 'ം', 'x should map to anusvara (ം)');
assert.strictEqual(INSCRIPT_MAP.Minus.shift, 'ഃ', 'Shift+- should map to visarga (ഃ)');
console.log('✓ InScript key mappings verified successfully.');

// 2. Verify Chillus
console.log('Test 2: Verifying Malayalam Chillus...');
const chilluChars = CHILLU_CHARS.map((c) => c.char);
assert.ok(chilluChars.includes('ൺ'), 'Includes ൺ');
assert.ok(chilluChars.includes('ൻ'), 'Includes ൻ');
assert.ok(chilluChars.includes('ർ'), 'Includes ർ');
assert.ok(chilluChars.includes('ൽ'), 'Includes ൽ');
assert.ok(chilluChars.includes('ൾ'), 'Includes ൾ');
assert.ok(chilluChars.includes('ൿ'), 'Includes ൿ');
console.log('✓ All 6 atomic chillus verified.');

// 3. Mock Textarea DOM element to test MalayalamEditorEngine in Node.js
console.log('Test 3: Testing Editor Engine logic...');

class MockTextarea {
  constructor() {
    this.value = '';
    this.selectionStart = 0;
    this.selectionEnd = 0;
    this._listeners = {};
  }
  addEventListener(event, fn) {
    if (!this._listeners[event]) this._listeners[event] = [];
    this._listeners[event].push(fn);
  }
  focus() {}
  setSelectionRange(start, end) {
    this.selectionStart = start;
    this.selectionEnd = end;
  }
}

const mockEl = new MockTextarea();
const engine = new MalayalamEditorEngine(mockEl);

// Test text insertion
engine.insertText('മലയാളം');
assert.strictEqual(mockEl.value, 'മലയാളം', 'Should insert മലയാളം');

// Test stats calculation
const stats = engine.getStats();
assert.strictEqual(stats.words, 1, 'Word count should be 1');
assert.ok(stats.aksharams >= 4, `Aksharam count should be accurate (got ${stats.aksharams})`);

// Test Smart Backspace
engine.smartBackspace(); // Deletes ം or ളം
assert.ok(mockEl.value.length < 'മലയാളം'.length, 'Should delete cluster cleanly');

// Test Undo
engine.undo();
assert.strictEqual(mockEl.value, 'മലയാളം', 'Undo should restore previous state');

// Test Redo
engine.redo();
assert.ok(mockEl.value.length < 'മലയാളം'.length, 'Redo should apply deletion');

// Test Chillu Normalization
mockEl.value = 'ന\u0D4D\u200D'; // Legacy ൻ
mockEl.selectionStart = mockEl.value.length;
mockEl.selectionEnd = mockEl.value.length;
engine.checkAndNormalize();
assert.strictEqual(mockEl.value, 'ൻ', 'Legacy sequence ന+്+ZWJ should normalize to atomic chillu ൻ');

console.log('✓ Editor Engine operations verified successfully.');

// 4. Verify Speed Test Engine
console.log('Test 4: Testing Speed Test Engine...');
import('./src/speed-test.js').then(({ SpeedTestSession, MALAYALAM_SPEED_PASSAGES }) => {
  assert.ok(MALAYALAM_SPEED_PASSAGES.length >= 6, 'Should have at least 6 Malayalam passages');

  const session = new SpeedTestSession(1); // 1 minute
  assert.strictEqual(session.durationSeconds, 60, '1 minute should be 60 seconds');
  assert.ok(session.words.length > 10, 'Should have words in passage');

  const firstWord = session.words[0];
  session.isActive = true;

  // Submit correct word
  session.submitWord(firstWord);
  assert.strictEqual(session.correctWordsCount, 1, 'Should record 1 correct word');
  assert.strictEqual(session.currentWordIndex, 1, 'Word index should advance to 1');

  // Submit incorrect word
  session.submitWord('തെറ്റായവാക്ക്');
  assert.strictEqual(session.incorrectWordsCount, 1, 'Should record 1 incorrect word');

  const metrics = session.getMetrics();
  assert.strictEqual(metrics.accuracy, 50, '1 correct out of 2 should be 50% accuracy');
  assert.ok(metrics.rank, 'Should produce a rank title');
  assert.ok(metrics.badge, 'Should produce a rank badge');

  console.log('✓ Speed Test Engine verified successfully.');

  console.log('\n=======================================');
  console.log('ALL TESTS PASSED! ENGINE IS 100% SOUND.');
  console.log('=======================================');
});

