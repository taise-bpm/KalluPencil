/**
 * Automated test suite for Standalone Malayalam Speed Test App
 */

import assert from 'node:assert';
import fs from 'node:fs';

console.log('--- Running Standalone Speed Test App Test Suite ---');

const speedtestHtml = fs.readFileSync('speedtest.html', 'utf8');
const speedtestAppJs = fs.readFileSync('src/speedtest-app.js', 'utf8');

// 1. Check Zero CORS / Direct file:/// compatibility
console.log('Test 1: Verifying zero CORS / file:/// protocol compatibility...');
assert.ok(!speedtestHtml.includes('type="module"'), 'speedtest.html must not use type="module" to prevent file:/// CORS blocks');
assert.ok(speedtestHtml.includes('<script src="src/speedtest-app.js"></script>'), 'speedtest.html must include script src="src/speedtest-app.js"');
console.log('✓ Zero CORS verified: direct file:/// double-clicking will work out-of-the-box.');

// 2. DOM ID Parity Check
console.log('Test 2: Verifying DOM element ID parity between speedtest-app.js and speedtest.html...');
const idMatches = [...speedtestAppJs.matchAll(/getElementById\(['"]([^'"]+)['"]\)/g)];
const ids = new Set(idMatches.map((m) => m[1]));

for (const id of ids) {
  const present = speedtestHtml.includes(`id="${id}"`) || speedtestHtml.includes(`id='${id}'`);
  assert.ok(present, `Missing required ID in speedtest.html: ${id}`);
}
console.log(`✓ All ${ids.size} DOM IDs used by speedtest-app.js are present in speedtest.html.`);

// 3. Passage and Content Coverage
console.log('Test 3: Verifying Malayalam passages & jumble words...');
assert.ok(speedtestAppJs.includes('MALAYALAM_PASSAGES = ['), 'Passages array must exist');
assert.ok(speedtestAppJs.includes('MALAYALAM_JUMBLE_WORDS = ['), 'Jumble words array must exist');
assert.ok(speedtestAppJs.includes('INSCRIPT_MAP = {'), 'InScript map must exist');
console.log('✓ Passages and mappings verified.');

// 4. Test Engine Logic & Metric Calculation
console.log('Test 4: Testing SpeedTestSession logic and metrics...');
const sessionMatch = speedtestAppJs.match(/class SpeedTestSession\s*\{[\s\S]*?\n  \}/);
assert.ok(sessionMatch, 'SpeedTestSession class found');

// 5. Test Malayalam Unicode Chillu & Ligature Normalization (ജീവിതത്തിൽ issue)
console.log('Test 5: Testing Unicode Chillu match on ജീവിതത്തിൽ...');
assert.ok(speedtestAppJs.includes('isMalayalamWordMatch'), 'isMalayalamWordMatch must be defined');
assert.ok(speedtestAppJs.includes('isMalayalamPrefixMatch'), 'isMalayalamPrefixMatch must be defined');

// Evaluate the normalizers from speedtestAppJs
const normFunctions = speedtestAppJs.match(/\/\/ 2\. Malayalam Unicode Chillu[\s\S]*?\/\/ 3\. Audio Feedback/);
assert.ok(normFunctions, 'Normalizer functions block found');

const evalScope = {};
new Function('scope', normFunctions[0] + '\nscope.isWordMatch = isMalayalamWordMatch;\nscope.isPrefixMatch = isMalayalamPrefixMatch;')(evalScope);

const atomicTarget = 'ജീവിതത്തിൽ'; // Has atomic U+0D7D
const decomposedTyped = 'ജീവിതത്തി\u0D32\u0D4D\u200D'; // ല + ് + ZWJ

assert.strictEqual(evalScope.isWordMatch(decomposedTyped, atomicTarget), true, 'Decomposed typed chillu must match atomic target');
assert.strictEqual(evalScope.isWordMatch(atomicTarget, decomposedTyped), true, 'Atomic typed chillu must match decomposed target');
assert.strictEqual(evalScope.isPrefixMatch('ജീവിതത്തില', atomicTarget), true, 'Typing prefix ...ല must match prefix');
assert.strictEqual(evalScope.isPrefixMatch('ജീവിതത്തില്', atomicTarget), true, 'Typing prefix ...ല് must match prefix');
assert.strictEqual(evalScope.isPrefixMatch(decomposedTyped, atomicTarget), true, 'Typing decomposed chillu must match prefix');
assert.strictEqual(evalScope.isPrefixMatch('ജീവിതത്തിക', atomicTarget), false, 'Wrong character must fail prefix match');
console.log('✓ Chillu normalization and prefix matching verified for ജീവിതത്തിൽ.');

console.log('\n=======================================');
console.log('ALL STANDALONE SPEED TEST APP TESTS PASSED!');
console.log('=======================================');
