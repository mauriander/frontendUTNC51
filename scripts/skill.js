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

// Js SKILLS
// Ejemplo de JavaScript de la lista
// Seleccionar todos los elementos <li> de la lista
let items = document.querySelectorAll("li");

// Recorrer cada elemento
for (let item of items) {
  // Añadir un evento de tipo click al elemento
  item.addEventListener("click", function () {
    // Alternar entre añadir y quitar una clase de CSS al detalle naranja
    item.querySelector("div").classList.toggle("active");

    // La clase active cambia el color del fondo a rojo y el tamaño a más grande

    // La clase active cambia el color del fondo a rojo y el tamaño a más grande
  });
}

// Js SKILLS
// Ejemplo de JavaScript de la lista
// Seleccionar todos los elementos <li> de la lista

let progress = 50;
let startX = 0;
let active = 0;
let isDown = false;

/*--------------------
Contants
--------------------*/
const speedWheel = 0.02;
const speedDrag = -0.1;

//getZindex me devuelve los índices de z-index de los elementos adentro un arreglo
const getZindex = (array, index) =>
  array.map((_, i) =>
    index === i ? array.length : array.length - Math.abs(index - i)
  );

const $items = document.querySelectorAll(".carousel-item");
const $cursors = document.querySelectorAll(".cursor");
// displayItems le asignamos propiedas de css.
//--zIndex y --active, lo vamos a usar para el orden y la posición de los elementos.
const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index];
  item.style.setProperty("--zIndex", zIndex);
  item.style.setProperty("--active", (index - active) / $items.length);
};

//animate se encarga de hacer fluido el carrusel y actualizarse y llamamos a display par aasignarles las propiedas
const animate = () => {
  progress = Math.max(0, Math.min(progress, 100));
  active = Math.floor((progress / 100) * ($items.length - 1));

  $items.forEach((item, index) => displayItems(item, index, active));
};
animate();

//$items lo usamos para actualizar el progreso cuando se hace clic en un elemento en particular.
//entondces recorremos cada elemento y evaluamos el progreso
$items.forEach((item, i) => {
  item.addEventListener("click", () => {
    progress = (i / $items.length) * 100 + 10;
    animate();
  });
});

//handleMouseDown y handleMouseUp se activan cuando se presiona y suelta el botón del mousse isDown pasa a true o false para saber si se hace click
//tuve que que agregar handlewhell para que funcione
const handleWheel = (e) => {
  const wheelProgress = e.deltaY * speedWheel;
  progress = progress + wheelProgress;
  animate();
};

const handleMouseMove = (e) => {
  if (e.type === "mousemove") {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  }
  if (!isDown) return;
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  const mouseProgress = (x - startX) * speedDrag;
  progress = progress + mouseProgress;
  startX = x;
  animate();
};

const handleMouseDown = (e) => {
  isDown = true;
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
};

const handleMouseUp = () => {
  isDown = false;
};


document.addEventListener("mousewheel", handleWheel);
document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);
document.addEventListener("touchstart", handleMouseDown);
document.addEventListener("touchmove", handleMouseMove);
document.addEventListener("touchend", handleMouseUp);
