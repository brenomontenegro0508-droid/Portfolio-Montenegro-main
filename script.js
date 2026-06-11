// ======== TEMA LIGHT / DARK =========
const body = document.body;
const themeToggle = document.getElementById("themeToggle");

function setTheme(mode) {
  if (mode === "light") {
    body.classList.add("light");
    themeToggle.textContent = "Light";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light");
    themeToggle.textContent = "Dark";
    localStorage.setItem("theme", "dark");
  }
}

const storedTheme = localStorage.getItem("theme") || "dark";
setTheme(storedTheme);

themeToggle.addEventListener("click", () => {
  const isLight = body.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});

// ======== DESCRIÇÃO DAS LINGUAGENS =========
const langCards = document.querySelectorAll(".lang-card");
const langInfo = document.getElementById("langInfo");

const descriptions = {
  HTML: "HTML é a base da web: define a estrutura e o significado do conteúdo usando tags semânticas.",
  CSS: "CSS cuida da parte visual: cores, espaçamentos, tipografia, layouts com Flexbox e Grid e animações.",
  JS: "JavaScript traz vida ao site: interatividade, lógica, comunicação com APIs e manipulação do DOM.",
  RESP: "Responsividade garante que a interface funcione bem em celulares, tablets e desktops, adaptando o layout."
};

if (langCards && langInfo) {
  langCards.forEach(card => {
    card.addEventListener("click", () => {
      const key = card.dataset.lang;
      langInfo.textContent = descriptions[key] || "Tecnologia selecionada.";
    });
  });
}