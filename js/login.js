//Gerando um token com Math.
let tokenGerado = Math.random().toString(16).substring(2);

//declarando objetos
const usuario1 = {
    nomeUsuario : "denden",
    senhaUsuario : "12345",
    gravaDados : true,
    token : tokenGerado
};

let novoNomePropripriedade = "tokenzinho";
usuario1[novoNomePropripriedade] = 12;
//console.log(usuario1.tokenzinho);


let tokenGerado2 = Math.random().toString(16).substring(2);

const usuario2 = {
    nomeUsuario : "gege",
    senhaUsuario : "12345",
    gravaDados : true,
    token : tokenGerado
};

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);


addEventListener("click", (evt) => {
    
    if(evt.target.id == "btnSubmit"){
        const inputUser = document.querySelector("#idUser");
        const inputPass = document.querySelector("#idPass");
        
        try {
            listaDeUsuarios.forEach((usuario)=> {
                
                if(inputUser.value == usuario.nomeUsuario && inputPass.value == usuario.senhaUsuario){
                    throw"Validado";
                }
                
            });
            throw "Não validado";

        } catch (msg) {
            const msgError = document.querySelector("#msgError");
            if(msg == "Validado" ){
                msgError.setAttribute("style", "color:#00ff00;");
                msgError.innerHTML = "<span><strong>Login efetuado com sucesso!</strong></span>";
            } else{
                msgError.setAttribute("style", "color:#ff0000;");
                msgError.innerHTML = "<span><strong>Usuario ou senha invalidos!</strong></span>";

            }
        }
        

    }
});