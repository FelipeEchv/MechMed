var form = document.getElementById("boton");
form.addEventListener("submit", function(evt){
    evt.preventDefault();

    if(boton.value === null || boton.value === ""){
        mensajeError.push("Ingresa un correo electrónico");
    }
});
