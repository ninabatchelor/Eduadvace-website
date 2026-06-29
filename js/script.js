/* ==========================================
   EduAdvance Website JavaScript
========================================== */

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Header background on scroll
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.12)";
        header.style.padding = "0";
    } else {
        header.style.boxShadow = "0 3px 20px rgba(0,0,0,.08)";
    }

});

// Fade-in animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".timeline-item, .service-card, .region-card, .region-tabs div")
.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all .7s ease";

    observer.observe(card);

});

// Region cards click effect
document.querySelectorAll(".region-card").forEach(card => {

    card.addEventListener("click", () => {

        document.querySelectorAll(".region-card").forEach(c => {
            c.style.borderColor = "#ececec";
        });

        card.style.borderColor = "#2563eb";

    });

});

// Button hover animation
document.querySelectorAll(".primary-btn, .secondary-btn, .nav-button")
.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

// Reveal sections
const sections = document.querySelectorAll(".section");

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all .8s ease";

    observer.observe(section);

});
function showRegion(regionId) {
  document.querySelectorAll(".region-detail").forEach(region => {
    region.classList.remove("active-region");
  });

  document.querySelectorAll(".region-tab-buttons button").forEach(button => {
    button.classList.remove("active");
  });

  document.getElementById(regionId).classList.add("active-region");
  event.target.classList.add("active");
}
