import {barcelona, roma, paris, londres} from "./ciudades.js";

//obtengo los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

//agregamos evento click
enlaces.forEach(
    function(enlace){
        enlace.addEventListener('click', function() {
            //remover el activo
            enlaces.forEach(function(enlace){
                enlace.classList.remove('active')
            });
            //agregar active al que corresponda
        this.classList.add('active');

        //traer info del objeto que corresponda
        let contenido = obtenerContenido(this.textContent);

        //mostrar el contenido en el dom
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        });
});

//funcion para traer la info desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
};