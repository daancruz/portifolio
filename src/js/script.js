document.addEventListener("DOMContentLoaded", () => {
    fetch("src/data/projetos.json")
    .then(res => res.json())
    .then(projetos => {
        const section = document.querySelector("#projetos");

        projetos.forEach(projeto => {
            const apresentacao = document.createElement("div")
            apresentacao.className = "row mb-5 position-relative"
            apresentacao.innerHTML = `
                <div class="col-12 col-md-6 mb-5">
                    <p class="fundo top-100px">Projeto</p>
                    <p class="fundo top-300px start-50px">${projeto.title}</p>
                    <h2 class="title display-2">${projeto.title}</h2>
                    <p class="text">${projeto.description}</p>
                    <ul class="list">
                    ${projeto.tecnology.map(tec => (
                        `
                            <li class="item">
                                ${tec.tec}
                            </li>
                        `
                    )).join('')}       
                    </ul>
                </div>
                <div class="col-12 col-md-6 d-flex mb-5">
                    ${projeto.images.map((img) => (
                        `
                            <div class="d-flex align-items-center px-2">
                                <div>
                                    <img class="img-fluid custom-shadow" src="${img.img}" alt="${projeto.title}">
                                </div>
                            </div>
                        `
                    )).join('')}
                </div>

                <div class="rol-12 w-auto mx-auto">
                    <a class="link" href="${projeto.repository}" target="_blank">
                        Ir para o repositório
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
            `
            section.appendChild(apresentacao)
        })
    })
    .catch(error => console.error('Erro ao carregar os dados:', error));
})
