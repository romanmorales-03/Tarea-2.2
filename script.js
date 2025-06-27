function validarFormulario() {
    const clave = parseInt(document.getElementById("lclave").value.trim());
    const nombre = document.getElementById("fnom").value.trim();
    const appat = document.getElementById("lappat").value.trim();
    const apmat = document.getElementById("lapmat").value.trim();

    if (isNaN(clave) || clave <= 0) {
        alert("La clave debe ser un número mayor a 0.");
        return false;
    }

    if (nombre === "") {
        alert("El campo Nombre no puede estar vacío.");
        return false;
    }
    if (appat === "") {
        alert("El campo Apellido Paterno no puede estar vacío.");
        return false;
    }
    if (apmat === "") {
        alert("El campo Apellido Materno no puede estar vacío.");
        return false;
    }

    // todo correcto
    return true;
}



function convertirNomMayusculas(){
    				  const inputElement = document.getElementById("fnom");
  					  inputElement.value = inputElement.value.toUpperCase();
    			}

function convertirApePatMayusculas(){
    				  const inputElement = document.getElementById("lappat");
  					  inputElement.value = inputElement.value.toUpperCase();
    			}

function convertirApeMatAMayusculas(){
    				  const inputElement = document.getElementById("lapmat");
  					  inputElement.value = inputElement.value.toUpperCase();
    			}
