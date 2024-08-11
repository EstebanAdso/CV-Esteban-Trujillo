
// Selecciona el enlace
const link = document.querySelector('#btn-down'); // Cambia el selector según sea necesario


// Función para activar la animación
function triggerAnimation() {
    link.classList.add('link-grow-twice');
    
    // Remueve la clase después de la animación para poder reutilizarla
    setTimeout(() => {
        link.classList.remove('link-grow-twice');
    }, 800); // La duración de la animación es de 0.8s
}

// Ejecutar la animación cada 10 segundos
setInterval(triggerAnimation, 10000);
