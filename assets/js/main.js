document.addEventListener("DOMContentLoaded", () => {
  const revealSection = document.getElementById("bottom-right");
  const ctaBtn = document.getElementById("primary-button");

  if (ctaBtn && revealSection) {
    ctaBtn.addEventListener("click", (e) => {
      e.preventDefault();
      revealSection.classList.add("visible");
      ctaBtn.style.display = "none"; // hide button after click
    });
  }
});
