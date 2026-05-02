const frases = [
    "Fragrâncias inspiradas na pureza da terra.",
    "Requinte e sofisticação em cada gota.",
    "Sinta a natureza envolver seus sentidos.",
    "A essência que define a sua presença."
];

let indice = 0;
let intervalo; 
const elementoTexto = document.querySelector('.frase-efeito');

function trocarFrase() {
    elementoTexto.style.opacity = 0;
    setTimeout(() => {
        indice = (indice + 1) % frases.length;
        elementoTexto.innerText = frases[indice];
        elementoTexto.style.opacity = 1;
    }, 800);
}

function iniciarCarrossel() {
    intervalo = setInterval(trocarFrase, 4000);
}

function pararCarrossel() {
    clearInterval(intervalo);
    elementoTexto.style.color = "var(--dourado-luxo)"; 
    elementoTexto.style.cursor = "default";
}

function retomarCarrossel() {
    iniciarCarrossel();
    elementoTexto.style.color = "var(--verde-musgo)"; 
}

// Eventos de Mouse
elementoTexto.addEventListener('mouseover', pararCarrossel);
elementoTexto.addEventListener('mouseout', retomarCarrossel);

// Inicialização
iniciarCarrossel();