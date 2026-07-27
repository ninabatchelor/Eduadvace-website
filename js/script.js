document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const buttons = Array.from(document.querySelectorAll('.region-btn'));
  const panels = Array.from(document.querySelectorAll('.region-content'));

  function showRegion(id, shouldScroll = true) {
    const selectedPanel = document.getElementById(id);
    if (!selectedPanel) return;

    buttons.forEach((button) => {
      const selected = button.dataset.region === id;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-selected', String(selected));
    });

    panels.forEach((panel) => {
      const selected = panel.id === id;
      panel.classList.toggle('active', selected);
      panel.hidden = !selected;
    });

    if (shouldScroll) {
      window.setTimeout(() => {
        selectedPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 30);
    }
  }

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const id = button.dataset.region;
      showRegion(id, true);
      history.replaceState(null, '', `#${id}`);
    });
  });

  const requestedRegion = window.location.hash.replace('#', '');
  if (requestedRegion && panels.some((panel) => panel.id === requestedRegion)) {
    showRegion(requestedRegion, false);
  } else if (buttons[0]) {
    showRegion(buttons[0].dataset.region, false);
  }

  document.querySelectorAll('.email-link').forEach((link) => {
    const user = link.dataset.user;
    const subject = encodeURIComponent(link.dataset.subject || 'EduAdvance enquiry');
    link.href = `mailto:${user}@eduadvance.uk?subject=${subject}`;
  });
});
