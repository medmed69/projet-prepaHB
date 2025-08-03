// src/app.js

const exercises = [
    { name: "Gainage Face", phono: "Guènage Face", duration: 30, dura_phono: "30 secondes", rep: false },
    { name: "Gainage droite", phono: "Guènage droite", duration: 30, dura_phono: "30 secondes", rep: false },
    { name: "Gainage gauche", phono: "Guènage gauche", duration: 30, dura_phono: "30 secondes", rep: false },
    { name: "Gainage dos", phono: "Guènage D'eau", duration: 30, dura_phono: "30 secondes", rep: false },
    { name: "Pompes", phono: "Pompes", duration: 20, dura_phono: "10 répétitions", rep: true },
    { name: "Dips", phono: "Dips", duration: 20, dura_phono: "10 répétitions", rep: true },
    { name: "Abdos", phono: "Abdos", duration: 60, dura_phono: "10 répétitions", rep: true },
    { name: "Abdos Toucher les Pieds", phono: "Abdos Toucher les Pieds", duration: 60, dura_phono: "20 répétitions", rep: true },
    { name: "Abdos Rotation Haut du Corps", phono: "Abdos Rotation Haut du Corps", duration: 90, dura_phono: "30 répétitions", rep: true },
    { name: "Abdos Toucher les Pieds", phono: "Abdos Toucher les Pieds", duration: 60, dura_phono: "20 répétitions", rep: true },
    { name: "Abdos", phono: "Abdos", duration: 60, dura_phono: "10 répétitions", rep: true },
    { name: "Superman Actif", phono: "Superman Actif", duration: 30, dura_phono: "30 secondes", rep: false },
    { name: "Squat Sauté", phono: "Squat Sauté", duration: 15, dura_phono: "15 secondes", rep: false },
    { name: "Pause", phono: "pause", duration: 90, dura_phono: "1,5 minutes", rep: false }
];
const bonusExercises = [
    { name: "Gainage Face", phono: "Guènage Face", duration: 30, dura_phono: "30 secondes", rep: false },
    { name: "Gainage droite", phono: "Guènage droite", duration: 30, dura_phono: "30 secondes", rep: false },
    { name: "Gainage gauche", phono: "Guènage gauche", duration: 30, dura_phono: "30 secondes", rep: false },
    { name: "Gainage dos", phono: "Guènage D'eau", duration: 30, dura_phono: "30 secondes", rep: false }
];
const exercice_proprio = [
    { name: "Equilibre pied décalé (droite)", phono: "pied décalé droite devant", duration: 20, dura_phono: "20 secondes", rep: false },
    { name: "Equilibre pied décalé (gauche)", phono: "pied décalé gauche devant", duration: 20, dura_phono: "20 secondes", rep: false },
    { name: "Repos", phono: "Repos", duration: 60, dura_phono: "1 minute", rep: 0 },
    { name: "Equilibre pied décalé (droite)", phono: "pied décalé droite devant", duration: 20, dura_phono: "20 secondes", rep: false },
    { name: "Equilibre pied décalé (gauche)", phono: "pied décalé gauche devant", duration: 20, dura_phono: "20 secondes", rep: false },
    { name: "Repos", phono: "Repos", duration: 60, dura_phono: "1 minute", rep: false },
    { name: "Equilibre pied décalé (droite)", phono: "pied décalé droite devant", duration: 20, dura_phono: "20 secondes", rep: false },
    { name: "Equilibre pied décalé (gauche)", phono: "pied décalé gauche devant", duration: 20, dura_phono: "20 secondes", rep: false },
    { name: "Repos", phono: "Repos", duration: 60, dura_phono: "1 minute", rep: false },
    { name: "Equilibre pied décalé (droite)", phono: "pied décalé droite devant", duration: 20, dura_phono: "20 secondes", rep: false },
    { name: "Equilibre pied décalé (gauche)", phono: "pied décalé gauche devant", duration: 20, dura_phono: "20 secondes", rep: false },
    { name: "Repos", phono: "Repos", duration: 60, dura_phono: "1 minute", rep: false },
    { name: "Travail d'appuis (joint)", phono: "Travail d'appuis pied joint", duration: 20, dura_phono: "5 répétition", rep: true },
    { name: "Travail d'appuis (droite)", phono: "Travail d'appuis pied droit", duration: 20, dura_phono: "5 répétition", rep: true },
    { name: "Repos", phono: "Repos", duration: 60, dura_phono: "1 minute", rep: false },
    { name: "Travail d'appuis (joint)", phono: "Travail d'appuis pied joint", duration: 20, dura_phono: "5 répétition", rep: true },
    { name: "Travail d'appuis (droite)", phono: "Travail d'appuis pied droit", duration: 20, dura_phono: "5 répétition", rep: true },
    { name: "Travail d'appuis (gauche)", phono: "Travail d'appuis pied gauche", duration: 20, dura_phono: "5 répétition", rep: true },
    { name: "Repos", phono: "Repos", duration: 60, dura_phono: "1 minute", rep: false },
    { name: "Travail d'appuis (joint)", phono: "Travail d'appuis pied joint", duration: 20, dura_phono: "5 répétition", rep: true },
    { name: "Travail d'appuis (droite)", phono: "Travail d'appuis pied droit", duration: 20, dura_phono: "5 répétition", rep: true },
    { name: "Travail d'appuis (gauche)", phono: "Travail d'appuis pied gauche", duration: 20, dura_phono: "5 répétition", rep: true },
    { name: "Repos", phono: "Repos", duration: 60, dura_phono: "1 minute", rep: false },
    { name: "Equilibre sur un pied (droit)", phono: "équilibre sur pied droit", duration: 30, dura_phono: "30 secondes", rep: false },
    { name: "Equilibre sur un pied (gauche)", phono: "équilibre sur pied gauche", duration: 30, dura_phono: "30 secondes", rep: false },
    { name: "Equilibre sur un pied (droit)", phono: "équilibre sur pied droit", duration: 30, dura_phono: "30 secondes", rep: false },
    { name: "Equilibre sur un pied (gauche)", phono: "équilibre sur pied gauche", duration: 30, dura_phono: "30 secondes", rep: false },
    { name: "Equilibre sur un pied (droit)", phono: "équilibre sur pied droit", duration: 30, dura_phono: "30 secondes", rep: false },
    { name: "Equilibre sur un pied (gauche)", phono: "équilibre sur pied gauche", duration: 30, dura_phono: "30 secondes", rep: false },
    { name: "Ouverture d'épaule (20 mouvement par bras) x 3 ",
        phono: "Ouverture d'épaule", duration: 240, dura_phono: "3 fois 20 mouvement par Bras", rep: true },
    { name: "Travaille tenue de balle", phono: "Travaille tenue de balle", duration: 240, dura_phono: "3 fois 20 mouvement par Bras ", rep: true },
    { name: "Travail de passe (feintes puis tire) 2 series 20",
        phono: "Travail de passe", duration: 240, dura_phono: "2 series de 20 mouvement", rep: true },
    
   

    // { name: "Sur un pied, yeux fermés", duration: 30, phono: "Sur un pied, yeux fermés", dura_phono: "30 secondes" },
    // { name: "Jonglage avec balle", duration: 60, phono: "Jonglage avec balle", dura_phono: "1 minute" },
    // ...
];

