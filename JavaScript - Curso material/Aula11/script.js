function verificar (){
    var nome1 = document.getElementById("nome").value
    var nasci = document.getElementById("nasci").value
    var serie = document.getElementById("serie").value
    var nota1 = Number (document.getElementById("nota1").value)
    var nota2 = Number (document.getElementById("nota2").value)
    var nota3 = Number (document.getElementById("nota3").value)
    var nota4 = Number (document.getElementById("nota4").value)
    var resul2 = document.getElementById("resul2")
    var resul3 = document.getElementById("resul3")

    document.querySelector("input#botao").disabled = true;

    var media = (nota1 + nota2 + nota3 + nota4) / 4

    resul2.innerHTML += `<p>Data de nascimento:</big> ${nasci}</p>`
    resul2.innerHTML += `<p>Série do aluno:</big> ${serie}</p>`
    resul2.innerHTML += "<strong><big>NOTAS:</big> </strong>"
    resul2.innerHTML += `<p>Nota 1: <strong>${nota1}</big></strong></p>`
    resul2.innerHTML += `<p>Nota 2: <strong>${nota2}</big></strong></p>`
    resul2.innerHTML += `<p>Nota 3: <strong>${nota3}</big></strong></p>`
    resul2.innerHTML += `<p>Nota 4: <strong>${nota4}</big></strong></p>`
    resul3.innerHTML += `Média final : ${media.toFixed(1)}<br>`
        if (media >= 7){
            resul3.style.color = "green"
            resul3.innerHTML += "Aprovado"
        } else {
                if (media < 7) {
                    resul3.style.color = "red"
                    resul3.innerHTML += "Reprovado"
                 }
        }
        
}

function resetar () {
    resul2.innerHTML = ""
    resul3.innerHTML = ""
    document.querySelector("input#botao").disabled = false;
}