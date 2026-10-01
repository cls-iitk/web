const sections = [...document.querySelectorAll("[data-section]")];
const navLinks = [...document.querySelectorAll(".site-nav a[data-page]")];
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const yearNode = document.getElementById("year");

const defaultPage = "home";

function getPageFromHash() {
  const raw = window.location.hash.replace("#", "").trim().toLowerCase();
  return sections.some(section => section.id === raw) ? raw : defaultPage;
}

function showPage(pageId, updateHash = false) {
  const target = document.getElementById(pageId) || document.getElementById(defaultPage);
  const activeId = target.id;

  sections.forEach(section => {
    section.classList.toggle("active-page", section.id === activeId);
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.page === activeId);
    if (link.dataset.page === activeId) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (updateHash && window.location.hash.replace("#", "") !== activeId) {
    history.pushState({ page: activeId }, "", `#${activeId}`);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });

  siteNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showPage(link.dataset.page, true);
  });
});

window.addEventListener("hashchange", () => {
  showPage(getPageFromHash(), false);
});

window.addEventListener("popstate", () => {
  showPage(getPageFromHash(), false);
});

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

showPage(getPageFromHash(), false);
