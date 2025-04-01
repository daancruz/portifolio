document.addEventListener("DOMContentLoaded", () => {
    fetch("src/data/projetos.json")
    .then(res => res.json())
    .then(projetos => {
        const section = document.querySelector("#projetos");

        projetos.forEach(projeto => {
            const apresentacao = document.createElement("div")
            apresentacao.className = "row mb-5"
            apresentacao.innerHTML = `
                <div class="col-12 col-md-6">
                    <h2 class="title display-1">${projeto.title}</h2>
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
                <div class="col-12 col-md-6 d-flex">
                    ${projeto.images.map((img) => (
                        `
                            <div class="col-4 px-2">
                                <div>
                                    <img class="img-fluid" src="${img.img}" alt="">
                                </div>
                            </div>
                        `
                    )).join('')}
                </div>
            `
            section.appendChild(apresentacao)
        })
    })
    .catch(error => console.error('Erro ao carregar os dados:', error));
})
