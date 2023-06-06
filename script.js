

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

var video = document.getElementById("video-fondo");
// var reverse = setInterval(function() {
// v.currentTime = v.currentTime - 0.;
// }, 100);
let reverse = false; // una variable para indicar 


//intente hacer que el video se reproduza de forma de forma inversa para q resulte mas fluido

// var video = document.getElementById('video-fondo');
// video.addEventListener("endedd", function() {
//   video.currentTime = 0;
//   video.playbackRate = -1; // Reproducir en sentido inverso
//   video.play();
// });

// video.addEventListener('ended', function() {
//   this.currentTime = this.duration; // Establece el tiempo actual al final del video
//   this.playbackRate = -1; // Reproduce el video en sentido inverso
//   this.play(); // Inicia la reproducción
// }, false);
