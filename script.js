const menu = document.querySelector('.menu-button');
document.querySelectorAll('a[href^="mailto:"]').forEach(link => { link.href = 'mailto:adnanary45@gmail.com'; link.textContent = link.textContent.replaceAll('adnanary@gmail.com', 'adnanary45@gmail.com'); });
const panel = document.querySelector('.nav-panel');
menu.addEventListener('click', () => panel.classList.toggle('open'));
panel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => panel.classList.remove('open')));
const star = document.querySelector('.cursor-star');
window.addEventListener('pointermove', e => { star.style.opacity = '1'; star.style.transform = `translate(${e.clientX + 12}px, ${e.clientY + 12}px) rotate(${e.clientX / 4}deg)`; });
document.querySelector('.niva')?.setAttribute('href', 'work/niva/index.html');
document.querySelector('.dormi')?.setAttribute('href', 'work/dormi/index.html');
document.querySelector('.buddy')?.setAttribute('href', 'work/buddy/index.html');
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const kind = button.dataset.filter;
  document.querySelectorAll('.work-card').forEach(card => { card.style.display = kind === 'all' || card.dataset.kind === kind || (kind === 'brand' && card.classList.contains('niva')) ? '' : 'none'; });
}));
const starField = document.querySelector('.footer-starfield');
const leaveStar = document.querySelector('.leave-star');
const stars = document.querySelector('.footer-stars');
if (starField && leaveStar && stars) {
  let audioContext;
  const playChime = () => {
    try { audioContext ||= new (window.AudioContext || window.webkitAudioContext)(); } catch { return; }
    const oscillator = audioContext.createOscillator(); const gain = audioContext.createGain();
    oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(720, audioContext.currentTime); oscillator.frequency.exponentialRampToValueAtTime(1120, audioContext.currentTime + .16);
    gain.gain.setValueAtTime(.0001, audioContext.currentTime); gain.gain.exponentialRampToValueAtTime(.08, audioContext.currentTime + .02); gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + .3);
    oscillator.connect(gain).connect(audioContext.destination); oscillator.start(); oscillator.stop(audioContext.currentTime + .3);
  };
  for (let i = 0; i < 180; i++) { const dot = document.createElement('i'); dot.style.left = `${Math.random() * 100}%`; dot.style.top = `${Math.random() * 100}%`; dot.style.setProperty('--dx', `${Math.round(Math.random() * 70 - 35)}px`); dot.style.setProperty('--dy', `${Math.round(Math.random() * 70 - 35)}px`); dot.style.setProperty('--duration', `${Math.round(Math.random() * 8 + 5)}s`); dot.style.animationDelay = `${Math.random() * -10}s`; stars.appendChild(dot); }
  const placeStar = (event) => { playChime(); const star = document.createElement('b'); star.className = 'visitor-star'; star.textContent = '✦'; star.style.left = `${event.clientX - starField.getBoundingClientRect().left}px`; star.style.top = `${event.clientY - starField.getBoundingClientRect().top}px`; stars.appendChild(star); };
  starField.addEventListener('click', placeStar);
  starField.addEventListener('pointerenter', () => document.body.classList.add('footer-hover'));
  starField.addEventListener('pointerleave', () => document.body.classList.remove('footer-hover'));
}
