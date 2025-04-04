window.revelar = ScrollReveal({ reset:true });

function aplicarAnimacao(classe, duracao, distancia, origem) {
    revelar.reveal(classe, {
        duration: duracao,
        distance: distancia,
        origin: origem,
    });
}
