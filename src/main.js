const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".primary-nav a");
const contactForm = document.querySelector(".contact-form");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

navToggle?.addEventListener("click", () => {
  const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isExpanded));
  header?.classList.toggle("nav-visible", !isExpanded);
  document.body.classList.toggle("nav-open", !isExpanded);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    header?.classList.remove("nav-visible");
    document.body.classList.remove("nav-open");
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = contactForm.querySelector("button");
  const originalLabel = button.textContent;

  button.textContent = "Thanks, message noted";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalLabel;
    button.disabled = false;
    contactForm.reset();
  }, 2400);
});

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
