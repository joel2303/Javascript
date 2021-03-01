var diasem = 2


/*
    0 = Segunda
    1 = Terça
    2 = Quarta
    3 = Quinta
    4 = Sexta
    5 = Sabado 
    6 = Domingo
*/

    console.log (`Dia: ${diasem}`)
    switch (diasem) {
        case 0:
            console.log ("Hoje é Domingo !")
            break
        case 1:
            console.log ("Hoje é Segunda-feira !")
            break
        case 2:
            console.log ("Hoje é Terça-feira !")
            break
        case 3:
            console.log ("Hoje é Quarta-feira !")
            break
        case 4: 
            console.log ("Hoje é Quinta-feira !")
            break
        case 5:
            console.log ("Hoje é sexta feira !")
            break
        case 6: 
            console.log ("Hoje é Sábado !")
            break
        default: 
            console.log ("Dia invalido.")
            break
    }