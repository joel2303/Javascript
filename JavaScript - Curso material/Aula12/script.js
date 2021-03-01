function abrir() {
    var opcao = Number (document.getElementById("opcao").value)
    var resul1 = document.getElementById("resul1")
    var resul2 = document.getElementById("resul2")
    var img = document.getElementById("img") 
    switch (opcao) {
        case 0:
            resul1.innerHTML = ("Abrindo Netflix ...")
            img.src = "images/netflix-logo.png"
            img.style.display = "flex";
            break
        case 1:
            resul1.innerHTML = ("Abrindo Prime video ...")
            img.src = "images/prime-logo.jpg"
            img.style.display = "flex";
            break
        case 2:
            resul1.innerHTML = ("Abrindo HBO Plus ...")
            img.src = "images/hbo-logo.jpg"
            img.style.display = "flex";
            break
        case 3:
            resul1.innerHTML = ("Abrindo Disney Plus ...")
            img.src = "images/disney-logo.jpg"
            img.style.display = "flex";
            break
        case 4: 
            resul1.innerHTML = ("Abrindo o Youtube ...")
            img.src = "images/youtube-logo.jpg"
            img.style.display = "flex";
            break
        case 5:
            resul1.innerHTML = ("Abrindo a Twitch TV ...")
            img.src = "images/twitch-logo.jpg"
            img.style.display = "flex";
            break
        default: 
            resul1.innerHTML = ("Por favor, digite uma opção válida.")
            img.style.display = "none";
            break
    }
}

