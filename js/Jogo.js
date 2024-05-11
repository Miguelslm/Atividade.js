function NumeroAleatorio() {
    return Math.floor(Math.random() * 11);
}

function jogo() {
    const numeroSorteado = NumeroAleatorio();
    
    while (true) {
        const palpite = parseInt(prompt("Digite um número de 0 a 10:"));
        
        if (palpite === numeroSorteado) {
            alert("Parabéns, você acertou!");
            break; 
        } else {
            alert("Tente novamente!");
        }
    }
}

jogo();