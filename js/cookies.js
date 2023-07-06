// Obtener el modal
let modal = document.getElementById("myModal");

// Obtener el botón para cerrar el modal
let closeBtn = document.getElementsByClassName("close")[0];

// Obtener el botón para aceptar las cookies
let acceptBtn = document.getElementById("acceptBtn");

// Mostrar el modal cuando se carga la página
window.onload = function() {
    modal.style.display = "block";
}

// Cerrar el modal al hacer clic en la "X"
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal y almacenar la aceptación de cookies al hacer clic en el botón "Aceptar"
acceptBtn.onclick = function() {
    modal.style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
    // Aquí puedes agregar tu código adicional después de que se haya aceptado las cookies
    // Por ejemplo, puedes llamar a una función que realice acciones específicas relacionadas con las cookies aceptadas
    realizarAccionesCookiesAceptadas();
}

// Verificar si el usuario ha aceptado las cookies
if (localStorage.getItem("cookiesAccepted") === "true") {
    // El usuario ha aceptado las cookies, realizar acciones necesarias
    realizarAccionesCookiesAceptadas();
} else {
    // Mostrar el modal de cookies ya que el usuario no ha aceptado todavía
    modal.style.display = "block";
}

// Función para realizar acciones relacionadas con las cookies aceptadas
function realizarAccionesCookiesAceptadas() {
    // Ejemplo 1: Cargar contenido personalizado
    mostrarContenidoPersonalizado();

    // Ejemplo 2: Iniciar servicios de seguimiento
    iniciarServiciosSeguimiento();

    // Ejemplo 3: Mostrar un mensaje de confirmación
    mostrarMensajeConfirmacion();
}

// Ejemplo de función para mostrar contenido personalizado
function mostrarContenidoPersonalizado() {
    // Aquí puedes agregar tu código para cargar contenido personalizado
    // Puedes utilizar el valor de las cookies aceptadas para mostrar contenido adaptado a las preferencias del usuario
}

// Ejemplo de función para iniciar servicios de seguimiento
function iniciarServiciosSeguimiento() {
    // Aquí puedes agregar tu código para iniciar servicios de seguimiento, como Google Analytics u otras herramientas de análisis
    // Utiliza las cookies aceptadas para recopilar datos y realizar un seguimiento del comportamiento de los usuarios en el sitio web
}

// Ejemplo de función para mostrar un mensaje de confirmación
function mostrarMensajeConfirmacion() {
    // Aquí puedes agregar tu código para mostrar un mensaje de confirmación o agradecimiento al usuario por aceptar las cookies
}