let state = {
    currentExerciseIndex: 0,
    currentBlock: 0,
    totalBlocks: 0,
    totalGainage: 0,
    vbonus: 0,
    timer: null,
    timeLeft: 0,
    isPaused: false,
    proprioIndex: 0,
    proprioTimer: null,
    proprioPaused: false
};

function startSession() {
    state.totalBlocks = parseInt(document.getElementById("blocks").value);
    state.totalGainage = parseInt(document.getElementById("gainage").value);
    state.vbonus = state.totalGainage > state.totalBlocks ? 1 : 0;
    state.currentBlock = 0;
    state.currentExerciseIndex = 0;
    document.getElementById("settings").className = "hidden";
    document.getElementById("exerciseDisplay").className = "";
    document.getElementById("backToSettingsBtn").style.display = "";
    document.getElementById("progressBarContainer").className = "";
    document.getElementById("stopSessionBtn").style.display = "";
    document.getElementById("backHome1").style.display = "none";
    updateProgressBar();
    nextExercise();
}

function nextExercise() {
    updateProgressBar();
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
    let arr = (state.currentBlock < state.totalBlocks) ? exercises : bonusExercises;
    if (state.currentExerciseIndex < arr.length) {
        const exercise = arr[state.currentExerciseIndex];
        announceExercise(exercise);
        document.getElementById("exerciseName").innerText = exercise.name;
        document.getElementById("skipButton").innerText = exercise.rep ? "j'ai fini les répétitions" : "passer l'exercice";
        document.getElementById("stopButton").className = exercise.rep ? "hidden" : "";
        if (!exercise.rep) {
            startTimer(exercise.duration);
        } else {
            document.getElementById("timer").innerText = exercise.dura_phono;
        }
        state.currentExerciseIndex++;
    } else if (state.currentBlock < state.totalBlocks - 1) {
        state.currentBlock++;
        state.currentExerciseIndex = 0;
        nextExercise();
    } else if (state.currentBlock === state.totalBlocks - 1 && state.vbonus > 0) {
        state.currentBlock++;
        state.currentExerciseIndex = 0;
        nextExercise();
    } else {
        endSession();
    }
}

