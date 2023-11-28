// const menu = document.querySelector(".menu");

// menu.classList.add("ativo", "azul");
// console.log(menu.classList);

// menu.classList.remove("azul");
// console.log(menu.classList);

// menu.classList.toggle("azul");
// console.log(menu.classList);

// const animais = document.querySelector(".animais");
// console.log(animais.attributes);

// const img = document.querySelector("img");
// console.log(img.getAttribute("src") + "  -  " + img.getAttribute("alt"));

// img.setAttribute("descricao", "foto de raposa");
// console.log(img.getAttribute("descricao"));

// const section = document.querySelector(".animais");
// console.log(section.clientHeight);
// console.log(section.clientWidth);

const h2 = document.querySelector("h2");
const rect = h2.getBoundingClientRect();
console.log(rect.x);
console.log(rect.y);

console.log(window.innerWidth);
