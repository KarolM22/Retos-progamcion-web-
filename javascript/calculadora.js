const displayvaloranterior = document.getElementById('valor_anterior');
const displayvaloractual= document.getElementById('valor_actual');
const botonesnumeros =document.querySelectorAll ('.numero');
const botonesoperadores = document.querySelectorAll('.operador');


const display= new Display(displayvaloranterior,displayvaloractual);

botonesnumeros.forEach(boton =>{
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});
botonesoperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});


