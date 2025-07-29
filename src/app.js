// src/app.js

const exercises = [
    { name: "Gainage Face", phono: "Guènage Face", duration: 30,dura_phono: "30 secondes" },
    { name: "Gainage droite", phono: "Guènage droite", duration: 30,dura_phono:"30 secondes" },
    { name: "Gainage gauche", phono: "Guènage gauche", duration:30,dura_phono: "30 secondes" },
    { name: "Gainage dos", phono: "Guènage D'eau", duration: 30,dura_phono:"30 secondes" },
    { name: "Pompes", phono:"Pompes", duration:20,dura_phono:"10 répétition", repetitions: 1},
    { name: "Dips",phono:"Dips", duration: 20 ,dura_phono:"10 répétition", repetitions: 1},
    { name: "Abdos", phono:"Abdos", duration: 20,dura_phono:"10 répétition" , repetitions: 1 },
    { name: "Abdos Toucher les Pieds",phono:"Abdos Toucher les Pieds", duration: "20 répétition",dura_phono:0, repetitions: 1 },
    { name: "Abdos Rotation Haut du Corps",phono:"Abdos Rotation Haut du Corps", duration: "30 répétition",dura_phono:0, repetitions: 1 },
    { name: "Abdos Toucher les Pieds",phono:"Abdos Toucher les Pieds", duration: "20 répétition",dura_phono:0, repetitions: 1 },
    { name: "Abdos", phono:"Abdos", duration: 20,dura_phono:"10 répétition" , repetitions: 1 },
    { name: "Superman Actif", phono:"Superman Actif", duration: 30 ,dura_phono:"30 secondes",},
    { name: "Squat Sauté", phono:"Squat Sauté", duration: 15 ,dura_phono:"15 secondes",},
    { name: "Pause", phono:"pause", duration: 90 ,dura_phono:"1,5 minutes"} // Pause de 1 minute entre les exercices
];

const bonusExercises = [
    { name: "Gainage Face", phono: "Guènage Face", duration: 30,dura_phono:30 },
    { name: "Gainage droite", phono: "Guènage droite", duration: 30,dura_phono:30 },
    { name: "Gainage gauche", phono: "Guènage gauche", duration:30,dura_phono: 30 },
    { name: "Gainage dos", phono: "Guènage D'eau", duration: 30,dura_phono:30 },
    
];

let currentExerciseIndex = 0;
let currentBlock = 0;
let totalBlocks = 0;
let totalGainage = 0;
let isPaused = false;
let timer;
let timeLeft;
let speech;
let vbonus = 0; // Variable pour le bonus de gainage
let dura_phono;

function startSession() {

    totalBlocks = parseInt(document.getElementById("blocks").value);
    totalGainage = parseInt(document.getElementById("gainage").value);
    if (totalGainage > totalBlocks) {
        vbonus += 1; // Add bonus block
    }
    currentBlock = 0;
    currentExerciseIndex = 0;
    document.getElementById("settings").className  = "hidden";
    document.getElementById("exerciseDisplay").className = "visible";
    document.getElementById("progressBarContainer").className = "";
    updateProgressBar();
    nextExercise();
}

function nextExercise() {
    updateProgressBar();
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
    } else if (currentBlock= totalBlocks && vbonus > 0) {
        currentExerciseIndex = 0;
        nextBonusExercise();
    } else {
        endSession();
    }
}

function nextBonusExercise() {
    if (currentExerciseIndex < bonusExercises.length) {
        const exercise = bonusExercises[currentExerciseIndex];
        announceExercise(bonusExercises);
        document.getElementById("exerciseName").innerText = bonusExercises.name;
        startTimer(bonusExercises.duration);
        currentExerciseIndex++;
    } else {
        endSession();
    }
}

