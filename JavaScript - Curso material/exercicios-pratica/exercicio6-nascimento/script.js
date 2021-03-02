function verificar () {

    var data = new Date()
    var ano = data.getFullYear()
    var nasci = document.getElementById ("nasci")
    var resul = document.getElementById ("resul")
    
    if (nasci.value.length == 0 || nasci.value > ano || nasci.value == "0") {
        window.alert("[ERROR] Verifique os dados e tente novamente!")
    } else {
        var sexo = document.querySelectorAll("input[type='radio']")
        var idade = ano - Number (nasci.value)
        var img = document.createElement ("img")
        img.setAttribute ("id", "foto")
        if (sexo[0].checked){
            if (idade >= 0 && idade <15){
                // CRIANÇA
                img.setAttribute("src","imagens/crianca-masc.png")
                resul.innerHTML = `Detectamos uma Criança com ${idade} anos.`
            } else if (idade < 21) {
                // ADOLESCENTE
                img.setAttribute("src","imagens/adolescente-masc.jpg")
                resul.innerHTML = `Detectamos um Adolescente com ${idade} anos.`
            } else if (idade < 60) {
                // ADULTO
                img.setAttribute("src","imagens/homem-adulto.jpg")
                resul.innerHTML = `Detectamos um Homem com ${idade} anos.`
            } else if (idade < 110) {
                // IDOSO
                img.setAttribute("src","imagens/idoso.jpg")
                resul.innerHTML = `Detectamos um Idoso com ${idade} anos.`
            } else {
                // MUMIA
                img.setAttribute("src","imagens/mumia.jpg")
                 resul.innerHTML = `Detectamos uma Múmia com ${idade} anos.!`
            }
        } else {
            if (idade >= 0 && idade <15){
                // CRIANÇA
                img.setAttribute("src","imagens/crianca-femi.png")
                resul.innerHTML = `Detectamos uma Criança com ${idade} anos.`
            } else if (idade < 21) {
                // ADOLESCENTE
                img.setAttribute("src","imagens/adolescente-femi.jpg")
                resul.innerHTML = `Detectamos uma Adolescente com ${idade} anos.`
            } else if (idade < 60) {
                // ADULTO
                img.setAttribute("src","imagens/mulher-adulto.jpg")
                resul.innerHTML = `Detectamos uma Mulher com ${idade} anos.`
            } else if (idade < 110) {
                // IDOSA
                img.setAttribute("src","imagens/idosa.jpg")
                resul.innerHTML = `Detectamos uma Idosa com ${idade} anos.`
            } else {
                // MUMIA
                img.setAttribute("src","imagens/mumia.jpg")
                resul.innerHTML = `Detectamos uma Múmia com ${idade} anos.!`
            }
        }
        resul.style.textAlign = "center"
        resul.appendChild(img)
        
    }
}