function verificar(){
    var n1 = Number (document.getElementById("tabu").value)
    var resul = document.getElementById ("resul")
    var para1 = document.getElementById ("para1")
    for (c = 1; c <= 10 ; c++) {
    var res = Number (c*n1)
    resul.innerHTML += ` ${n1} x ${c} = ${res}<br>`
    }
    para1.style.display = "block"
    document.querySelector("input#botton2").disabled = true;
    document.querySelector("input#botton1").disabled = false;
    para2.style.display = "block"
    resul.style.display = "block"

}

// Resetar / Limpar o resultado

function resetar () {
    resul.innerHTML = ""
    para1.style.display = "none"
    document.querySelector("input#botton2").disabled = false;
    para2.style.display = "none"
    resul.style.display = "none"
}