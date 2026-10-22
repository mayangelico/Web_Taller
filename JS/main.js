
const btnTheme = document.querySelector("#btn-theme");
const body = document.querySelector("body");

console.log(btnTheme);
console.log(body);

// COMPROBAR EL TEMA GUARDADO AL CARGAR LA PÁGINA
if (localStorage.getItem("tema") === "dark") {
    body.classList.add("dark-mode");
    btnTheme.textContent = "☀️ Modo claro";
} else {
    btnTheme.textContent = "🌙 Modo oscuro";
}

// CAMBIAR EL TEMA Y GUARDARLO
btnTheme.addEventListener("click", function() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        btnTheme.textContent = "☀️ Modo claro";
        localStorage.setItem("tema", "dark");
    } else {
        btnTheme.textContent = "🌙 Modo oscuro";
        localStorage.setItem("tema", "light");
    }
});


// FORMULARIO DE CONTACTO
const formularioContacto = document.querySelector("#contacto");

console.log(formularioContacto);

// ELEMENTOS DE LA MODAL
const modal = document.querySelector("#modal-exit");
const btnAceptar = document.querySelector("#btn-aceptar");

if (formularioContacto) {
    formularioContacto.addEventListener("submit", function(event) {
        event.preventDefault();

        const campos = formularioContacto.querySelectorAll("input");
        let error = false;

        // COMPROBAR LOS CAMPOS OBLIGATORIOS
        campos.forEach(function(campo) {
            if (campo.type !== "submit" && campo.value.trim() === "") {
                campo.style.border = "2px solid red";
                error = true;
            } else {
                campo.style.border = "";
            }
        });

        // COMPROBAR EL CORREO ELECTRÓNICO
        const correo = formularioContacto.querySelector('input[type="email"]');

        if (correo) {
            const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!patron.test(correo.value.trim())) {
                correo.style.border = "2px solid red";
                error = true;
            }
        }

        // MOSTRAR LA MODAL SI TODO ES CORRECTO
        if (error) {
            alert("Error: debes rellenar correctamente todos los campos");
        } else {
            console.log("Formulario validado correctamente");

            if (modal) {
                modal.classList.add("is-active");
            }
        }
    });
}

// CERRAR LA MODAL CON EL BOTÓN ACEPTAR
if (btnAceptar && modal) {
    btnAceptar.addEventListener("click", function() {
        modal.classList.remove("is-active");
    });
}


// BUSCADOR DE SERVICIOS
const buscador = document.querySelector("#buscador-servicios");
const tarjetas = document.querySelectorAll("#servicios article");

if (buscador) {
    buscador.addEventListener("input", function() {
        const texto = buscador.value.toLowerCase().trim();

        tarjetas.forEach(function(tarjeta) {
            const contenido = tarjeta.textContent.toLowerCase();

            if (contenido.includes(texto)) {
                tarjeta.style.display = "";
            } else {
                tarjeta.style.display = "none";
            }
        });
    });
}


// CONTADOR DE CARACTERES DE LA INCIDENCIA
const problema = document.querySelector("#problema");
const contador = document.querySelector("#contador-caracteres");
const limite = 150;

if (problema && contador) {
    problema.addEventListener("input", function() {
        const restantes = limite - problema.value.length;

        contador.textContent = "Te quedan " + restantes + " caracteres.";
    });
}

 
