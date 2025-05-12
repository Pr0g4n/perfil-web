// Mostrar un mensaje de bienvenida al cargar la página
window.onload = function () {
    alert("¡Bienvenido al perfil profesional de Erick Mamani!");
};

// Agregar un evento al hacer clic en el nombre del perfil
document.addEventListener("DOMContentLoaded", function () {
    const headerName = document.querySelector("header h1");
    if (headerName) {
        headerName.addEventListener("click", function () {
            alert("¡Gracias por visitar el perfil de Erick Mamani!");
        });
    }
});