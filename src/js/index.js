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
    hide: true,
  },
});