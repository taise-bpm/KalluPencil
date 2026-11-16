/**
 * Malayalam Typing Speed Test Engine
 * Supports 1, 2, 3, 4, 5 minute tests with random authentic Malayalam content,
 * real-time WPM, accuracy, and detailed score breakdown.
 */

export const MALAYALAM_SPEED_PASSAGES = [
  {
    id: 1,
    title: 'കേരളവും പ്രകൃതിയും',
    text: 'കേരളം പ്രകൃതിഭംഗിയാൽ അനുഗൃഹീതമായ ഒരു നാടാണ്. പച്ചപ്പുനിറഞ്ഞ മലനിരകളും കായലുകളും തെങ്ങിൻതോപ്പുകളും നിറഞ്ഞ മനോഹരമായ ഭൂപ്രകൃതി കേരളത്തിന്റെ സവിശേഷതയാണ്. മലയാള ഭാഷയുടെ മാധുര്യവും സാംസ്കാരിക പാരമ്പര്യവും ലോകമെമ്പാടും പ്രശസ്തമാണ്. തുഞ്ചത്തെഴുത്തച്ഛനും കുഞ്ചൻ നമ്പ്യാരും ചെറുശ്ശേരിയും മലയാള സാഹിത്യത്തിന് നൽകിയ സംഭാവനകൾ നിസ്തുലമാണ്. അറിവും സംസ്കാരവും പരസ്പര സ്നേഹവും സമന്വയിക്കുന്ന പുണ്യഭൂമിയാണ് കേരളം. നമ്മുടെ പാരമ്പര്യവും പ്രകൃതിസൗന്ദര്യവും വരുംതലമുറയ്ക്കായി കാത്തുസൂക്ഷിക്കേണ്ടത് ഓരോ മലയാളിയുടെയും കടമയാണ്.'
  },
  {
    id: 2,
    title: 'സാങ്കേതികവിദ്യയും ഭാവിയും',
    text: 'ആധുനിക ലോകത്ത് സാങ്കേതികവിദ്യയുടെ വളർച്ച അതിവേഗത്തിലാണ് മുന്നേറുന്നത്. വിവരസാങ്കേതികവിദ്യ മനുഷ്യന്റെ നിത്യജീവിതത്തിൽ വലിയ മാറ്റങ്ങൾ സൃഷ്ടിച്ചിരിക്കുന്നു. കമ്പ്യൂട്ടറുകളും സ്മാർട്ട്ഫോണുകളും ഇന്റർനെറ്റും നമ്മുടെ ദൈനംദിന ആശയവിനിമയത്തെയും തൊഴിലിനെയും എളുപ്പമാക്കി. ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസും മെഷീൻ ലേണിംഗും പുതിയ തൊഴിലവസരങ്ങൾ തുറക്കുകയും ലോകത്തെ മാറ്റിമറിക്കുകയും ചെയ്യുന്നു. വിജ്ഞാനവും ശാസ്ത്രബോധവും വളർത്തിയെടുക്കുക എന്നത് പുതിയ കാലഘട്ടത്തിന്റെ പ്രധാന ആവശ്യമാണ്. സാങ്കേതികവിദ്യയെ നന്മയ്ക്കായി ഉപയോഗിക്കാൻ നാം ശീലിക്കണം.'
  },
  {
    id: 3,
    title: 'വിജയത്തിലേക്കുള്ള വഴി',
    text: 'ജീവിതത്തിൽ വിജയം നേടാൻ കഠിനാധ്വാനവും ആത്മവിശ്വാസവും അത്യന്താപേക്ഷിതമാണ്. പ്രതിസന്ധികളെ അവസരങ്ങളാക്കി മാറ്റാൻ പഠിക്കുന്നവരാണ് ചരിത്രം സൃഷ്ടിക്കുന്നത്. വിദ്യയിലൂടെ മാത്രമേ ഒരു സമൂഹത്തിന് സാംസ്കാരികവും സാമ്പത്തികവുമായ പുരോഗതി കൈവരിക്കാൻ സാധിക്കൂ. പുസ്തകങ്ങൾ അറിവിന്റെ അക്ഷയഖനികളാണ്. വായിച്ചു വളരുക എന്ന കുഞ്ഞുണ്ണിമാഷിന്റെ ലളിതമായ വരികൾ എന്നും നമുക്ക് പ്രചോദനമാണ്. പരാജയങ്ങളിൽ തളരാതെ ലക്ഷ്യത്തിലേക്ക് നിരന്തരം മുന്നേറുന്നവർക്ക് വിജയം സുനിശ്ചിതമാണ്.'
  },
  {
    id: 4,
    title: 'കലകളും സംസ്കാരവും',
    text: 'കേരളത്തിന്റെ കലകളും ഉത്സവങ്ങളും ഐക്യത്തിന്റെയും സാഹോദര്യത്തിന്റെയും മഹനീയ പ്രതീകങ്ങളാണ്. കഥകളിയും മോഹിനിയാട്ടവും തുള്ളലും കൂടിയാട്ടവും ലോകപ്രസിദ്ധമാണ്. ഓണവും വിഷുവും കേരളീയർ ജാതിമതഭേദമെന്യേ ഒന്നായി ആഘോഷിക്കുന്നു. പൂക്കളവും ഓണസദ്യയും ഓണപ്പാട്ടുകളും മലയാളിയുടെ ഗൃഹാതുരതയുണർത്തുന്ന ഓർമ്മകളാണ്. പരസ്പര സ്നേഹവും സഹിഷ്ണുതയുമാണ് നമ്മുടെ നാടിന്റെ ഏറ്റവും വലിയ കരുത്ത്.'
  },
  {
    id: 5,
    title: 'പരിസ്ഥിതി സംരക്ഷണം',
    text: 'പരിസ്ഥിതി സംരക്ഷണവും ശുചിത്വവും ആരോഗ്യകരമായ ജീവിതത്തിന് ഒഴിച്ചുകൂടാനാവാത്തതാണ്. വനങ്ങളും പുഴകളും തണ്ണീർത്തടങ്ങളും സംരക്ഷിക്കേണ്ടത് വരുംതലമുറയ്ക്കായുള്ള നമ്മുടെ കടമയാണ്. ശുദ്ധവായുവും ശുദ്ധജലവും ഭൂമിയിലെ ഓരോ ജീവന്റെയും അവകാശമാണ്. പ്രകൃതിയെ ചൂഷണം ചെയ്യാതെ പരിപാലിക്കുന്നതിലൂടെ മാത്രമേ ഭൂമിയുടെ നിലനിൽപ്പ് ഉറപ്പാക്കാൻ കഴിയൂ. ഓരോ മരവും ഓരോ തണലാണ് എന്ന ചിന്ത ഓരോരുത്തരിലും വളരണം.'
  },
  {
    id: 6,
    title: 'നവോത്ഥാന മൂല്യങ്ങൾ',
    text: 'മഹത്തായ നവോത്ഥാന പ്രസ്ഥാനങ്ങളുടെ ഫലമായാണ് ഇന്നത്തെ പുരോഗമന കേരളം രൂപപ്പെട്ടത്. ശ്രീനാരായണഗുരുവും അയ്യങ്കാളിയും ചട്ടമ്പിസ്വാമികളും സാമൂഹിക അസമത്വങ്ങൾക്കെതിരെ ധീരമായി പോരാടി. ഒരു ജാതി ഒരു മതം ഒരു ദൈവം മനുഷ്യന് എന്ന ഗുരുദേവന്റെ സന്ദേശം മാനവരാശിക്ക് എക്കാലവും വെളിച്ചം പകരുന്നു. വിദ്യ കൊണ്ട് പ്രബുദ്ധരാവുക എന്ന ആഹ്വാനം ഇന്നും എന്നും വളരെ പ്രസക്തമാണ്.'
  }
];

