var especie, nombre, edad;

class Animal {
    constructor(_especie, _nombre, _edad) {
      this.especie = _especie;
      this.nombre = _nombre;
      this.edad = _edad;
    }
  
    obtenerInformacion() {
      return `Especie: ${this.especie}\nNombre: ${this.nombre}\nEdad: ${this.edad} años`;
    }
  }
  
  function mostrarMenu() {
    var opcion = prompt(
      "Seleccione una opción:\n" +
        "1. Ingresar información de un animal.\n" +
        "2. Mostrar información de un animal.\n" +
        "3. SALIR."
    )
    switch (opcion) {
        case "1":
          ingresarInformacion();
          break;
        case "2":
          mostrarInformacion();
          break;
        case "3":
          alert("¡Hasta luego!")
          window.close()
          return;
        default:
          alert("Opción no válida. Intente nuevamente.")
          mostrarMenu()
      }window.close()
    }
  
  var animal;
  
  function ingresarInformacion() {
    var especie = prompt("Ingrese la especie del animal:");
    var nombre = prompt("Ingrese el nombre del animal:");
    var edad = parseInt(prompt("Ingrese la edad del animal en años:"));
  
    animal = new Animal(especie, nombre, edad);
    alert("Información del animal almacenada exitosamente.");
  
    mostrarMenu();
  }
  
  function mostrarInformacion() {
    if (animal) {
      var informacion = animal.obtenerInformacion();
      alert(informacion);
    } else {
      alert("No se ha ingresado información de un animal. Por favor, seleccione la opción 1 para ingresar información.");
      mostrarMenu();
    }
  }
  
  mostrarMenu();
  