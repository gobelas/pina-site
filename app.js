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
    spawnConfettiAt(document.querySelector('.info-value.address'));
  });
}

function spawnConfettiAt(el){
  if(!el) return;
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const colors = ['#ffc233', '#7cb342', '#ff6f61'];
  for(let i = 0; i < 12; i++){
    const p = document.createElement('span');
    const angle = (Math.PI * 2 * i) / 12 + Math.random() * 0.4;
    const dist = 40 + Math.random() * 30;
    p.style.cssText = `
      position:fixed; left:${cx}px; top:${cy}px;
      width:6px; height:6px; border-radius:50%;
      background:${colors[i % colors.length]};
      pointer-events:none; z-index:999;
      transition: transform 0.6s ease-out, opacity 0.6s ease-out;
      transform: translate(0,0); opacity:1;
    `;
    document.body.appendChild(p);
    requestAnimationFrame(() => {
      p.style.transform = `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px)`;
      p.style.opacity = '0';
    });
    setTimeout(() => p.remove(), 650);
  }
}

// ---------- Render ----------
let currentChain = 'base';

function renderChainList(){
  const list = document.getElementById('chainList');
  list.innerHTML = Object.entries(window.CHAINS).map(([key, c]) => `
    <div class="chain-option ${key === currentChain ? 'active' : ''}" data-chain="${key}" onclick="selectChain('${key}')">
      <img src="${c.icon}" alt="" /> <span>${c.name}</span>
    </div>
  `).join('');
}

function renderInfoCard(){
  const c = window.CHAINS[currentChain];
  const card = document.getElementById('infoCard');
  const caIsClickable = c.ca && c.ca !== 'It depends on the dapp';
  card.innerHTML = `
    <div class="info-row"><span class="info-label">Chain</span><span class="info-value">${c.name}</span></div>
    <div class="info-row"><span class="info-label">Quote</span><span class="info-value">${c.quote}</span></div>
    <div class="info-row"><span class="info-label">CA</span>${
      caIsClickable
        ? `<span class="info-value address" onclick="copiarCA('${c.ca.replace(/'/g, "\\'")}')">${c.ca}</span>`
        : `<span class="info-value">${c.ca}</span>`
    }</div>
    <div class="info-row"><span class="info-label">Total supply</span><span class="info-value">${c.supply}</span></div>
  `;
}

function renderBuyButtons(){
  const c = window.CHAINS[currentChain];
  const wrap = document.getElementById('buyButtons');
  wrap.innerHTML = c.buys.map(b => `
    <a class="buy-btn" href="${b.url}" target="_blank" rel="noopener noreferrer">
      <img src="${b.icon}" alt="${b.name}" />
      <span class="buy-text"><span class="buy-name">${b.name}</span><span class="buy-sub">${b.sub}</span></span>
    </a>
  `).join('');
}

function renderTrigger(){
  const c = window.CHAINS[currentChain];
  document.getElementById('chainTriggerIcon').src = c.icon;
  document.getElementById('chainTriggerName').textContent = c.name;
}

function renderAll(){
  renderChainList();
  renderInfoCard();
  renderBuyButtons();
  renderTrigger();
  document.getElementById('copyHint').textContent = '';
}

// ---------- Interacción ----------
function selectChain(chainKey){
  if(!window.CHAINS[chainKey]) return;
  currentChain = chainKey;
  document.getElementById('chainSelect').classList.remove('open');
  renderAll();
}

function toggleChainList(){
  document.getElementById('chainSelect').classList.toggle('open');
}

document.addEventListener('click', (e) => {
  const select = document.getElementById('chainSelect');
  if(!select.contains(e.target)){
    select.classList.remove('open');
  }
});

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  currentChain = Object.keys(window.CHAINS)[0] || 'base';
  renderAll();
});
