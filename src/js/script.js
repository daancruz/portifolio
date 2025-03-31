// document.addEventListener("DOMContentLoaded", () => {
//     fetch("src/data/projetos.json")
//     .then(res => res.json())
//     .then(projetos => {
//         const section = document.querySelector(".projetos");

//         projetos.forEach(projeto => {
//             const apresentacao = document.createElement("div")
//             apresentacao.className = ""
//             apresentacao.innerHTML = `
//                 <p class="projetos__animation fundo1  position-absolute">PROJETO</p>
//                 <p class="projetos__animation fundo2  position-absolute">${projeto.title}</p>
//                 <div class="col-12 col-md-6 text-center text-md-start px-5 px-md-5 d-flex flex-column gap-2">
//                     <h2 class="title projetos-title-animation  mb-5 mb-md-0 mb-md-5">${projeto.title}</h2>
//                     <p class="projetos-text-animation  text text-center text-md-start">${projeto.description}</p>
//                     <p class="projetos-text-animation  text text-center text-md-start">No modelo foram
//                         utilizados
//                         os seguintes recursos:</p>
//                     <ul class="projetos-list-animation  list text-start d-flex flex-column gap-1 gap-md-2">
//                         ${projeto.tecnology.map(tec => `
//                             <li class="item">
//                                 <i class="bi bi-caret-right-fill"></i>
//                                 ${tec.tec}
//                             </li>
//                         `).join('')}
//                     </ul>
//                 </div>
//                 <div class="image col-12 col-md-6 text-center d-flex gap-0 px-0 px-md-5 gap-md-4 justify-content-center">
//                     ${projeto.images.map(img => `
//                         <div class="col-4 col-md-3 d-flex flex-column justify-content-center">
//                             <img class="image-animation1 " src="${img.img}" alt="${projeto.title}">
//                         </div>
//                     `).join('')}
//                 </div>  
//             `
//             section.appendChild(apresentacao)
//         })
//     })
//     .catch(error => console.error('Erro ao carregar os dados:', error));
// })
