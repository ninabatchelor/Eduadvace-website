document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  const regionButtons = document.querySelectorAll('.region-btn');
  const regionContents = document.querySelectorAll('.region-content');

  regionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const region = button.getAttribute('data-region');

      regionButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');

      regionContents.forEach(function (content) {
        content.classList.remove('active');
      });

      const selectedRegion = document.getElementById(region);
      if (selectedRegion) {
        selectedRegion.classList.add('active');
      }
    });
  });
});
