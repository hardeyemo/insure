const navbarToggle = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile');

navbarToggle.addEventListener('click', () => {
  mobileMenu.style.display = 'flex'
});


const closeNav = document.getElementById('close');
const mobileMob = document.getElementById('mobile');

closeNav.addEventListener('click', () => {
  mobileMob.style.display = 'none'
});
