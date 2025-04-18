const hamburger = document.querySelector('.hamburger--slider-r');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  menu.classList.toggle('active');
});


// Typing Text code

const typed = new Typed('.multiple', {
    strings: ['Physical Fitness', 'Weight Gain','Strength Training','Fat Loss','Weight Lifting','Running/Cardio'],
    typeSpeed: 60,
    backSpeed: 60,
    backdelay: 1000,
    loop: true,
  });
  



  