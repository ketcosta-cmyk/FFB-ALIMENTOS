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

const menuMobile = document.getElementById("menuMobile");
const menu = document.querySelector(".menu");

menuMobile.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});
document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
    });

});