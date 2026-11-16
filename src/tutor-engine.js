/**
 * Malayalam InScript Typing Tutor Engine
 * Resolves exact keycodes, shift states, and finger mappings for every Malayalam character.
 * Handles typing events, real-time score tracking, accuracy, and star ratings.
 */

import { TUTOR_LEVELS, FINGER_NAMES, KEY_FINGER_MAP } from './tutor-curriculum.js';
import { INSCRIPT_MAP } from './inscript-data.js';

export class TutorEngine {
  constructor(options = {}) {
    this.storageKey = 'ml_tutor_progress';
    this.currentLevelIndex = 0;
    this.currentStageIndex = 0;

    this.currentStage = null;
    this.targetText = '';
    this.currentIndex = 0;

    this.correctCount = 0;
    this.errorCount = 0;
    this.startTime = null;
    this.endTime = null;
    this.isActive = false;

    this.onStateChange = options.onStateChange || (() => {});
    this.onStageComplete = options.onStageComplete || (() => {});

    // Reverse map from character to keycode and shift requirement
    this.charToKeyInfo = this.buildCharToKeyMap();

    this.loadProgress();
    this.loadStage('1-1');
  }

  buildCharToKeyMap() {
    const map = new Map();

    Object.entries(INSCRIPT_MAP).forEach(([code, data]) => {
      const finger = KEY_FINGER_MAP[code] || 'RI';

      if (data.normal) {
        map.set(data.normal, {
          code,
          keyName: data.keyName || '',
          shift: false,
          finger,
          char: data.normal
        });
      }

      if (data.shift) {
        map.set(data.shift, {
          code,
          keyName: data.keyName || '',
          shift: true,
          finger,
          char: data.shift
        });
      }
    });

    // Spacebar
    map.set(' ', {
      code: 'Space',
      keyName: 'Space',
      shift: false,
      finger: 'RT',
      char: ' '
    });

    return map;
  }

  loadStage(stageId) {
    let found = null;
    for (const lvl of TUTOR_LEVELS) {
      for (const stg of lvl.stages) {
        if (stg.id === stageId) {
          found = stg;
          break;
        }
      }
      if (found) break;
    }

    if (!found) {
      found = TUTOR_LEVELS[0].stages[0];
    }

    this.currentStage = found;
    this.targetText = found.targetText;
    this.resetStats();
    return this.currentStage;
  }

  resetStats() {
    this.currentIndex = 0;
    this.correctCount = 0;
    this.errorCount = 0;
    this.startTime = null;
    this.endTime = null;
    this.isActive = false;
  }

  start() {
    this.resetStats();
    this.startTime = Date.now();
    this.isActive = true;
    this.notify();
  }

  getCurrentChar() {
    if (this.currentIndex >= this.targetText.length) return null;
    return this.targetText[this.currentIndex];
  }

  getCurrentKeyGuide() {
    const char = this.getCurrentChar();
    if (!char) return null;

    const info = this.charToKeyInfo.get(char);
    if (!info) {
      return {
        char,
        code: null,
        keyName: char,
        shift: false,
        fingerCode: 'RT',
        fingerMl: 'തള്ളവിരൽ',
        fingerEn: 'Thumb'
      };
    }

    const fingerObj = FINGER_NAMES[info.finger] || FINGER_NAMES.RI;

    return {
      char,
      code: info.code,
      keyName: info.keyName,
      shift: info.shift,
      fingerCode: info.finger,
      fingerMl: fingerObj.ml,
      fingerEn: fingerObj.en,
      fingerColor: fingerObj.color
    };
  }

  processKeyInput(typedChar) {
    if (!this.isActive) {
      this.start();
    }

    const expected = this.getCurrentChar();
    if (!expected) return { finished: true };

    if (typedChar === expected) {
      this.correctCount++;
      this.currentIndex++;

      const isCompleted = this.currentIndex >= this.targetText.length;
      if (isCompleted) {
        this.endTime = Date.now();
        this.isActive = false;
        const finalMetrics = this.getMetrics();
        this.saveStageProgress(this.currentStage.id, finalMetrics);
        this.onStageComplete(this.currentStage, finalMetrics);
      }

      this.notify();
      return {
        correct: true,
        finished: isCompleted,
        nextGuide: this.getCurrentKeyGuide()
      };
    } else {
      this.errorCount++;
      this.notify();
      return {
        correct: false,
        finished: false,
        nextGuide: this.getCurrentKeyGuide()
      };
    }
  }

  backspace() {
    if (!this.isActive || this.currentIndex <= 0) return;
    this.currentIndex--;
    this.notify();
  }

  getMetrics() {
    const elapsedMinutes = (Math.max(Date.now(), this.endTime || Date.now()) - (this.startTime || Date.now())) / 60000;
    const totalTyped = this.correctCount + this.errorCount;
    const accuracy = totalTyped > 0 ? Math.round((this.correctCount / totalTyped) * 100) : 100;
    const wordsTyped = this.correctCount / 4;
    const wpm = elapsedMinutes > 0 ? Math.round(wordsTyped / elapsedMinutes) : 0;
    const progress = this.targetText.length > 0 ? Math.round((this.currentIndex / this.targetText.length) * 100) : 0;

    let stars = 1;
    if (accuracy >= 95 && wpm >= 15) {
      stars = 3;
    } else if (accuracy >= 85) {
      stars = 2;
    }

    return {
      progress,
      accuracy,
      wpm,
      correct: this.correctCount,
      errors: this.errorCount,
      stars,
      completed: this.currentIndex >= this.targetText.length
    };
  }

  notify() {
    this.onStateChange({
      stage: this.currentStage,
      metrics: this.getMetrics(),
      guide: this.getCurrentKeyGuide(),
      currentIndex: this.currentIndex,
      targetText: this.targetText
    });
  }

  saveStageProgress(stageId, metrics) {
    try {
      const data = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
      const existing = data[stageId] || { stars: 0, wpm: 0, accuracy: 0 };

      // Keep best performance
      data[stageId] = {
        stars: Math.max(existing.stars, metrics.stars),
        wpm: Math.max(existing.wpm, metrics.wpm),
        accuracy: Math.max(existing.accuracy, metrics.accuracy),
        completedAt: new Date().toISOString()
      };

      localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch {
      // Ignore storage restrictions
    }
  }

  loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || '{}');
    } catch {
      return {};
    }
  }
}

