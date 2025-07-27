// This file manages the Web Speech API for speech synthesis.
// It includes functions to initialize the speech synthesis, set the language to French, 
// and announce the names and durations of exercises.

const speechSynthesis = window.speechSynthesis;
let isSpeaking = false;

function initializeSpeech() {
    if (!speechSynthesis) {
        console.error("Speech synthesis not supported in this browser.");
        return false;
    }
    return true;
}

function speak(text) {
    if (isSpeaking) {
        speechSynthesis.cancel(); // Stop any ongoing speech
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR'; // Set language to French
    utterance.onstart = () => {
        isSpeaking = true;
    };
    utterance.onend = () => {
        isSpeaking = false;
    };
    
    speechSynthesis.speak(utterance);
}

function announceExercise(name, duration) {
    const message = `Exercice: ${name}, Durée: ${duration} secondes.`;
    speak(message);
}

function announceNextExercise(name, duration) {
    const message = `Prochain exercice: ${name}, Durée: ${duration} secondes.`;
    speak(message);
}

export { initializeSpeech, announceExercise, announceNextExercise };