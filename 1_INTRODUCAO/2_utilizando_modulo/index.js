const fs = require('fs')

fs.readFile('frase.txt', 'utf-8', (erro, dados) =>{ 
    if(erro) {
        console.log(erro)
        return
    }

    console.log(dados)
})