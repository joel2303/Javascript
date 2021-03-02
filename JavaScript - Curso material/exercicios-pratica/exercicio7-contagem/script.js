function contar (){
    var inicio = Number (document.getElementById ("inicio").value)
    var fim = Number (document.getElementById ("fim").value)
    var passo = Number (document.getElementById ("passo").value)
    var resul = document.getElementById ("resul")
    var p1 = document.getElementById ("p1")

   
   for (var c = inicio; c <= fim ; c = c + passo) {
        resul.innerHTML += `${c} `
   }

    p1.style.display = "block"
}

function resetar (){
    var resul = document.getElementById ("resul")

    resul.innerHTML = " " 
}