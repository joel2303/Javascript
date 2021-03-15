function contar (){
    var inicio = document.getElementById ("inicio")
    var passo = document.getElementById ("passo")
    var fim = document.getElementById ("fim")
    var resul2 = document.getElementById ("resul2")
    var resul = document.getElementById ("resul")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resul2.innerHTML = "Por favor,<br><br> preencha todos <br><br>os dados corretamente!"
        resul.innerHTML = "Impossivel contar."
    } else {
        resul2.innerHTML = "Tudo correto,<br><br> o resultado irá aparecer abaixo!"
        resul.innerHTML = "Contando: <br><br> "

        var i = Number (inicio.value)
        var f = Number (fim.value)
        var p = Number (passo.value)
        if (p <= 0){
            alert("Passo invalido ! considerando PASSO 1")
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for (var c = i ; c <= f ; c = c + p) {
            resul.innerHTML += `${c} \u{2763} `
            }

        } else {
            // Contagem regressiva
            for (var c = i ; c >= f ; c = c - p){
            resul.innerHTML += `${c} \u{2763} `
            }
        }
    resul.innerHTML += `\u{1F3C1}`
    }
        
    }

function resetar1(){
    var resul2 = document.getElementById ("resul2")
    var resul = document.getElementById ("resul")

    resul2.innerHTML = "Preencha os <br><br> dados ao lado <br><br> para dar inicio <br><br> a contagem !"
    resul.innerHTML = "Preparando contagem ..."

}