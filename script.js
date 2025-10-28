// ======== NOMBRE DE TU TÍA ======== //
const nombreElements = document.querySelectorAll(".nombreTia");
let nombreTia = localStorage.getItem("nombreTia");

if (!nombreTia) {
  nombreTia = prompt("¡Hola! ¿Cómo te llamas?");
  if (nombreTia) {
    localStorage.setItem("nombreTia", nombreTia);
  } else {
    nombreTia = "🌸";
  }
}

// Actualizar todos los elementos
nombreElements.forEach(el => {
  el.textContent = nombreTia;
});

// ======== PALABRAS NUEVAS ======== //
const form = document.getElementById("wordForm");
const input = document.getElementById("newWord");
const list = document.getElementById("wordList");
const mensajeMaxy = document.getElementById("mensajeMaxy");

// Recuperar palabras guardadas
const palabrasGuardadas = JSON.parse(localStorage.getItem("palabras")) || [];
palabrasGuardadas.forEach(p => {
  const pElem = document.createElement("p");
  pElem.textContent = `🍂 ${p}`;
  list.appendChild(pElem);
});

// ======== GUARDAR NUEVA PALABRA Y MOSTRAR MENSAJE ======== //
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita recargar la página

  const palabra = input.value.trim();

  if (palabra !== "") {

    // Crear nuevo párrafo con la palabra
    const nuevaPalabra = document.createElement("p");
    nuevaPalabra.textContent = `🍂 ${palabra}`;
    list.appendChild(nuevaPalabra);

    // Guardar en localStorage
    palabrasGuardadas.push(palabra);
    localStorage.setItem("palabras", JSON.stringify(palabrasGuardadas));

    // Limpiar el campo
    input.value = "";

    // Mostrar mensaje de agradecimiento de Maxy
    mensajeMaxi.innerHTML = `
      <h3>🍃 ¡Gracias ${nombreTia}! Maxy dice:</h3>
      <p>"Esa palabra es maravillosa, ¡ya crece una nueva semillita en tu jardín de inglés!" 🌱</p>
    `;

    // Desaparecer mensaje después de unos segundos
    setTimeout(() => {
      mensajeMaxi.innerHTML = "";
    }, 5500);
  }
});
const tarjetas = document.querySelectorAll('.tarjeta');

tarjetas.forEach(tarjeta => {
  tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('volteada');
  });
});

