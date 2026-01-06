/**
 * app.js
 * Minimal JS for subtle UX polish
 */

document.addEventListener("DOMContentLoaded", () => {
  // Fade-in sections on scroll
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll("section").forEach(section => {
    section.classList.add("fade-section");
    observer.observe(section);
  });
});