function startTimer(duration) {
    state.timeLeft = duration;
    clearInterval(state.timer);
    state.timer = setInterval(() => {
        if (state.isPaused) return;
        if (state.timeLeft <= 0) {
            clearInterval(state.timer);
            nextExercise();
        } else {
            document.getElementById("timer").innerText = state.timeLeft + "s";
            if (state.timeLeft == 6) announceNextExercise();
            if (state.timeLeft == 4) playBeep();
            state.timeLeft--;
        }
    }, 1000);
}

function announceExercise(ex) {
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
    let speech = new SpeechSynthesisUtterance(`${ex.phono} pour ${ex.dura_phono}`);
    speech.lang = 'fr-FR';
    window.speechSynthesis.speak(speech);
}
function announceNextExercise() {
    let arr = (state.currentBlock < state.totalBlocks) ? exercises : bonusExercises;
    const nextEx = arr[state.currentExerciseIndex];
    if (nextEx) {
        let speech = new SpeechSynthesisUtterance(`Prochain exercice: ${nextEx.phono} pour ${nextEx.dura_phono}`);
        speech.lang = 'fr-FR';
        window.speechSynthesis.speak(speech);
    }
}
function playBeep() {
    new Audio('src/assets/beep.mp3').play();
}
function endSession() {
    clearInterval(state.timer);
    alert("Séance terminée !");
}
function updateProgressBar() {
    let total = (state.totalBlocks * exercises.length) + (state.vbonus ? bonusExercises.length : 0);
    let done = (state.currentBlock * exercises.length) + state.currentExerciseIndex;
    let percent = Math.min(100, Math.round((done / total) * 100));
    document.getElementById("progressBar").style.width = percent + "%";
}

