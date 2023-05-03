/* <button id="meu-btn">Click</button> */

const btn = document.getElementById("meu-btn");

// atrelando um evento ao elemento
btn.addEventListener("click", function(){

    //função matemática math
    //math.random = retorna numeros aleatórios entre 0 e 1
    //math.floor = função de arredondamento para baixo
    //math.ceil = função de arredondamento para cima
    //math.round = função de arredondamento aleatório

    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random() *255);
    g = Math.round(Math.random() *255);
    b = Math.round(Math.random() *255);

    // this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

});