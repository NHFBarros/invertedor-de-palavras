function inverter() {
    var palavra = document.getElementById('palavra').value
    var inversao = palavra.split('').reverse().join('')
    document.getElementById('inversao').innerHTML = inversao
}