export class SpeedTestSession {
  constructor(durationMinutes = 1, customText = '') {
    this.durationSeconds = durationMinutes * 60;
    this.remainingSeconds = this.durationSeconds;
    this.timerInterval = null;
    this.isActive = false;
    this.isCompleted = false;

    if (customText && customText.trim().length > 10) {
      this.passageData = {
        id: 'custom',
        title: 'കസ്റ്റം പാഠം (Custom Passage)',
        text: customText.trim()
      };
    } else {
      const randomIndex = Math.floor(Math.random() * MALAYALAM_SPEED_PASSAGES.length);
      this.passageData = MALAYALAM_SPEED_PASSAGES[randomIndex];
    }
    this.words = this.passageData.text.split(/\s+/).filter(Boolean);

    this.currentWordIndex = 0;
    this.currentInput = '';
    this.wordResults = []; // array of { word, input, correct }

    this.totalTypedChars = 0;
    this.correctChars = 0;
    this.incorrectChars = 0;
    this.correctWordsCount = 0;
    this.incorrectWordsCount = 0;

    this.onTick = null;
    this.onFinish = null;
  }

  start(onTick, onFinish) {
    this.isActive = true;
    this.isCompleted = false;
    this.remainingSeconds = this.durationSeconds;
    this.onTick = onTick;
    this.onFinish = onFinish;

    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;
      if (this.onTick) this.onTick(this.remainingSeconds, this.getMetrics());

      if (this.remainingSeconds <= 0) {
        this.finish();
      }
    }, 1000);
  }

  finish() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.isActive = false;
    this.isCompleted = true;

    // Check last word if typed
    if (this.currentInput.trim()) {
      this.submitWord(this.currentInput.trim());
    }

    if (this.onFinish) {
      this.onFinish(this.getMetrics());
    }
  }

  stop() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.isActive = false;
  }

  handleInput(input) {
    if (!this.isActive) return;

    // If space is typed, submit the current word
    if (input.endsWith(' ')) {
      const cleanWord = input.trim();
      if (cleanWord.length > 0) {
        this.submitWord(cleanWord);
      }
      this.currentInput = '';
      return { clearInput: true };
    } else {
      this.currentInput = input;
      return { clearInput: false };
    }
  }

  submitWord(typedWord) {
    if (this.currentWordIndex >= this.words.length) return;

    const targetWord = this.words[this.currentWordIndex];
    const isCorrect = typedWord === targetWord;

    this.wordResults.push({
      target: targetWord,
      typed: typedWord,
      correct: isCorrect
    });

    if (isCorrect) {
      this.correctWordsCount++;
      this.correctChars += targetWord.length;
    } else {
      this.incorrectWordsCount++;
      this.incorrectChars += typedWord.length;
    }

    this.totalTypedChars += typedWord.length + 1; // +1 for space
    this.currentWordIndex++;

    // If passage finished before time, loop or load another passage
    if (this.currentWordIndex >= this.words.length) {
      const nextPassage = MALAYALAM_SPEED_PASSAGES[Math.floor(Math.random() * MALAYALAM_SPEED_PASSAGES.length)];
      const nextWords = nextPassage.text.split(/\s+/).filter(Boolean);
      this.words = this.words.concat(nextWords);
    }
  }

  getMetrics() {
    const elapsedSeconds = this.durationSeconds - this.remainingSeconds;
    const elapsedMinutes = Math.max(elapsedSeconds / 60, 0.016); // minimum ~1 second

    // Standard Indic / WPM formula: (Gross Characters / 5) / Minutes
    const grossWpm = Math.round((this.totalTypedChars / 5) / elapsedMinutes);
    const netWpm = Math.max(0, Math.round((this.correctChars / 5) / elapsedMinutes));

    const totalWords = this.correctWordsCount + this.incorrectWordsCount;
    const accuracy = totalWords > 0 ? Math.round((this.correctWordsCount / totalWords) * 100) : 100;

    let rank = 'തുടക്കക്കാരൻ (Beginner)';
    let badge = '🌱';

    if (netWpm >= 45) {
      rank = 'ഇൻസ്ക്രിപ്റ്റ് മാസ്റ്റർ (Master)';
      badge = '👑';
    } else if (netWpm >= 30) {
      rank = 'വേഗതയേറിയ ടൈപ്പിസ്റ്റ് (Advanced)';
      badge = '⚡';
    } else if (netWpm >= 15) {
      rank = 'വളരുന്ന ടൈപ്പിസ്റ്റ് (Intermediate)';
      badge = '🚀';
    }

    return {
      netWpm,
      grossWpm,
      accuracy,
      correctWords: this.correctWordsCount,
      incorrectWords: this.incorrectWordsCount,
      totalChars: this.totalTypedChars,
      correctChars: this.correctChars,
      incorrectChars: this.incorrectChars,
      elapsedSeconds,
      remainingSeconds: this.remainingSeconds,
      rank,
      badge
    };
  }
}

