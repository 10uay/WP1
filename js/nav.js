$(document).on("scroll", function () {
  if ($(document).scrollTop() > 86) {
    $("#navbar").addClass("sticky");
    $("#nav-logo").addClass("color-white");
    $(".nav-custom-link").addClass("color-white");
    $(".navbar-btn").addClass("nav-btn-icon");
    $(".hr").addClass("color-white");
  } else {
    $("#navbar").removeClass("sticky");
    $("#nav-logo").removeClass("color-white");
    $(".nav-custom-link").removeClass("color-white");
    $(".navbar-btn").removeClass("nav-btn-icon");
    $(".hr").removeClass("color-white");
  }
});

// 
// Add event listener to close the menu when a link is clicked 
document.querySelectorAll(".nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    var nav = document.getElementById("collapsibleNavbar");
    var bsCollapse = new bootstrap.Collapse(nav, { toggle: false });
    bsCollapse.hide();
  });
});

//
// carousel
document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots");

  // Insert dots into the DOM
  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  // Function to show a specific item
  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      dots[idx].classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
        dots[idx].classList.add("active");
      }
    });
  }

  // Event listeners for buttons
  document.querySelector(".prev").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index - 1 + items.length) % items.length);
  });

  document.querySelector(".next").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index + 1) % items.length);
  });

  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.dataset.index);
      showItem(index);
    });
  });
});
