window.addEventListener('load', () => {
  fetch('https://frosty-term-384e.rohankrishna150.workers.dev/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      page: window.location.pathname,
      referrer: document.referrer,
      screen: `${screen.width}x${screen.height}`,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    })
  });
});
