/**
 * Interactive InScript Typing Tutor & Practice Mode
 * Teaches Malayalam InScript layout with finger positions, key highlights, and WPM scoring.
 */

export const PRACTICE_LESSONS = [
  {
    id: 1,
    title: 'പാഠം 1: ഹോം റോ (Home Row Keys)',
    description: 'നടുവിലെ വരിയിലുള്ള അക്ഷരങ്ങൾ പരിശീലിക്കുക (ASDFGHJKL;)',
    targetText: 'ക പ ര ത ച ട ി ു ് േ ോ കപ രത ചട കി പു ര് തേ ചോ'
  },
  {
    id: 2,
    title: 'പാഠം 2: മുകളിലെ വരി (Top Row Keys)',
    description: 'മുകളിലെ വരിയിലുള്ള അക്ഷരങ്ങൾ പരിശീലിക്കുക (QWERTYUIOP[])',
    targetText: 'ബ ഹ ഗ ദ ജ ഡ ാ ീ ൂ ൈ ൗ ബാ ഹീ ഗൂ ദൈ ദൗ ജാ'
  },
  {
    id: 3,
    title: 'പാഠം 3: താഴത്തെ വരി (Bottom Row Keys)',
    description: 'താഴത്തെ വരിയിലുള്ള അക്ഷരങ്ങൾ പരിശീലിക്കുക (ZXCVBNM,./)',
    targetText: 'മ ന വ ല സ െ ം യ മന വല സമ മെ യം'
  },
  {
    id: 4,
    title: 'പാഠം 4: ചില്ലുകളും ചിഹ്നങ്ങളും (Chillus & Marks)',
    description: 'ചില്ലക്ഷരങ്ങളും കൂട്ടക്ഷരങ്ങളും (ൺ, ൻ, ർ, ൽ, ൾ, ക്ഷ, ജ്ഞ, ത്ര)',
    targetText: 'വൻ പാൽ കൺ കാർ തോൾ ക്ഷമ ജ്ഞാനം ത്രയം'
  },
  {
    id: 5,
    title: 'പാഠം 5: മലയാളം വാക്കുകൾ (Daily Words)',
    description: 'നിത്യോപയോഗ മലയാളം വാക്കുകൾ ടൈപ്പ് ചെയ്യുക',
    targetText: 'നമസ്കാരം കേരളം മലയാളം ഭാരതം സ്നേഹം നന്ദി ശുഭദിനം'
  }
];

export class PracticeSession {
  constructor(lessonId = 1) {
    this.lesson = PRACTICE_LESSONS.find((l) => l.id === lessonId) || PRACTICE_LESSONS[0];
    this.targetText = this.lesson.targetText;
    this.currentIndex = 0;
    this.errors = 0;
    this.startTime = null;
    this.endTime = null;
  }

  start() {
    this.startTime = Date.now();
    this.currentIndex = 0;
    this.errors = 0;
    this.endTime = null;
  }

  getCurrentChar() {
    if (this.currentIndex >= this.targetText.length) return null;
    return this.targetText[this.currentIndex];
  }

  processInput(char) {
    if (!this.startTime) this.start();

    const expected = this.getCurrentChar();
    if (!expected) return { finished: true };

    if (char === expected) {
      this.currentIndex++;
      const finished = this.currentIndex >= this.targetText.length;
      if (finished) this.endTime = Date.now();
      return { correct: true, finished, nextChar: this.getCurrentChar() };
    } else {
      this.errors++;
      return { correct: false, finished: false, nextChar: expected };
    }
  }

  getMetrics() {
    const elapsedMinutes = (Math.max(Date.now(), this.endTime || Date.now()) - (this.startTime || Date.now())) / 60000;
    const totalTyped = this.currentIndex + this.errors;
    const accuracy = totalTyped > 0 ? Math.round((this.currentIndex / totalTyped) * 100) : 100;
    const wordsTyped = this.currentIndex / 4; // Average 4 characters per Malayalam word
    const wpm = elapsedMinutes > 0 ? Math.round(wordsTyped / elapsedMinutes) : 0;

    return {
      progress: Math.round((this.currentIndex / this.targetText.length) * 100),
      accuracy,
      wpm,
      errors: this.errors,
      completed: this.currentIndex >= this.targetText.length
    };
  }
}