// Proprioception
function startProprioSession() {
    state.proprioIndex = 0;
    document.getElementById("startProprioBtn").style.display = "none";
    document.getElementById("proprioDisplay").classList.remove("hidden");
    document.getElementById("stopProprioSessionBtn").style.display = "";
    document.getElementById("backHome2").style.display = "none";
    nextProprioExercise();
}
function nextProprioExercise() {
    clearInterval(state.proprioTimer);
    if (state.proprioIndex >= exercice_proprio.length) return endProprioSession();
    const ex = exercice_proprio[state.proprioIndex];
    document.getElementById("proprioName").innerText = ex.name;
    announceExercise(ex);
    document.getElementById("skipProprioBtn").innerText = ex.rep ? "j'ai fini les répétitions" : "passer l'exercice";
    if (ex.rep) {
        document.getElementById("proprioTimer").innerText = ex.dura_phono;
        document.getElementById("pauseProprioBtn").style.display = "none";
    } else {
        let timeLeft = ex.duration;
        document.getElementById("proprioTimer").innerText = timeLeft + "s";
        document.getElementById("pauseProprioBtn").style.display = "";
        state.proprioPaused = false;
        document.getElementById("pauseProprioBtn").innerText = "Pause";
        document.getElementById("pauseProprioBtn").className = "resumed";
        state.proprioTimer = setInterval(() => {
            if (state.proprioPaused) return;
            if (timeLeft > 0) {
                timeLeft--;
                document.getElementById("proprioTimer").innerText = timeLeft + "s";
            }
            if (timeLeft <= 0) {
                clearInterval(state.proprioTimer);
                state.proprioIndex++;
                nextProprioExercise();
            }
        }, 1000);
    }
}
function endProprioSession() {
    clearInterval(state.proprioTimer);
    document.getElementById("proprioName").innerText = "Séance terminée !";
    document.getElementById("proprioTimer").innerText = "";
    document.getElementById("startProprioBtn").style.display = "";
    document.getElementById("stopProprioSessionBtn").style.display = "none";
    document.getElementById("pauseProprioBtn").style.display = "none";
    document.getElementById("backHome2").style.display = "";
    document.getElementById("proprioDisplay").classList.add("hidden");
}

// DOM events
document.addEventListener("DOMContentLoaded", function () {
    const $ = id => document.getElementById(id);
    $("startButton").onclick = startSession;
    $("stopButton").onclick = function () {
        state.isPaused = !state.isPaused;
        if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
        this.innerText = state.isPaused ? "Reprendre" : "Pause";
        this.className = state.isPaused ? "paused" : "resumed";
        if (!state.isPaused) startTimer(state.timeLeft);
    };
    $("skipButton").onclick = nextExercise;
    $("backToSettingsBtn").onclick = function () {
        clearInterval(state.timer);
        if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
        $("exerciseName").innerText = "";
        $("settings").className = "";
        $("exerciseDisplay").className = "hidden";
        $("progressBarContainer").className = "hidden";
        this.style.display = "none";
        $("backHome1").style.display = "";
    };
    $("startPrepBtn").onclick = function () {
        $("homePage").style.display = "none";
        $("mainApp").style.display = "";
        $("propApp").style.display = "none";
    };
    $("startPropBtn").onclick = function () {
        $("homePage").style.display = "none";
        $("mainApp").style.display = "none";
        $("propApp").style.display = "";
    };
    $("backHome1").onclick = $("backHome2").onclick = function () {
        $("homePage").style.display = "";
        $("mainApp").style.display = "none";
        $("propApp").style.display = "none";
    };
    $("startProprioBtn").onclick = startProprioSession;
    $("skipProprioBtn").onclick = function () {
        clearInterval(state.proprioTimer);
        state.proprioIndex++;
        nextProprioExercise();
    };
    $("pauseProprioBtn").onclick = function () {
        state.proprioPaused = !state.proprioPaused;
        this.innerText = state.proprioPaused ? "Reprendre" : "Pause";
        this.className = state.proprioPaused ? "paused" : "resumed";
    };
    $("stopSessionBtn").onclick = function () {
        state.isPaused = true;
        clearInterval(state.timer);
        $("settings").className = "";
        $("exerciseDisplay").className = "hidden";
        $("progressBarContainer").className = "hidden";
        this.style.display = "none";
        $("backHome1").style.display = "";
    };
    $("stopProprioSessionBtn").onclick = function () {
        state.proprioPaused = true;
        clearInterval(state.proprioTimer);
        $("proprioDisplay").classList.add("hidden");
        $("startProprioBtn").style.display = "";
        this.style.display = "none";
        $("backHome2").style.display = "";
    };
});

// Optionnel : Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(reg => console.log('Service worker enregistré.', reg))
            .catch(err => console.error('Erreur lors de l’enregistrement :', err));
    });
}