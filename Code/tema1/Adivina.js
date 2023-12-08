var Adivinaa = Math.trunc(Math.random()*20) + 1;
var intentos=7;
var logrado= 0;


function Adivina(numero,vidas,logrado){
    while(true){
        vidas=vidas-1
        logrado += 1
        var usuario = prompt("Adivina el Numero de 1 al 20 \n\n"+
                            "Para SALIR, preciona Enter...")
        if(usuario == 0){
            break
        }
        else if(vidas == 0){
            alert("has perdido")
            break
        }
        else if(usuario == numero){
            alert("Has ganado al inteto"+logrado)
            break
        }
        else if(usuario < numero){
            alert("El numero es menor, Vuelve e internarlo")
        }
        else if(usuario > numero){
            alert("El numero es mayor, vuelve a intentarlo")
        }
        else if(usuario == usuario){
            alert("Para SALIR, buelve a precionar Enter...")
        }window.close('Salir')
    } window.close('Salir')
}

Adivina(Adivinaa,intentos,logrado)
