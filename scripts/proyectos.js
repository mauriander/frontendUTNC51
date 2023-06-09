
var vhf = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
// Menú wrapper
var menuWrapper = document.getElementById("menuWrapper");
var menuToggle = document.getElementById("menuToggle");
var wrapperMenu = document.getElementById("wrapperMenu");
var menu = document.getElementById("menu");
function toggleMenu() {
  wrapperMenu.classList.toggle("open");
}

function checkWindowSize() {
  if (window.innerWidth < 1300) {
    menuWrapper.style.display = "block";
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
    menuWrapper.style.display = "none";
    //wrapperMenu.classList.remove("open");
  }
}

menuToggle.addEventListener("click", toggleMenu);
window.addEventListener("resize", checkWindowSize);

// Verificar el tamaño de la ventana al cargar la página
checkWindowSize();
// JS
const card = document.querySelector(".card");
const cardImage = document.querySelector(".card-image");
const cardContent = document.querySelector(".card-content");

card.addEventListener("mouseenter", () => {
  cardImage.style.transform = "skewY(0deg) translateY(0%)";
  cardContent.style.transform = "skewY(0deg) translateY(0%)";
});

card.addEventListener("mouseleave", () => {
  cardImage.style.transform = "skewY(-10deg) translateY(-20%)";
  cardContent.style.transform = "skewY(-10deg) translateY(-20%)";
});
