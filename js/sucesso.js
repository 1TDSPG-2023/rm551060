const elementoDeBoasVindas = document.querySelector("#welcome");

//recuperar objeto usuário-validado do local-storage
const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

elementoDeBoasVindas.innerHTML = `<span><strong>Bem vindo: ${usuarioValidado.nomeCompleto}</span></strong>`
