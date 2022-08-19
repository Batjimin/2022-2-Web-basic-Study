const moreButton = document.querySelector('.info .metadata .moreButton');
const title = document.querySelector('.info .metadata .title');

moreButton.addEventListener('click', () => {
  moreButton.classList.toggle('clicked');
  title.classList.toggle('clamp');
});