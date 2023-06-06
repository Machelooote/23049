//función calcular
function calcular() {
    const categoria = document.getElementById("selectCategoria").value;
    const cantidad = parseInt(document.getElementById("inputCantidad").value);
    var importeTotal = 0;

    const nombre = document.getElementById("inputNombre").value;
    const apellido = document.getElementById("inputApellido").value;
    const mail = document.getElementById("inputCorreo").value;

    if (nombre === "") {
        mensajeEmergente("Por favor, ingrese su nombre antes de continuar.");
    } else if (apellido === "" ) {
        mensajeEmergente("Por favor, ingrese su apellido antes de continuar.");
    } else if (mail === "") {
        mensajeEmergente("Por favor, ingrese su dirección de correo electrónico antes de continuar.");
    } else if (isNaN(cantidad)) {
        mensajeEmergente("Por favor, ingrese la cantidad antes de continuar.");
    } else {
        var importe = 200*cantidad;
        if (categoria == "Estudiante") {
            importeTotal = importe-(importe*.80);
        } else if (categoria == "Trainee") {
            importeTotal = importe-(importe*.50);
        } else if (categoria == "Junior") {
            importeTotal = importe-(importe*.15);
        }
        document.getElementById("totalAPagar").innerHTML = "Total a pagar: $ "+ importeTotal;
        mensajeEmergente("¡Resumen generado exitosamente!");
    }
}

// función mensaje emergente
function mensajeEmergente(texto){
    var mensaje = document.createElement("div");
    mensaje.textContent = texto;
    mensaje.style.position = "fixed";
    mensaje.style.top = "-60px";
    mensaje.style.left = "50%";
    mensaje.style.transform = "translateX(-50%)";
    mensaje.style.padding = "15px";
    mensaje.style.borderRadius = "5px";
    mensaje.style.zIndex = "10000";
    mensaje.className = "w-100 alert alert-light text-center shadow"
    document.body.appendChild(mensaje);
  
    setTimeout(() => {
        mensaje.style.transition = "all 500ms";
        mensaje.style.top = "0px";
    }, 500);
  
    setTimeout(() => {
      document.body.removeChild(mensaje);
    }, 3500);
  }

// funcion borrar
function borrar() {
    var totalAPagar = document.getElementById("totalAPagar");
    totalAPagar.innerHTML = "Total a pagar: $ ";
    mensajeEmergente("¡Formulario borrado exitosamente!");
}

// asociar evento al botón calcular
const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);

// asociar evento al botón borrar
const btnBorrar = document.getElementById('btnBorrar');
btnBorrar.addEventListener('click', borrar);