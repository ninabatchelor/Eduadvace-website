const steps = document.querySelectorAll(".step");
const nextButtons = document.querySelectorAll(".next");
const prevButtons = document.querySelectorAll(".prev");
const progressBar = document.querySelector(".bar");

let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });

  progressBar.style.width = ((index + 1) / steps.length) * 100 + "%";
}

nextButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});

prevButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});

document
  .getElementById("consultationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    currentStep = 3;
    showStep(currentStep);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // We will connect this to email in the next step.
  });

showStep(0);
