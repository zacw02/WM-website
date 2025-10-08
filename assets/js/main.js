window.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const animatedSections = document.querySelectorAll('[data-animate]');
  if (!animatedSections.length) {
    return;
  }

  const reveal = (section) => {
    section.classList.add('in-view');
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.2 }
    );

    animatedSections.forEach((section) => observer.observe(section));
  } else {
    animatedSections.forEach(reveal);
  }
});
