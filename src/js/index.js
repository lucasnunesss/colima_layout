const menu = document.querySelector('#menu');
const ul = document.querySelector('ul')
const div = document.querySelector('.listMobile')
const nav = document.querySelector('header')
const menuInit = document.querySelector('.menuInit')


menu.addEventListener('click', e => {




  if(menu.classList.contains('menuInit')){
    menu.classList.remove('menuInit')
    div.style.display = 'none'
  } else {
    div.style.display = 'block'
    console.log('oi')
    menu.classList.add('menuInit')
  }
})

var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  autoplay: {
    delay: 1000, // tempo de atraso entre cada slide em milissegundos
    disableOnInteraction: false, // continuar o autoplay mesmo após interação do usuário
  },
  loop: true, // faz o loop dos slides
});