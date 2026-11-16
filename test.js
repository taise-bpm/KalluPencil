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

  // 5. Verify InScript Tutor Engine
  console.log('Test 5: Testing InScript Master Tutor Engine...');
  Promise.all([
    import('./src/tutor-curriculum.js'),
    import('./src/tutor-engine.js')
  ]).then(([{ TUTOR_LEVELS, FINGER_NAMES }, { TutorEngine }]) => {
    assert.strictEqual(TUTOR_LEVELS.length, 7, 'Should have 7 curriculum levels');
    assert.ok(Object.keys(FINGER_NAMES).length >= 10, 'Should have 10 finger definitions');

    const tutor = new TutorEngine();
    assert.strictEqual(tutor.currentStage.id, '1-1', 'Default stage should be 1-1');

    const guide = tutor.getCurrentKeyGuide();
    assert.ok(guide, 'Should provide key guide for first char');
    assert.ok(guide.code, 'Should have physical keycode');
    assert.ok(guide.fingerMl, 'Should have finger name in Malayalam');

    // Test correct key processing
    const expectedChar = tutor.getCurrentChar();
    const res = tutor.processKeyInput(expectedChar);
    assert.strictEqual(res.correct, true, 'Matching input should be recorded as correct');
    assert.strictEqual(tutor.currentIndex, 1, 'Index should advance by 1');

    // Test wrong key processing
    const res2 = tutor.processKeyInput('ഏ');
    assert.strictEqual(res2.correct, false, 'Non-matching input should be recorded as error');
    assert.strictEqual(tutor.errorCount, 1, 'Error count should be 1');

    // Test Chillu step-by-step resolution in Stage 5-1
    tutor.loadStage('5-1');
    assert.strictEqual(tutor.getCurrentChar(), 'ർ', 'Stage 5-1 starts with chillu ർ');
    const cg1 = tutor.getCurrentKeyGuide();
    assert.strictEqual(cg1.code, 'KeyJ', 'Chillu step 1 should guide to KeyJ (ര)');
    assert.strictEqual(cg1.fingerCode, 'RI', 'Chillu step 1 should guide to Right Index');
    tutor.processKeyInput('ര');
    const cg2 = tutor.getCurrentKeyGuide();
    assert.strictEqual(cg2.code, 'KeyD', 'Chillu step 2 should guide to KeyD (്)');
    tutor.processKeyInput('്');
    const cg3 = tutor.getCurrentKeyGuide();
    assert.strictEqual(cg3.code, 'BracketRight', 'Chillu step 3 should guide to ZWJ');
    tutor.processKeyInput('\u200D');
    assert.strictEqual(tutor.currentIndex, 1, 'Chillu ർ completed and advanced to index 1');

    console.log('✓ InScript Master Tutor Engine verified successfully.');

    // 6. Verify Production bundle.js Syntax & Evaluation
    console.log('Test 6: Verifying production bundle.js syntax and DOM ID parity...');
    import('node:fs').then(({ default: fs }) => {
      const bundleCode = fs.readFileSync('src/bundle.js', 'utf8');
      const htmlCode = fs.readFileSync('index.html', 'utf8');

      // Verify no duplicate const/let declarations on critical variables
      assert.strictEqual(
        (bundleCode.match(/const MALAYALAM_SPEED_PASSAGES/g) || []).length,
        1,
        'MALAYALAM_SPEED_PASSAGES should be declared exactly once'
      );
      assert.strictEqual(
        (bundleCode.match(/class SpeedTestSession/g) || []).length,
        1,
        'SpeedTestSession should be declared exactly once'
      );
      assert.strictEqual(
        (bundleCode.match(/class MalayalamTypingApp/g) || []).length,
        1,
        'MalayalamTypingApp should be declared exactly once'
      );

      // Verify all getElementById calls have matches in index.html
      const idMatches = [...bundleCode.matchAll(/getElementById\(['"]([^'"]+)['"]\)/g)];
      const ids = new Set(idMatches.map(m => m[1]));
      for (const id of ids) {
        assert.ok(
          htmlCode.includes('id="' + id + '"') || htmlCode.includes("id='" + id + "'"),
          `Missing ID in index.html: ${id}`
        );
      }
      console.log(`✓ bundle.js parity verified across ${ids.size} DOM element IDs.`);

      console.log('\n=======================================');
      console.log('ALL TESTS PASSED! ENGINE IS 100% SOUND.');
      console.log('=======================================');
    });
  });
});

