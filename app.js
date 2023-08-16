const menu = document.querySelector('.menu');
const list = document.querySelector('.nav__links');
const close = document.querySelector('.close');
menu.onclick = function () {
  list.classList.toggle('is-opened');
}
close.onclick = function () {
  list.classList.remove('is-opened');
}
const allAll = document.querySelector('.all__all');
const allTesla = document.querySelector('.all__tesla');
const allAudi = document.querySelector('.all__audi');
const allPorsche = document.querySelector('.all__porche');
const itemTesla = document.querySelectorAll('.item-tesla');
const itemAudi = document.querySelectorAll('.item-audi');
const itemPorsche = document.querySelectorAll('.item-porsche');

allAll.onclick = function () {
  itemTesla.forEach(item => item.style.display = "block");
  itemAudi.forEach(item => item.style.display = "block");
  itemPorsche.forEach(item => item.style.display = "block");
}
allTesla.onclick = function () {
  itemTesla.forEach(item => item.style.display = "block");
  itemAudi.forEach(item => item.style.display = "none");
  itemPorsche.forEach(item => item.style.display = "none");
}
allAudi.onclick = function () {
  itemTesla.forEach(item => item.style.display = "none");
  itemAudi.forEach(item => item.style.display = "block");
  itemPorsche.forEach(item => item.style.display = "none");
}
allPorsche.onclick = function () {
  itemTesla.forEach(item => item.style.display = "none");
  itemAudi.forEach(item => item.style.display = "none");
  itemPorsche.forEach(item => item.style.display = "block");
}

const scrollButton = document.querySelector('.main__btn');
const elements = document.querySelectorAll('.more, .pick, .all, .sub, .logos, footer');
const moreElement = document.querySelector('.more');

scrollButton.addEventListener('click', function() {
  moreElement.scrollIntoView({
    behavior: 'smooth'
  });
});

