/* <button id="meu-btn">Click</button> */

// const btn = document.getElementById("meu-btn");

// // atrelando um evento ao elemento
// btn.addEventListener("click", function(){

//     //função matemática math
//     //math.random = retorna numeros aleatórios entre 0 e 1
//     //math.floor = função de arredondamento para baixo
//     //math.ceil = função de arredondamento para cima
//     //math.round = função de arredondamento aleatório

//     let r = 0;
//     let g = 0;
//     let b = 0;

//     r = Math.round(Math.random() *255);
//     g = Math.round(Math.random() *255);
//     b = Math.round(Math.random() *255);

//     // this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
//     this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

// });

// const tits = document.querySelector(".tit-sec");
// tits.addEventListener("click", () => {
//     tits.setAttribute("style","font-size:30px");
// } );

// ARRAYS E SEUS METODOS
// let frutas = ["banana", "maça", "pêra", "uva", "melancia", "ameixa", "morango", "goibaba"];
// //console.log(frutas.length);
// //adicionando um item ao final do array com o metodo push(itemNome);
// frutas.push("fruta-conde");
// //adicionando um item no inicio do array com o metodo unshift(itemNome);
// frutas.unshift("jabuticava")
// //remover um item do final do array com metodo pop();
// frutas.pop()
// //remover um item do final do array com metodo pop();
// frutas.shift()
// console.log(frutas)

// //localizando um item com o metodo indexOf(itemNome);
// //obs: O indexOf(itemNome) vai retornar o indice onde se encontra o item buscado.
// // let indice = frutas.indexOf("morango")
// // console.log(indice)
// // console.log(frutas[indice])

// //removendo um indice uma quantidade determinada de vezes utilizando o meotodo splice.
// //splice(indice do item, quantidade de vezes a ser removido);
// //Obs: para obter o indice utilize o método indexOf(itemNome)
// let indice = frutas.indexOf("ameixa")
// console.log(indice)
// console.log(`fruta que estava no indice antes da remoção: ${frutas[indice]}`);
// //Aplicando o splice e usando indice obtido com indexOf
// frutas.splice(indice,1);
// console.log(`fruta que ficou no indice depois da remoção: ${frutas[indice]}`);

// //percorrer o Array utilizando o forEach
// frutas.forEach( (fruta)=> {
//     console.log(`Olha ela: ${fruta}`)
// });

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
//concatenando array
let nr3 = [nr1,nr2]
//percorrendo o novo array com forEach
nr3.forEach((nr) =>{
    console.log(`Item do novo array: ${nr3}`);
});

//concatenando o array com o operador spread(...)
nr3 = [...nr1,...nr2];
console.log(`novo array com spread: ${nr3}`)
//percorrendo o novo array com forEach
nr3.forEach((nr) =>{
    console.log(`Item do novo array: ${nr}`);
});