const elementos = document.querySelectorAll('.animar');

function revelarElementos() {

    const alturaTela = window.innerHeight;

    elementos.forEach(elemento => {

        const topoElemento = elemento.getBoundingClientRect().top;

        if (topoElemento < alturaTela - 100) {
            elemento.classList.add('apareceu');
        }

    });
}

window.addEventListener('scroll', revelarElementos);
window.addEventListener('load', revelarElementos);