const body = document.querySelector("body")
const botao = document.querySelector("#cor-botao");
botao.addEventListener("click", function() {
    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random() *255);
    g = Math.round(Math.random() *255);
    b = Math.round(Math.random() *255);

    body.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

});

// const newItem = document.createElement('li')
// list.appendChild(newItem)
// let list = []

const trocar = document.querySelector("#trocar-img");
const voltar = document.querySelector("#voltar");
const lobo = document.querySelector("#lobo");

trocar.addEventListener("click", () =>{
    lobo.setAttribute('src', '/img/lobo2.jpg');
    
});

voltar.addEventListener("click", () =>{
    lobo.setAttribute('src', '/img/logo.png');
    
});

const mostrar = document.querySelector("#mostrar");
const apagar = document.querySelector("#apagar");
const texto = document.querySelector("#texto")

mostrar.addEventListener("click", () => {
    texto.hidden=false;
});
apagar.addEventListener("click", () => {
    texto.hidden=true;
});
