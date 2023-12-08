var nombre, edad, curso;
class Persona {
  constructor(_nombre, _edad) {
    nombre = _nombre;
    edad = _edad;
  }

  saludar() {
    return 'Hola, mi nombre es ' + nombre + ' y tengo ' + edad + ' anios.';
  }
}

class Estudiante extends Persona {
  constructor(_nombre, _edad, _curso) {
    super(_nombre, _edad);
    curso = _curso;
  }

  estudiar() {
    return nombre + ' esta estudiando el curso de ' + curso;
  }
}

function mostrarMenu() {
  var opcion = prompt(
    "Seleccione una opcion:\n" +
      "1. Ingresar informacion del estuante.\n" +
      "2. Saludo de la persona.\n" +
      "3. Estudios de la persona.\n" +
      "4. Cancelar / Salir.\n"
  );

  switch (opcion) {
    case "1":
      ingresarInformacion();
      break;
    case "2":
      mostrarSaludo();
      break;
    case "3":
      mostrarEstudios();
      break;
    case "4":
      alert("¡Hasta luego!")
      window.close()
      return;
    default:
      alert("Opción no válida. Intente nuevamente.")
      mostrarMenu()
  }window.close()
}

let estudiante;

  function ingresarInformacion() {
    var nombre = prompt("Ingrese el nombre de la persona:");
    var edad = parseInt(prompt("Ingrese la edad de la persona en anios:"));
    var curso = parseInt(prompt("Ingrese la asignatura que esta cursando la persona:"));
  
    estudiante = new Estudiante(nombre, edad,curso);
    alert("Informacion del estudiante almacenada exitosamente.");
  
    mostrarMenu();
  }

  
  function mostrarSaludo() {
    if (estudiante) {
      var informacion = estudiante.saludar();
      alert(informacion);
      mostrarMenu();
    } else {
      alert("No se ha ingresado informacion de una persona. Por favor, seleccione la opcion 1 para ingresar informacion.");
      mostrarMenu();
    }
  }

  function mostrarEstudios() {
    if (estudiante) {
      var informacion = estudiante.estudiar();
      alert(informacion);
      mostrarMenu();
    } else {
      alert("No se ha ingresado informacion de una persona. Por favor, seleccione la opcion 1 para ingresar informacion.");
      mostrarMenu();
    }
  }

  mostrarMenu();
  
  