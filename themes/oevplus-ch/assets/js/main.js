// clean up empty paragraphs
document.querySelectorAll("p").forEach(function (paragraph) { 
  if (!paragraph.innerHTML) paragraph.remove();
})

// Get all "navbar-burger" elements
var burger = document.querySelector('.navbar-burger');
burger.addEventListener('click', function () {
  var target = document.getElementById(burger.dataset.target);
  burger.classList.toggle('is-active');
  target.classList.toggle('is-active');
});

// sliders
document.querySelectorAll(".splide").forEach(function (slider) {
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
document.querySelectorAll("a[data-tab]").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    showTab(link.dataset.tab);
  })
})

function showTab(tabid) {
  hideAllTabs();
  document.querySelector("[data-tab='" + tabid + "']").parentElement.classList.add("is-active");
  document.querySelector("[data-tabid='" + tabid + "']").classList.remove("is-hidden");
}

function hideAllTabs() {
  document.querySelectorAll("[data-tab]").forEach(function (tab) {
    tab.parentElement.classList.remove("is-active");
  });
  document.querySelectorAll("[data-tabid]").forEach(function (tabcontent) {
    tabcontent.classList.add("is-hidden");
  });
}


// faq
document.querySelectorAll(".faq a.message-header").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var isActive = link.parentElement.classList.contains("is-active");
    document.querySelectorAll(".faq article").forEach(function (faqItem) {
      faqItem.classList.remove("is-active");
    });
    if (!isActive) link.parentElement.classList.add("is-active");
  })
});