class Stack {
  constructor() {
    this.data = []
  }

  // Agrega un elemento a la parte superior de la pila
  push(_data) {
    this.data.push(_data)
  }

    // Busca el elemento superior de la pila sin quitarlo.
    peek() {
      if (this.isEmpty()) {
        return "La pila esta vacia"
      }
      return this.data[this.data.length - 1]
    }

  // Retira y devuelve el elemento superior de la pila.
  pop() {
    if (this.isEmpty()) {
      return "La pila esta vacia"
    }
    return this.data.pop()
  }

  // Compruebe si la pila esta vacia
  isEmpty() {
    return this.data.length === 0
  }

  // Devuelve el numero de elementos en la pila.
  size() {
    return this.data.length
  }

  // Elimina todos los elementos de la pila.
  clear() {
    return this.data.push = []
  }

  // Muestra los elementos de la pila.
  print() {
    let element = "null\n->\n"
    element += this.data.reverse().join('\n -> \n') 
    alert(element)
  }
}

// Define el menu
function menu() {
  const pila = new Stack()

  while (true) {
    const opcion = prompt(
      "Selecciona una opcion:\n" +
      "1. Insertar elemento en la cima de la pila\n" +
      "2. Buscar  elemento de la cima de la pila\n" +
      "3. Eliminar  elemento de la cima de la pila\n" +
      "4. Comprabar si la pila esta vacia\n" +
      "5. Mostrar el numero de elemetos de pila\n" +
      "6. Eliminar todos los elemetos de pila\n" +
      "7. Mostrar elementos de la pila\n"+
      "8. Salir"
    )

    switch (opcion) {
      case "1":
        const data = prompt("Ingresa el dato a registrar en la pila:")
        pila.push(data)
        menu()
        break
      case "2":
        const resultPeek= pila.peek()
        alert("Resultado de la busqueda: " + resultPeek)
        menu()
        break
      case "3":
        const resultPop = pila.pop()
        alert("Resultado de la eliminacion: " + resultPop)
        menu()
        break
      case "4":
        const resultEmpty = pila.isEmpty()
        alert("Resultado del estado de la pila: " + resultEmpty)
        menu()
          break 
      case "5":
        const resultSize = pila.size()
        alert("Resultado del tamaño de la pila: " + resultSize)
        menu()
        break 
      case "6":
        pila.clear()
        alert("Los datos se han borrado")
        menu()
        return
      case "7":
          pila.print("")
          return
      case "8":
            window.close()
            return
      default:
        alert("Opcion invalida. Intenta nuevamente.")
        break
    }
  }
}

// Ejecuta el menu
menu()