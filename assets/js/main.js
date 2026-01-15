document.addEventListener("DOMContentLoaded", function () {
  const ctaBtn = document.getElementById("cta-button");
  const hiddenSection = document.getElementById("bottom-right");

  ctaBtn.addEventListener("click", function (e) {
    e.preventDefault();
    hiddenSection.classList.add("visible");
    ctaBtn.style.display = "none"; // Optional: Hide the CTA button
  });
});
