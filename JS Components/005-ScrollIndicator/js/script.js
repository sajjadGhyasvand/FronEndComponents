const progress = document.querySelector('.progress-bar');

window.addEventListener('scroll',() => {
  const winScroll = window.pageYOffset;
  const height = document.documentElement.scrollHeight;
  const scrolled =  (winScroll/height)*200;
  progress.style.width = `${scrolled}%`;
})