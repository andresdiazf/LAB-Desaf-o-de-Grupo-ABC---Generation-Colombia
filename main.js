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
        imagen: './assets/img/luna.png'
    },
    {
        letra: "M",
        palabra: "Medusa",
        imagen: './assets/img/medusa.png'
    },
    {
        letra: "N",
        palabra: "nido",
        imagen: './assets/img/nido.png'
    },
    {
        letra: "Ñ",
        palabra: "Ñandú",
        imagen: './assets/img/nandu.png'
    },
    {
        letra: "O",
        palabra: "Ojo",
        imagen: './assets/img/ojo.png'
    },
    {
        letra: "P",
        palabra: "Panda",
        imagen: './assets/img/panda.png'
    },
    {
        letra: "Q",
        palabra: "Queso",
        imagen: './assets/img/queso.png'
    },
    {
        letra: "R",
        palabra: "Ruby",
        imagen: './assets/img/ruby.png'
    },
    {
        letra: "S",
        palabra: "Sol",
        imagen: './assets/img/sol.png'
    },
    {
        letra: "T",
        palabra: "Tortuga",
        imagen: './assets/img/tortuga.png'
    },
    {
        letra: "U",
        palabra: "Unicornio",
        imagen: './assets/img/unicornio.png'
    },
    {
        letra: "V",
        palabra: "Volcan",
        imagen: './assets/img/volcan.png'
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
        palabra: "Yate",
        imagen: './assets/img/yate.png'
    },
    {
        letra: "Z",
        palabra: "Zorro",
        imagen: './assets/img/zorro.png'
    }

]


let contador = document.getElementById('contador');
const tarjetas = document.querySelectorAll('.letters__card');
const botonTodas = document.querySelector('.buttons-container__button:first-child');
const botonVocales = document.querySelector('.buttons-container__button:last-child');


let letrasVistas = [];

tarjetas.forEach(tarjeta => {
    const letraElement = tarjeta.querySelector('.letters_letter');
    if (!letraElement) return;

    const letraa = letraElement.textContent.trim().toUpperCase();
    const resultado = letras.find(item => item.letra === letraa);

    if (resultado) {
        tarjeta.innerHTML = `
            <div class="card__inner">
                <div class="card__front">
                    <p class="letters_letter">${letraa}</p>
                </div>
                <div class="card__back">
                    <img src="${resultado.imagen}" alt="${resultado.palabra}" class="card__image">
                    <p class="card__word">${resultado.palabra}</p>
                </div>
            </div>
        `;
    }

    tarjeta.addEventListener('click', () => {
        tarjeta.classList.toggle('flipped');

        const cantidad = document.querySelectorAll('.flipped').length;
        contador.textContent = cantidad;

    });

});

function filtrarVocales() {
    const vocales = ['A', 'E', 'I', 'O', 'U'];
    tarjetas.forEach(tarjeta => {
        const frontLetter = tarjeta.querySelector('.card__front .letters_letter');
        if (!frontLetter) return;

        const letra = frontLetter.textContent.trim().toUpperCase();
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