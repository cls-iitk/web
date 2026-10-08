const nav = document.getElementById('site-nav');
const toggle = document.querySelector('.nav-toggle');
const links = [...document.querySelectorAll('.site-nav a[data-target]')];

function closeMenu() {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}

function setActive(id) {
  links.forEach(link => {
    const active = link.dataset.target === id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

links.forEach(link => {
  link.addEventListener('click', () => {
    setActive(link.dataset.target);
    closeMenu();
  });
});

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

const sectionIds = ['home', 'vision', 'mission', 'affiliates', 'contact'];
const sectionTargets = ['home', 'vision', 'mission', 'address', 'affiliates', 'contact'];
const observed = sectionTargets
  .map(id => document.getElementById(id))
  .filter(Boolean);

const observer = new IntersectionObserver(entries => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const id = visible.target.id;
  if (id === 'address') setActive('mission');
  else if (sectionIds.includes(id)) setActive(id);
}, { rootMargin: '-18% 0px -68% 0px', threshold: [0.15, 0.35, 0.6] });

observed.forEach(section => observer.observe(section));

const hash = location.hash.replace('#', '');
setActive(sectionIds.includes(hash) ? hash : 'home');
