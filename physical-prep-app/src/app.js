// src/app.js

const exercises = [
    { name: "Gainage Face", duration: 30 },
    { name: "Pause", duration: 5 },
    { name: "Gainage Droite", duration: 30 },
    { name: "Gainage Gauche", duration: 30 },
    { name: "Gainage Dos", duration: 30 },
    { name: "Pompes", duration: 15 },
    { name: "Dips", duration: 15 },
    { name: "Abdos", duration: 10, repetitions: [10, 20, 30, 20, 10] },
    { name: "Abdos Toucher les Pieds", duration: 10, repetitions: [10, 20, 30, 20, 10] },
    { name: "Abdos Rotation Haut du Corps", duration: 10, repetitions: [10, 20, 30, 20, 10] },
    { name: "Superman Actif", duration: 20 },
    { name: "Squat Sauté", duration: 15 }
];

const bonusExercises = [
    { name: "Gainage Face", duration: 30 },
    { name: "Gainage Droite", duration: 30 },
    { name: "Gainage Gauche", duration: 30 },
    { name: "Gainage Dos", duration: 30 }
];

let currentExerciseIndex = 0;
let currentBlock = 0;
let totalBlocks = 0;
let totalGainage = 0;
let isPaused = false;
let timer;

function startSession() {
    totalBlocks = parseInt(document.getElementById("blocks").value);
    totalGainage = parseInt(document.getElementById("gainage").value);
    if (totalGainage > totalBlocks) {
        totalBlocks += 1; // Add bonus block
    }
    currentBlock = 0;
    currentExerciseIndex = 0;
    nextExercise();
}

function nextExercise() {
    if (currentBlock < totalBlocks) {
        if (currentExerciseIndex < exercises.length) {
            const exercise = exercises[currentExerciseIndex];
            announceExercise(exercise);
            startTimer(exercise.duration);
            currentExerciseIndex++;
        } else {
            currentBlock++;
            currentExerciseIndex = 0;
            nextExercise();
        }
    } else if (totalGainage > 0) {
        currentExerciseIndex = 0;
        nextBonusExercise();
    } else {
        endSession();
    }
}

function nextBonusExercise() {
    if (currentExerciseIndex < bonusExercises.length) {
        const exercise = bonusExercises[currentExerciseIndex];
        announceExercise(exercise);
        startTimer(exercise.duration);
        currentExerciseIndex++;
    } else {
        endSession();
    }
}

function startTimer(duration) {
    let timeLeft = duration;
    timer = setInterval(() => {
        if (isPaused) return;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextExercise();
        } else {
            document.getElementById("timer").innerText = timeLeft;
            if (timeLeft == 6) {
                announceNextExercise();
            }
            if (timeLeft == 4) {
                playBeep();
            }
            timeLeft--;
        }
    }, 1000);
}

function announceExercise(exercise) {
    const speech = new SpeechSynthesisUtterance(`${exercise.name} pour ${exercise.duration} secondes`);
    speech.voice = 'urn:moz-tts:sapi:Microsoft Paul - French (France)?fr-FR'
    speech.lang = 'fr-FR';
    window.speechSynthesis.speak(speech);
}

function announceNextExercise() {
    const nextExercise = exercises[currentExerciseIndex] || bonusExercises[currentExerciseIndex];
    if (nextExercise) {
        const speech = new SpeechSynthesisUtterance(`Prochain exercice: ${nextExercise.name} pour ${nextExercise.duration} secondes`);
        speech.lang = 'fr-FR';
        window.speechSynthesis.speak(speech);
    }
}

function playBeep() {
    const beep = new Audio('src/assets/beep.mp3');
    beep.play();
}

function endSession() {
    clearInterval(timer);
    alert("Séance terminée !");
}

document.getElementById("startButton").addEventListener("click", startSession);