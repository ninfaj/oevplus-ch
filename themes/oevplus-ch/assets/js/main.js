// Get all "navbar-burger" elements
var burger = document.querySelector('.navbar-burger');
burger.addEventListener('click', function() {
  var target = document.getElementById(burger.dataset.target);
  burger.classList.toggle('is-active');
  target.classList.toggle('is-active');
});
