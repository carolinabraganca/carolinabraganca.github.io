const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('menu');
const links = menu.querySelectorAll('a');

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', false);
  });
});

// Destaca no menu a seção visível
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-40% 0px -55% 0px' });

document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));

document.getElementById('ano').textContent = new Date().getFullYear();
