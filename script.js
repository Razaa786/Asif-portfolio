// Mobile nav toggle
const navToggleButton = document.getElementById('navToggle');
const primaryNavList = document.getElementById('primaryNav');
if (navToggleButton && primaryNavList) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = primaryNavList.classList.toggle('is-open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth close menu after click on small screens
primaryNavList?.querySelectorAll('a').forEach((anchor) => {
  anchor.addEventListener('click', () => {
    if (window.innerWidth <= 720) {
      primaryNavList.classList.remove('is-open');
      navToggleButton.setAttribute('aria-expanded', 'false');
    }
  });
});

// Intersection Observer for reveal animations
const revealElements = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((el) => io.observe(el));

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Contact form (demo only)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();

  if (!name || !email || !message) {
    statusEl.textContent = 'Please fill out all fields.';
    statusEl.style.color = '#f87171';
    return;
  }

  statusEl.textContent = 'Thanks! Your message has been queued.';
  statusEl.style.color = '';
  form.reset();
});


