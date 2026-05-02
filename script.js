const frases = [
    "Fragrâncias inspiradas na pureza da terra.",
    "Requinte e sofisticação em cada gota.",
    "Sinta a natureza envolver seus sentidos.",
    "A essência que define a sua presença."
];

let indice = 0;
const elementoTexto = document.querySelector('.frase-efeito');

function trocarFrase() {
    // Primeiro, faz a frase sumir (opacidade 0)
    elementoTexto.style.opacity = 0;

    setTimeout(() => {
        // Muda o texto quando estiver invisível
        indice = (indice + 1) % frases.length;
        elementoTexto.innerText = frases[indice];
        
        // Faz a frase aparecer (opacidade 1)
        elementoTexto.style.opacity = 1;
    }, 800); // Espera o tempo da transição sumir para trocar
}

// Troca a frase a cada 4 segundos
setInterval(trocarFrase, 4000);