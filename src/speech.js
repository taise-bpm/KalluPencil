/**
 * Malayalam Speech-to-Text Engine (Voice Typing)
 * Utilizes the Web Speech Recognition API with Malayalam (ml-IN) locale.
 */

export class MalayalamSpeechEngine {
  constructor(options = {}) {
    this.onResult = options.onResult || (() => {});
    this.onInterim = options.onInterim || (() => {});
    this.onStatusChange = options.onStatusChange || (() => {});
    this.onError = options.onError || (() => {});

    this.recognition = null;
    this.isListening = false;

    this.init();
  }

  isSupported() {
    return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  }

  init() {
    if (!this.isSupported()) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'ml-IN'; // Malayalam (India)
    this.recognition.continuous = true;
    this.recognition.interimResults = true;

    this.recognition.onstart = () => {
      this.isListening = true;
      this.onStatusChange(true);
    };

    this.recognition.onend = () => {
      this.isListening = false;
      this.onStatusChange(false);
    };

    this.recognition.onerror = (e) => {
      this.isListening = false;
      this.onStatusChange(false);
      this.onError(e);
    };

    this.recognition.onresult = (e) => {
      let interim = '';
      let final = '';

      for (let i = e.resultIndex; i < e.results.length; i++) {
        const transcript = e.results[i][0].transcript;
        if (e.results[i].isFinal) {
          final += transcript;
        } else {
          interim += transcript;
        }
      }

      if (final) {
        this.onResult(final);
      }
      if (interim) {
        this.onInterim(interim);
      }
    };
  }

  toggle() {
    if (!this.isSupported()) {
      alert('നിങ്ങളുടെ ബ്രൗസർ വോയ്‌സ് ടൈപ്പിംഗ് പിന്തുണയ്ക്കുന്നില്ല (Speech recognition not supported in this browser). Google Chrome അല്ലെങ്കിൽ Microsoft Edge ഉപയോഗിക്കുക.');
      return;
    }

    if (this.isListening) {
      this.stop();
    } else {
      this.start();
    }
  }

  start() {
    if (this.recognition && !this.isListening) {
      try {
        this.recognition.start();
      } catch {
        // Handle active instance
      }
    }
  }

  stop() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
  }
}

