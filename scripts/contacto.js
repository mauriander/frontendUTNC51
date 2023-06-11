var vhf = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
var screenHeight = window.screen.height;
// Menú wrapper
// var menuWrapper = document.getElementById("menuWrapper");
// var menuToggle = document.getElementById("menuToggle");
// var wrapperMenu = document.getElementById("wrapperMenu");
// var menu = document.getElementById("menu");
// function toggleMenu() {
//   wrapperMenu.classList.toggle("open");
// }

// function checkWindowSize() {
//   if (window.innerWidth < 1200) {
//     menuWrapper.style.display = "block";
//     menu.style.display = "none";
//   } else {
//     menu.style.display = "block";
//     menuWrapper.style.display = "none";
//     //wrapperMenu.classList.remove("open");
//   }
// }

// menuToggle.addEventListener("click", toggleMenu);
// window.addEventListener("resize", checkWindowSize);

// // Verificar el tamaño de la ventana al cargar la página
// checkWindowSize();

// VALIDACION DE FORMULARIO DE CONTACTO
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var messageError = document.getElementById("message-error");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (nameInput.value.trim() === "") {
      event.preventDefault();
      nameError.textContent = "Por favor, introduce tu nombre.";
    }

    if (emailInput.value.trim() === "") {
      event.preventDefault();
      emailError.textContent = "Por favor, introduce tu email.";
    } else if (!isValidEmail(emailInput.value.trim())) {
      event.preventDefault();
      emailError.textContent = "Por favor, introduce un email válido.";
    }

    if (messageInput.value.trim() === "") {
      event.preventDefault();
      messageError.textContent = "Por favor, introduce un mensaje.";
    }
  });

function isValidEmail(email) {
  var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}
