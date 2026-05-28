document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const links = navLinks ? navLinks.querySelectorAll('a') : [];

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking a link
    links.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });

    // Close menu when clicking anywhere outside the menu
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && e.target !== navToggle) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  }
});

window.addEventListener("load", () => {

  fetch("https://frosty-term-384e.rohankrishna150.workers.dev/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      page: window.location.pathname,
      referrer: document.referrer,
      screen: `${screen.width}x${screen.height}`,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    })
  });

});
