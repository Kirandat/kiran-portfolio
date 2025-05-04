// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
  
    const options = {
      threshold: 0.1 // Trigger when 10% of section is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Unobserve once revealed
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  