//criando lista de objetos
let listaDeUsuarios = [
    {
        nomeCompleto : "Denden da Silva",
        nomeUsuario : "denden",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Gersu da Silva",
        nomeUsuario : "gege",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "José da Silva",
        nomeUsuario : "jose",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Paulo das Couves",
        nomeUsuario : "paulo",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Mary Help",
        nomeUsuario : "mary",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Pedro Silva",
        nomeUsuario : "pedro",
        senhaUsuario : "123456"
    }
];

//guardar a lista de objetos no local-storage
localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

addEventListener("click", (evt) => {
    const inputUser = document.querySelector("#idUser");
    const inputPass = document.querySelector("#idPass");

    //criando o objeto user-logado
    const usuarioLogado = {
        nomeUsuarioLogado : inputUser.value,
        senhaUsuarioLogado : inputPass.value,
    }

    //Criando o objeto usuário-validado
    let usuarioValidado = {};
    
    if(evt.target.id == "btnSubmit"){
        
        try {

            //Recuperar a lista de usuários do localStorage
            let listaDeUsuarios = JSON.parse(localStorage.getItem("listaUser"));

            listaDeUsuarios.forEach((usuario)=> {
                
                if(usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario){
                    usuarioValidado = usuario;
                    throw"Validado";
                }
                
            });
            throw "Não validado";

        } catch (msg) {
            const msgError = document.querySelector("#msgError");
            if(msg == "Validado" ){
                msgError.setAttribute("style", "color:#00ff00;");
                msgError.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} efetuou o login com sucesso!</strong></span>`;
                
                //Adicionando o objeto usuário-validado
                localStorage.setItem("user-validado", JSON.stringify(usuarioValidado));
                
                //redirect espera 3 segundos antes de redirecionar
                setTimeout(function(){
                    window.location.href = "../pages/sucesso.html";
                }, 3000);
            } else{
                msgError.setAttribute("style", "color:#ff0000;");
                msgError.innerHTML = "<span><strong>Usuario ou senha invalidos!</strong></span>";
            }
        }
        
    } else if(evt.target.className == "fa fa-eye" || evt.target.className == "fa fa-eye-slash"){
        //mostrnado senha
        if(inputPass.getAttribute("type") == "password"){
            evt.target.setAttribute("class", "fa fa-eye-slash");
            inputPass.setAttribute("type", "text");
            
        } else {
            //Ocultando a senha
            evt.target.setAttribute("class", "fa fa-eye");
            inputPass.setAttribute("type", "password");          
        }
    }
});