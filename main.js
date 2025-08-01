const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 5;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
        geraSenha();
    }
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho() {
    if (tamanhoSenha < 5) {
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
        geraSenha();
    }
    numeroSenha.textContent = tamanhoSenha;
}

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇ';

function geraSenha(){
    let senha =  '';
    for(let i= 0; i < numeroAleatorio; i=++){
let numeroAleatorio = Math.random()*letrasMaiusculas.length;
numeroAleatorio = Math.floor (numeroAleatorio);
senha = senha + letrasMaiusculas[numeroAleatorio];
    console.log(letrasMaiusculas[numeroAleatorio]);

    }
}

campoSenha.value = senha;
