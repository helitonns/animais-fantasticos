import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
    //Cria a div contendo informacoes com o total de animais
    function createAnimal(animal) {
        const div = document.createElement("div");
        div.classList.add("numero-animal");
        div.innerHTML = `<h2>${animal.specie}</h2><span data-numero>${animal.total}</span>`;
        return div;
    }

    function animaAnimaisNumeros() {
        const animaNumeros = new AnimaNumeros(
            "[data-numero]",
            ".numeros",
            "ativo"
        );
        animaNumeros.init();
    }

    //Puxa os animais atraves de um arquivo json
    //e cria cada animal utilizando createAnimal
    async function criarAnimais() {
        const animaisResponse = await fetch(url);
        const animaisJson = await animaisResponse.json();
        const numerosGrid = document.querySelector(target);

        animaisJson.forEach((animal) => {
            const divAnimal = createAnimal(animal);
            numerosGrid.appendChild(divAnimal);
        });

        animaAnimaisNumeros();
    }

    return criarAnimais();
}
