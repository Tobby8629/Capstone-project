const bars = document.querySelector('.icon');
const tray = document.querySelector('#tray');

bars.addEventListener('click', () => {
  tray.classList.toggle('show');
});

tray.addEventListener('click', () => {
  tray.classList.remove('show');
});
