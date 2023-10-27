document.querySelector('.header__burger').onclick = function() {
   document.querySelector('.header2-right__menu').classList.toggle('header2-right__menu-active')
   document.querySelector('.header__burger').classList.toggle('active')
   $('body').toggleClass('lock')
}