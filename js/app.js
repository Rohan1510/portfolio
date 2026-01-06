function portfolioApp() {
  return {
    active: 'home',
    tabs: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Work' },
      { id: 'stack', label: 'Stack' },
      { id: 'experience', label: 'Experience' },
      { id: 'education', label: 'Education' },
      { id: 'contact', label: 'Contact' }
    ],
    go(id) {
      this.active = id;
      history.replaceState(null, '', `#${id}`);
    },
    init() {
      const hash = location.hash.replace('#', '');
      if (this.tabs.some(t => t.id === hash)) {
        this.active = hash;
      }
    }
  };
}