function startTimer(duration) {
    timeLeft = duration;
    if (timer) {
        clearInterval(timer);
    }
    
    timer = setInterval( () => {
        if (isPaused) return;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextExercise();
        } else {
            if (exercises[currentExerciseIndex - 1].repetitions == 1){document.getElementById("timer").innerText = exercises[currentExerciseIndex - 1].dura_phono;
            }
            else {document.getElementById("timer").innerText = timeLeft;}
            

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
    
    
    speech = new SpeechSynthesisUtterance(`${exercise.phono} pour ${exercise.dura_phono}`); 
    speech.voice = window.speechSynthesis.getVoices().find(voice => voice.name == 'Microsoft Paul - French (France)');
    speech.lang = 'fr-FR';
    window.speechSynthesis.speak(speech);
}

function announceNextExercise() {
    

    const nextExercise = exercises[currentExerciseIndex] || bonusExercises[currentExerciseIndex];
    if (nextExercise) {
        const speech = new SpeechSynthesisUtterance(`Prochain exercice: ${nextExercise.phono} pour ${nextExercise.dura_phono} `);
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

function updateProgressBar() {
    // Nombre total d'exercices à faire (hors pauses)
    let total = (totalBlocks * exercises.length);
    // Si bonus à faire (plus de séries de gainage que de blocs)
    if (totalGainage > totalBlocks - 1) total += bonusExercises.length;

    // Calcul du nombre d'exercices déjà faits
    let done;
    if (currentBlock < totalBlocks) {
        done = (currentBlock * exercises.length) + currentExerciseIndex;
    } else {
        // On est dans le bloc bonus
        done = (totalBlocks * exercises.length) + currentExerciseIndex;
    }
    // Clamp pour éviter de dépasser 100%
    let percent = Math.min(100, Math.round((done / total) * 100));
    document.getElementById("progressBar").style.width = percent + "%";
}

document.getElementById("startButton").addEventListener("click", startSession);
document.getElementById("stopButton").onclick = function() {
    isPaused = !isPaused;
    this.innerText = isPaused ? "Reprendre" : "Pause";
    if (!isPaused) {
        startTimer(timeLeft);
        document.getElementById("stopButton").className = "resumed";
    }else
    {
        document.getElementById("stopButton").className = "paused"; 
    }
};
document.getElementById("skipButton").addEventListener("click", nextExercise);


// Exemple de liste à remplir
const exercice_proprio = [
    { name: "Equilibre pied décalé", phono: "pied décalé droite devant", duration: 20, dura_phono: "20 secondes",rep:0 },
    { name: "Equilibre pied décalé", phono: "pied décalé gauche devant", duration: 20, dura_phono: "20 secondes",rep:0 },
    { name: "Repos", phono: "Repos", duration: 60, dura_phono: "1 minute",rep:0 },
    { name: "Equilibre pied décalé", phono: "pied décalé droite devant", duration: 20, dura_phono: "20 secondes",rep:0 },
    { name: "Equilibre pied décalé", phono: "pied décalé gauche devant", duration: 20, dura_phono: "20 secondes",rep:0 },
    { name: "Repos", phono: "Repos", duration: 60, dura_phono: "1 minute",rep:0 },
    { name: "Equilibre pied décalé", phono: "pied décalé droite devant", duration: 20, dura_phono: "20 secondes",rep:0 },
    { name: "Equilibre pied décalé", phono: "pied décalé gauche devant", duration: 20, dura_phono: "20 secondes",rep:0 },
    { name: "Repos", phono: "Repos", duration: 60, dura_phono: "1 minute",rep:0 },
    { name: "Equilibre pied décalé", phono: "pied décalé droite devant", duration: 20, dura_phono: "20 secondes",rep:0 },
    { name: "Equilibre pied décalé", phono: "pied décalé gauche devant", duration: 20, dura_phono: "20 secondes",rep:0 },
    { name: "Repos", phono: "Repos", duration: 60, dura_phono: "1 minute",rep:0 },
    { name: "Travail d'appuis", phono: "Travail d'appuis pied joint", duration: 20, dura_phono: "5 répétition",rep:1 }, 
    { name: "Travail d'appuis", phono: "Travail d'appuis pied droit", duration: 20, dura_phono: "5 répétition",rep:1 },
    { name: "Travail d'appuis", phono: "Travail d'appuis pied gauche", duration: 20, dura_phono: "5 répétition",rep:1 },
    { name: "Repos", phono: "Repos", duration: 60, dura_phono: "1 minute",rep:0 },
    { name: "Travail d'appuis", phono: "Travail d'appuis pied joint", duration: 20, dura_phono: "5 répétition",rep:1 }, 
    { name: "Travail d'appuis", phono: "Travail d'appuis pied droit", duration: 20, dura_phono: "5 répétition",rep:1 },
    { name: "Travail d'appuis", phono: "Travail d'appuis pied gauche", duration: 20, dura_phono: "5 répétition",rep:1 },
    { name: "Repos", phono: "Repos", duration: 60, dura_phono: "1 minute",rep:0 },
    { name: "Travail d'appuis", phono: "Travail d'appuis pied joint", duration: 20, dura_phono: "5 répétition",rep:1 }, 
    { name: "Travail d'appuis", phono: "Travail d'appuis pied droit", duration: 20, dura_phono: "5 répétition",rep:1 },
    { name: "Travail d'appuis", phono: "Travail d'appuis pied gauche", duration: 20, dura_phono: "5 répétition",rep:1 },
    { name: "Repos", phono: "Repos", duration: 60, dura_phono: "1 minute",rep:0 },
    { name: "Equilibre sur un pied (droit)", phono: "équilibre sur pied droit", duration: 30, dura_phono: "30 secondes",rep:0 },
    { name: "Equilibre sur un pied (gauche)", phono: "équilibre sur pied gauche", duration: 30, dura_phono: "30 secondes",rep:0 },
    { name: "Equilibre sur un pied (droit)", phono: "équilibre sur pied droit", duration: 30, dura_phono: "30 secondes",rep:0 },
    { name: "Equilibre sur un pied (gauche)", phono: "équilibre sur pied gauche", duration: 30, dura_phono: "30 secondes",rep:0 },
    { name: "Equilibre sur un pied (droit)", phono: "équilibre sur pied droit", duration: 30, dura_phono: "30 secondes",rep:0 },
    { name: "Equilibre sur un pied (gauche)", phono: "équilibre sur pied gauche", duration: 30, dura_phono: "30 secondes",rep:0 },
    { name: "Ouverture d'épaule (20 mouvement par bras) x 3 ",
        phono: "Ouverture d'épaule", duration: 240, dura_phono: "3 fois 20 mouvement par Bras",rep:1 },
    { name: "Travaille tenue de balle",phono: "Travaille tenue de balle", duration: 240, dura_phono: "3 fois 20 mouvement par Bras ",rep:1 },
    { name: "Travail de passe (feintes puis tire) 2 series 20",
        phono: "Travail de passe", duration: 240, dura_phono: "2 series de 20 mouvement",rep:1 },
    
   

    // { name: "Sur un pied, yeux fermés", duration: 30, phono: "Sur un pied, yeux fermés", dura_phono: "30 secondes" },
    // { name: "Jonglage avec balle", duration: 60, phono: "Jonglage avec balle", dura_phono: "1 minute" },
    // ...
];

let proprioIndex = 0;
let proprioTimerInterval = null;
let proprioPaused = false;

function startProprioSession() {
    proprioIndex = 0;
    document.getElementById("startProprioBtn").style.display = "none";
    document.getElementById("proprioDisplay").classList.remove("hidden");
    nextProprioExercise();
}

function nextProprioExercise() {
    if (proprioIndex >= exercice_proprio.length) {
        endProprioSession();
        return;
    }
    const ex = exercice_proprio[proprioIndex];
    document.getElementById("proprioName").innerText = ex.name;
    let timeLeft = ex.duration;
    if (ex.rep == 1) {
        document.getElementById("proprioTimer").innerText = ex.dura_phono;
    } else {
        document.getElementById("proprioTimer").innerText = timeLeft + "s";
    announceExercise(ex);}

    clearInterval(proprioTimerInterval);
    proprioPaused = false;
    document.getElementById("pauseProprioBtn").innerText = "Pause";
    document.getElementById("pauseProprioBtn").className = "resumed";
    proprioTimerInterval = setInterval(() => {
        if (proprioPaused) return;
        timeLeft--;
        if (ex.rep == 1) {
        document.getElementById("proprioTimer").innerText = ex.dura_phono;
    }   else {
        document.getElementById("proprioTimer").innerText = timeLeft + "s";}
        if (timeLeft <= 0) {
            clearInterval(proprioTimerInterval);
            proprioIndex++;
            nextProprioExercise();
        }
    }, 1000);
}

// Bouton pause proprio
document.addEventListener("DOMContentLoaded", function() {
    const homePage = document.getElementById("homePage");
    const mainApp = document.getElementById("mainApp");
    const propApp = document.getElementById("propApp");
    const prepBtn = document.getElementById("startPrepBtn");
    const propBtn = document.getElementById("startPropBtn");
    const backHome1 = document.getElementById("backHome1");
    const backHome2 = document.getElementById("backHome2");
    const startProprioBtn = document.getElementById("startProprioBtn");
    const skipProprioBtn = document.getElementById("skipProprioBtn");
    const pauseProprioBtn = document.getElementById("pauseProprioBtn");

    if (prepBtn) prepBtn.onclick = function() {
        homePage.style.display = "none";
        mainApp.style.display = "";
        propApp.style.display = "none";
    };
    if (propBtn) propBtn.onclick = function() {
        homePage.style.display = "none";
        mainApp.style.display = "none";
        propApp.style.display = "";
    };
    if (backHome1) backHome1.onclick = function() {
        homePage.style.display = "";
        mainApp.style.display = "none";
        propApp.style.display = "none";
    };
    if (backHome2) backHome2.onclick = function() {
        homePage.style.display = "";
        mainApp.style.display = "none";
        propApp.style.display = "none";
    };
    if (startProprioBtn) startProprioBtn.onclick = startProprioSession;
    if (skipProprioBtn) skipProprioBtn.onclick = function() {
        clearInterval(proprioTimerInterval);
        proprioIndex++;
        nextProprioExercise();
    };
    if (pauseProprioBtn) pauseProprioBtn.onclick = function() {
        proprioPaused = !proprioPaused;
        this.innerText = proprioPaused ? "Reprendre" : "Pause";
        this.className = proprioPaused ? "paused" : "resumed";
    };
});

window.speechSynthesis.voice = window.speechSynthesis.getVoices().find(voice => voice.name == 'Microsoft Paul - French (France)');
window.speechSynthesis.lang = 'fr-FR';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('Service worker enregistré.', reg))
      .catch(err => console.error('Erreur lors de l’enregistrement :', err));
  });
}