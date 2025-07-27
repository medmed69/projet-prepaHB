// src/app.js

const exercises = [
    { name: "Gainage Face",phono: "Guènage Face", duration: 5 },
    { name: "Gainage droite",phono: "Guènage droite", duration: 5 },
    { name: "Gainage gauche",phono: "Guènage gauche", duration: 5 },
    { name: "Gainage dos",phono: "Guènage D'eau", duration: 30 },
    { name: "Pompes",phono:"Pompes", duration: 15 },
    { name: "Dips",phono:"Dips", duration: 15 },
    { name: "Abdos",phono:"Abdos", duration: 10, repetitions: [10, 20, 30, 20, 10] },
    { name: "Abdos Toucher les Pieds",phono:"Abdos Toucher les Pieds", duration: 10, repetitions: [10, 20, 30, 20, 10] },
    { name: "Abdos Rotation Haut du Corps",phono:"Abdos Rotation Haut du Corps", duration: 10, repetitions: [10, 20, 30, 20, 10] },
    { name: "Superman Actif",phono:"Superman Actif", duration: 20 },
    { name: "Squat Sauté",phono:"Squat Sauté", duration: 15 }
];

const bonusExercises = [
     { name: "Gainage Face",phono: "Guènage Face", duration: 30 },
    { name: "Gainage droite",phono: "Guènage droite", duration: 30 },
    { name: "Gainage gauche",phono: "Guènage gauche", duration: 30 },
    { name: "Gainage dos",phono: "Guènage dos", duration: 30 },
];

let currentExerciseIndex = 0;
let currentBlock = 0;
let totalBlocks = 0;
let totalGainage = 0;
let isPaused = false;
let timer;
let timeLeft;

function startSession() {

    totalBlocks = parseInt(document.getElementById("blocks").value);
    totalGainage = parseInt(document.getElementById("gainage").value);
    if (totalGainage > totalBlocks) {
        totalBlocks += 1; // Add bonus block
    }
    currentBlock = 0;
    currentExerciseIndex = 0;
    document.getElementById("settings").className  = "hidden";
    document.getElementById("exerciseDisplay").className = "visible";
    nextExercise();
}

function nextExercise() {
    if (currentBlock < totalBlocks) {
        if (currentExerciseIndex < exercises.length) {
            const exercise = exercises[currentExerciseIndex];
            announceExercise(exercise);
            document.getElementById("exerciseName").innerText = exercise.name;
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
    timeLeft = duration;
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
    const speech = new SpeechSynthesisUtterance(`${exercise.phono} pour ${exercise.duration} secondes`);
    speech.voice = window.speechSynthesis.getVoices().find(voice => voice.name == 'Microsoft Paul - French (France)');
    speech.lang = 'fr-FR';

    window.speechSynthesis.speak(speech);
}

function announceNextExercise() {
    const nextExercise = exercises[currentExerciseIndex] || bonusExercises[currentExerciseIndex];
    if (nextExercise) {
        const speech = new SpeechSynthesisUtterance(`Prochain exercice: ${nextExercise.phono} pour ${nextExercise.duration} secondes`);
        speech.voice = window.speechSynthesis.getVoices().find(voice => voice.name == 'Microsoft Paul - French (France)');
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
document.getElementById("stopButton").onclick = function() {
    isPaused = !isPaused;
    this.innerText = isPaused ? "Reprendre" : "Pause";
    if (!isPaused) {
        startTimer(timeLeft);
    }
};
document.getElementById("skipButton").addEventListener("click", nextExercise);
window.speechSynthesis.voice = window.speechSynthesis.getVoices().find(voice => voice.name == 'Microsoft Paul - French (France)');
window.speechSynthesis.lang = 'fr-FR';