// Selecciona el enlace
const link = document.querySelector('#btn-down');

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
    modal.style.display = 'flex';
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}


abrirModal.addEventListener('click', openModal);
contactoModal.addEventListener('click', openModal);
cerrarModal.addEventListener('click', closeModal);


document.getElementById('copiarTelefono').addEventListener('click', function (event) {
    event.preventDefault();


    const numeroTelefono = this.querySelector('h6').textContent;


    const textarea = document.createElement('textarea');
    textarea.value = numeroTelefono;  // Asigna el valor del teléfono al textarea
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

    alert('Número de teléfono copiado al portapapeles!');
});


const mensajes = [
    "Soy Tecnólogo en Análisis y Desarrollo de Software con experiencia en Java, Spring Boot, bases de datos (MySQL, SQL Server, MongoDB) y desarrollo web. Amante del codigo limpio y crear soluciones innovadoras",
    "Conocimiento en HTML5, CSS3  JavaScript Y NodeJs con experiencia en la creación de páginas web y aplicaciones interactivas.",
    "Tecnólogo en Análisis y Desarrollo de Software por el SENA, con honores, destacado por ser el primer proyecto aprobado por su innovación y dificultad en la creación de un chatbot funcional e inteligente.",
    "Desarrollo en frontend con proyectos completos que incluyen desde páginas web responsivas hasta aplicaciones interactivas utilizando HTML, CSS y JavaScript.",
    "Comprometido con el aprendizaje constante, he completado cursos avanzados en Udemy como Java Master, SQL Server Master, MongoDB Avanzado y JavaScript Moderno para mantenerme a la vanguardia.",
    "Desarrollador backend con experiencia en Java y Spring Boot, creando aplicaciones completas como sistemas de inventarios y facturación con integración de tecnologías modernas.",
    "Desarrollador con experiencia en tecnologías web modernas como HTML5, CSS3 y JavaScript, enfocado en crear soluciones dinámicas y funcionales.",
    "Desarrollador en Java y Spring Boot, con experiencia en la creación de proyectos como sistemas de inventario de productos y facturación POS, enfocados en la eficiencia y escalabilidad.",
    "Habilidades  en bases de datos, tanto relacionales (MySQL, SQL Server) como no relacionales (MongoDB), optimizando consultas y estructuración de datos para aplicaciones de misión crítica.",
    "Familiarizado con el uso de GitHub para control de versiones, realizando seguimientos eficientes de cambios y colaborando en proyectos en equipo.",
    "Con experiencia en la creación y prueba de peticiones HTTP con Postman, asegurando que las API sean funcionales y seguras durante el desarrollo.",
    "Conocimiento profundo de bases de datos no relacionales como MongoDB y relacionales como MySQL y SQL Server, desarrollando soluciones de almacenamiento eficientes y escalables.",
]

const mensajesHome = document.querySelector('#mensajesHome');

function recorrerMensajes() {
    let index = 0; // Inicializamos el índice en 0
  
    // Mostrar el primer mensaje inmediatamente
    mensajesHome.textContent = mensajes[index];
    index++; // Incrementamos el índice
  
    // Usamos setInterval para agregar un mensaje cada 5 segundos
    const interval = setInterval(() => {
      if (index < mensajes.length) {
        // Cambiar el texto de mensajesHome con el siguiente mensaje
        mensajesHome.textContent = mensajes[index];
        index++; // Incrementar el índice para mostrar el siguiente mensaje
      } else {
        index = 0; // Si llegamos al final, reiniciamos el índice a 0
      }
    }, 7000); // 5000ms = 5 segundos
  }
  
  // Llamar a la función para que los mensajes se muestren
  recorrerMensajes();