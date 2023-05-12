function insereNumeroNoVisor(botao,visor) {
    visor.value += botao.value;
}

const resultadoDasOperacoes = (visor) =>{
    //Utilizar a função eval como para processar uma string como se fosse uma expressão matemática.
    visor.value = eval(visor.value);
}
