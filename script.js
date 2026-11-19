// Tells the CSS that JavaScript is working (so animations only run when they can)
document.documentElement.classList.add("js");

// ===== 1. Mobile menu =====
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton.addEventListener("click", function () {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Close the menu after a link is tapped
nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  });
});

// ===== 2. Add a shadow to the header after scrolling =====
const header = document.querySelector(".site-header");

window.addEventListener("scroll", function () {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

// ===== 3. Fade in cards as they appear on screen =====
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach(function (item) { observer.observe(item); });
} else {
  // Older browsers: just show everything
  revealItems.forEach(function (item) { item.classList.add("visible"); });
}

// ===== 4. Keep the footer year up to date =====
document.getElementById("year").textContent = new Date().getFullYear();