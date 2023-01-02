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
        speed: 1000,
        autoplay: true,
        interval: 5000,
        transition: "fade"
    });
    splide.mount();
});

// tabs
var firstTab = document.querySelector("a[data-tab]");
if (firstTab) showTab(firstTab.dataset.tab);
document.querySelectorAll("a[data-tab]").forEach(function(link){
  link.addEventListener("click", function(event) {
    event.preventDefault();
    showTab(link.dataset.tab);
  })
})

function showTab(tabid) {
  hideAllTabs();
  document.querySelector("[data-tab='" + tabid + "']").parentElement.classList.add("is-active");
  document.querySelector("[data-tabid='" + tabid + "']").style.display = "block";
}

function hideAllTabs() {
  document.querySelectorAll("[data-tab]").forEach(function(tab){
    tab.parentElement.classList.remove("is-active");
  });
  document.querySelectorAll("[data-tabid]").forEach(function(tabcontent){
    tabcontent.style.display = "none";
  });
}