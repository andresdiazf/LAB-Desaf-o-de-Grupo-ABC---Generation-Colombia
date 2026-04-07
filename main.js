const letras = [
    {
        letra: "A",
        palabra: "Avion",
        imagen: './assets/img/avion.png'
    },
    {
        letra: "B",
        palabra: "Balon",
        imagen: './assets/img/balon.png'
    },
    {
        letra: "C",
        palabra: "Café",
        imagen: './assets/img/cafe.png'
    },
    {
        letra: "D",
        palabra: "Durazno",
        imagen: './assets/img/durazno.png'
    },
    {
        letra: "E",
        palabra: "Erizo",
        imagen: './assets/img/erizo.png'
    },
    {
        letra: "F",
        palabra: "Foca",
        imagen: './assets/img/foca.png'
    },
    {
        letra: "G",
        palabra: "Galleta",
        imagen: './assets/img/galleta.png'
    },
    {
        letra: "H",
        palabra: "Hipopotamo",
        imagen: './assets/img/hipopotamo.png'
    },
    {
        letra: "I",
        palabra: "Iman",
        imagen: './assets/img/Iman.png'
    },
    {
        letra: "J",
        palabra: "Jabon",
        imagen: './assets/img/jabon.png'
    },
    {
        letra: "K",
        palabra: "Koala",
        imagen: './assets/img/koala.png'
    },
    {
        letra: "L",
        palabra: "Lobo",
        imagen: './assets/img/lobo.png'
    },
    {
        letra: "M",
        palabra: "Manzana",
        imagen: './assets/img/manzana.png'
    },
    {
        letra: "N",
        palabra: "Naranja",
        imagen: './assets/img/naranja.png'
    },
    {
        letra: "Ñ",
        palabra: "Ñandú",
        imagen: './assets/img/nandu.png'
    },
    {
        letra: "O",
        palabra: "Oso",
        imagen: './assets/img/oso.png'
    },
    {
        letra: "P",
        palabra: "Perro",
        imagen: './assets/img/perro.png'
    },
    {
        letra: "Q",
        palabra: "Queso",
        imagen: './assets/img/queso.png'
    },
    {
        letra: "R",
        palabra: "Rana",
        imagen: './assets/img/rana.png'
    },
    {
        letra: "S",
        palabra: "Sol",
        imagen: './assets/img/sol.png'
    },
    {
        letra: "T",
        palabra: "Tigre",
        imagen: './assets/img/tigre.png'
    },
    {
        letra: "U",
        palabra: "Uva",
        imagen: './assets/img/uva.png'
    },
    {
        letra: "V",
        palabra: "Vaca",
        imagen: './assets/img/vaca.png'
    },
    {
        letra: "W",
        palabra: "Waffle",
        imagen: './assets/img/waffle.png'
    },
    {
        letra: "X",
        palabra: "Xilófono",
        imagen: './assets/img/xilofono.png'
    },
    {
        letra: "Y",
        palabra: "Yunque",
        imagen: './assets/img/yunque.png'
    },
    {
        letra: "Z",
        palabra: "Zebra",
        imagen: './assets/img/zebra.png'
    }
    
]

// Seleccionar elementos del DOM
const contador = document.querySelector('.nav__text span');
const tarjetas = document.querySelectorAll('.letters__card');
const botonTodas = document.querySelector('.buttons-container__button:first-child');
const botonVocales = document.querySelector('.buttons-container__button:last-child');

// Set para letras vistas
let letrasVistas = new Set();

// Función para mostrar imagen
function mostrarImagen(tarjeta, letra) {
    const letraObj = letras.find(l => l.letra === letra);
    if (letraObj && letraObj.imagen) {
        tarjeta.style.backgroundImage = `url(${letraObj.imagen})`;
        tarjeta.style.backgroundSize = 'cover';
        tarjeta.style.backgroundPosition = 'center';
        // Ocultar la letra o hacerla blanca
        tarjeta.querySelector('.letters_letter').style.color = 'transparent';
        // Incrementar contador si no vista
        if (!letrasVistas.has(letra)) {
            letrasVistas.add(letra);
            contador.textContent = parseInt(contador.textContent) + 1;
        }
    }
}

// Agregar event listeners a tarjetas
t

// Función para filtrar vocales
function filtrarVocales() {
    const vocales = ['A', 'E', 'I', 'O', 'U'];
    tarjetas.forEach(tarjeta => {
        const letra = tarjeta.querySelector('.letters_letter').textContent;
        if (vocales.includes(letra)) {
            tarjeta.classList.remove('hidden');
        } else {
            tarjeta.classList.add('hidden');
        }
    });
}

function mostrarTodas() {
    tarjetas.forEach(tarjeta => {
        tarjeta.classList.remove('hidden');
    });
}

// Agregar event listeners a botones
botonTodas.addEventListener('click', mostrarTodas);
botonVocales.addEventListener('click', filtrarVocales);