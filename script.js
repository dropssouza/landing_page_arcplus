const toggleBtn = document.querySelector(".menu_toggle");
const menu = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os <a> com atributo data-target
  const links = document.querySelectorAll("a[data-target]");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Evita comportamento padrão

      const targetClass = this.getAttribute("data-target");
      const targetElement = document.querySelector(`.${targetClass}`);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

const elements = document.querySelectorAll(".from_left, .from_right");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Optional: unobserve after it appears
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2, // Começa o efeito quando 20% do elemento estiver visível
  }
);

elements.forEach((el) => observer.observe(el));
