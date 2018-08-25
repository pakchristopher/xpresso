const $ = require('jQuery')

import './scss/main.scss'

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  
  const nav = document.querySelector('.nav')
  const navBot = nav.offsetTop+nav.offsetHeight
  const navIcon = document.querySelector('.m-icon')
  const navWrap = document.querySelector('.nav__wrap')
  
  function navFixed(){
    console.log(nav.offsetTop)
    if(window.scrollY >= navBot) nav.classList.add('fixed')
    else nav.classList.remove('fixed')
  }

window.addEventListener('scroll', navFixed)
navIcon.addEventListener('click', function(){
  nav.classList.toggle('mobile')
  if(nav.classList.contains('mobile')) document.querySelector('.svg-icon').setAttribute('src', '../assets/images/svg/close.svg')
  else document.querySelector('.svg-icon').setAttribute('src', '../assets/images/svg/menu.svg')
})