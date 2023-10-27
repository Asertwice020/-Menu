const navIcon = document.querySelector('#nav-icon');
const navContainer = document.querySelector('#nav-container');

hamBergerMenu();
function hamBergerMenu() {
  navIcon.addEventListener('click', function menuToggled() {
    navContainer.classList.toggle('apear');
    if (navIcon.classList.contains('fa-bars')) {
      navIcon.classList.remove('fa-bars');
      navIcon.classList.add('fa-xmark');
    } else {
      navIcon.classList.add('fa-bars');
      navIcon.classList.remove('fa-xmark');
    }
  });
}

document.addEventListener('click', function(e) {
  console.log(e.target)
  if(!navContainer.contains(e.target) && e.target !== navIcon) {
    navContainer.classList.remove('apear');
  }
})

// CURSORS
const miniCursor = document.querySelector('#floating-mini-cursor');
const bigCursor = document.querySelector('#big-slow-blury-flaoting-cursor');

document.addEventListener('mousemove',function(details) {
  miniCursor.style.left = details.clientX + -20 + `px`;
  miniCursor.style.top = details.clientY + -20 + `px`;
})