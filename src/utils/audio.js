const synth = window.speechSynthesis;

export function speakKorean(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ko-KR';
  utterance.rate = 0.8;
  synth.speak(utterance);
}