function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var msg2= document.getElementById("msg2")
    var data = new Date ()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são: ${hora} Horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12){
        // BOM DIA
        img.src = "images/manha.jpg"
        document.body.style.background = "#e2cd9f"
        msg2.innerHTML= ("Bom dia !")
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = "images/tarde.jpg"
        document.body.style.background = "#b9846f"
        msg2.innerHTML= ("Boa tarde !")
    } else {
        // BOA NOITE
        img.src = "images/noite.jpg"
        document.body.style.background = "#515154"
        msg2.innerHTML= ("Boa noite !")
    }
}
