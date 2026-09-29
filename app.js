// app.js

// ---------- Audio ----------
const audio = document.getElementById('pineAudio');
let fadeInterval;

function fadeAudio(target, duration = 500){
  clearInterval(fadeInterval);
  const steps = 20;
  const stepTime = duration / steps;
  const startVol = audio.volume;
  const diff = target - startVol;
  let i = 0;
  fadeInterval = setInterval(() => {
    i++;
    audio.volume = Math.max(0, Math.min(1, startVol + diff * (i / steps)));
    if(i >= steps){
      clearInterval(fadeInterval);
      if(target === 0) audio.pause();
    }
  }, stepTime);
}

function toggleModo(){
  const estado = document.getElementById('estado');
  const texto = document.getElementById('estadoTexto');
  const isOff = estado.classList.toggle('off');
  texto.textContent = isOff ? 'Pine mode: off' : 'Pine mode: on';

  if(isOff){
    fadeAudio(0);
  } else {
    audio.volume = 0;
    audio.play();
    fadeAudio(0.6);
  }
}

// ---------- Copiar CA + confetti ----------
function copiarCA(ca){
  const hint = document.getElementById('copyHint');
  navigator.clipboard.writeText(ca).then(() => {
    hint.textContent = 'copied!';
    setTimeout(() => { hint.textContent = ''; }, 1500);
    spawnConfettiAt(document.querySelector
