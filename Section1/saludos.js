// EXPORTACIÓN DE MÓDULOS

function saludar(nombre){
    return `Hola ${nombre}`;
}

function saludarHolaMundo(){
    return "¡Hola, Mundo!";
}

// exportamos el módulo saludos.js que contiene la función
//saludar()

//se utiliza un objeto de exportaciones (module.exports)
// module.exports.saludar = saludar; //agregamos la propiedad saludar y le asignamos la función saludar()
// module.exports.saludarHolaMundo = saludarHolaMundo;

//otra sintaxis para exportar elementos
module.exports = {
    saludar : saludar ,
    saludarHolaMundo : saludarHolaMundo
};