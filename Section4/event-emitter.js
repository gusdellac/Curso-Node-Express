const EventEmitter = require("events"); // módulo events retorna la clase EventEmitter 

//EventEmitter es una clase (javascript la define como una función??)
//Esta clase nos permite instanciar objetos.

//console.log(EventEmitter);

const emisorProductos = new EventEmitter(); //instanciamos la clase


//ejecutamos la arrow function cuando se emite el método compra
emisorProductos.on("compra", (total, numProductos) => { 
    console.log(`Total de la compra $${total}`);
    console.log(`Número de productos: ${numProductos}`);
}); //la función que se ejecuta luego de que el ocurre el evento se las llama Event Handlers


//emitimos el método compra
emisorProductos.emit("compra", 500, 5); 
