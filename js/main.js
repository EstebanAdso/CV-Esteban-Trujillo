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


const modal = document.querySelector('.dialog');
const abrirModal = document.querySelector('#abrirContacto');
const cerrarModal = document.querySelector('#cerrar');
const contactoModal = document.querySelector('.contacto-abrir-modal');

// Función para abrir el modal
function openModal() {
    modal.style.display = 'flex'; // Cambiar a 'flex' para centrar contenido con CSS
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Eventos para abrir y cerrar el modal
abrirModal.addEventListener('click', openModal);
contactoModal.addEventListener('click', openModal);
cerrarModal.addEventListener('click', closeModal);
