//IMPORTACIÓN DE MÓDULOS


const saludos = require("./saludos.js"); // requerimos un módulo utilizando
// la función require(), lo que se obtiene es el objeto module.exports. Se asignará a la const saludo
//un objeto que contiene la propiedad saludar y su valor asignado que es la función
//saludar() 


//Sintaxis de desestructuración. La utilizamos para importar un elemento
//específico del módulo importado. 
const { saludarHolaMundo } = require("./saludos.js"); // extraemos una propiedad determinada (variable) 
//del objeto importado

/*
    module.exports
    {
        saludar : saludar;
        saludarHolaMundo : saludarHolaMundo;
    }
*/

console.log(saludos);
console.log(saludos.saludar("freeCodeCamp"));

// llamamos al objeto y luego a la función que se encuentra
//dentro de ese objeto
console.log(saludos.saludarHolaMundo());

//llamamos la función importada directamente
console.log(saludarHolaMundo());



/** 
 * *Notar que no utilizamos import / export para la importación de módulos en este caso. Para poder utilizar
 * *estas palabras reservadas deberíamos inicializar un package.json indicando que trabajaremos con módulos (type : module) */