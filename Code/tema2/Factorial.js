// programa para encontrar el factorial de un numero
function factorial(x) {

  // si el numero es igual a 0 este retornara 1
  if (x == 0) {
      return 1;
  }

  // if number is positive
  else {
      return x * factorial(x - 1);
  }
}

while(true){
  // Almacenamos la inf. del usuario en la constante num
  const num = prompt("...Programa para entontrar el factorial de un numero entero... \n\n"+
  "Ingresa solo numeros positivos: \n"+
  "Para SALIR, preciona en CANCELAR...")
  // si la condicion se cumple, este llama a la funcion factorial().
  if (num >= 0) {
    const result = factorial(num);
    console.log(`El Factorial de:\t ${num} Es:\t ${result}`);
  }
  else {
    console.log('El factorial de un numero, solo se puede obtener de numeros positivo.\n'+
    "Por favor ingresa un nuevo numero positivo... ");
  }
  if(num == num){
    window.close('Salir') 
  }
  window.close('Salir')
}

/**
 * Dos funciones para calcular el factorial de un número entero
 *

function factorialRecursivo (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}


console.log ("Calcula el factorial javascript"); 

console.log("El factorial de 5 con bucle: "+ factorial (5));

console.log("El factorial de 5 recursivo: "+ factorialRecursivo (5));


class ListaDoblementeEnlazada {
    constructor() {
      this.cabeza = null;
      this.cola = null;
    }

    factorialRecursivo(n) {
        const nuevoNodo = new Nodo(valor);
    
        if (!this.cabeza) {
          this.cabeza = nuevoNodo;
          this.cola = nuevoNodo;
        } else {
          nuevoNodo.siguiente = this.cabeza;
          this.cabeza.anterior = nuevoNodo;
          this.cabeza = nuevoNodo;
        }
      }

}*/








