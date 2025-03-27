// let lastScrollY = window.scrollY; // Guardar a posição do scroll

// window.addEventListener("scroll", () => {
//     const textAnimation = document.querySelector(".animation");

//     // Calcular a diferença do scroll (direção)
//     const scrollDelta = window.scrollY - lastScrollY;

//     // Atualizar a posição do texto de fundo com base no movimento
//     let newPosX = parseFloat(textAnimation.style.transform.replace('translateX(', '').replace('px)', '') || 0);

//     // Se a rolagem for para baixo, move para a direita, se for para cima, move para a esquerda
//     newPosX += scrollDelta * 0.5; // Ajuste para o movimento (multiplicador para aumentar o efeito)

//     // Atualiza a transformação do texto
//     textAnimation.style.transform = `translateX(${newPosX}px)`;

//     // Atualiza a posição de referência
//     lastScrollY = window.scrollY;
// });
