const bars = document.querySelector('.icon');
const tray = document.querySelector('#tray');

bars.addEventListener('click', () => {
  tray.classList.toggle('show');
  bars.classList.toggle('how');
});