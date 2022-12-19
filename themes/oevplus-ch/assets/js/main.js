// Get all "navbar-burger" elements
var burger = document.querySelector('.navbar-burger');
burger.addEventListener('click', function() {
  var target = document.getElementById(burger.dataset.target);
  burger.classList.toggle('is-active');
  target.classList.toggle('is-active');
});

// sliders
document.querySelectorAll(".splide").forEach(function(slider){
    var splide = new Splide("#" + slider.id, {
        type: "loop",
        autoplay: true,
        interval: 5000
    });
    splide.mount();
})