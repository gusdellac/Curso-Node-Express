function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de freeCodeCamp`);
        setTimeout(() => {
            if (producto === "taza") {
                resolve("Ordenando una taza con el logo de freeCodeCamp...");
            } else {
                reject("Este producto no está disponible actualmente.");
            }
        }, 2000);
    });
}

function procesarPedido(respuesta) {
    return new Promise( resolve => {
        console.log("Procesando respuesta...");
        console.log(`La respuesta fué: "${respuesta}"`);
        setTimeout(() => {
            resolve("Gracias por tu compra. Disfruta tu producto de freeCodeCamp");
        }, 4000);
    });
}

//*encadenamiento de promesas (procesos asíncronos)
//!esta sintaxis nos puede llevar al callback hell si tenemos muchos procesos encadenados
//!por esta razon es recomendable usar async await , para un código mas legible

// ordenarProducto("taza")
//     .then(respuesta => {
//         console.log("Respuesta recibida");
//         console.log(respuesta);
//         return procesarPedido(respuesta);
//     })
//     .then(respuestaProcesada => {
//         console.log(respuestaProcesada);
//     })
//     .catch(err => {
//         console.log(err);
//     });


//*Sintaxis con async await

//?esta sintaxis nos permite trabajar con código asíncrono como si fuera síncrono
//?debemos colocar async previo a la declaración de la función que internamente trabajará con funciones que ejecutan
//?procesos asíncronos. Cuyas funciones que ejecutan procesos asíncronos deben tener await previo a su llamada a ejecución

async function realizarPedido(producto) {

    //try (tratamos de ejecutar el código)
    try {
        const respuesta = await ordenarProducto(producto); //llamada a la función ordenarProducto() que retornará una promesa, es decir un proceso asíncrono
        console.log("Respuesta recibida"); //esta linea se ejecuta cuando finaliza la línea anterior , siempre que la respuesta de la promesa sea resolve
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } 
    //si el código dentro del try retorna una reject la tratamos con catch
    catch (err) {
        console.log(err);
    }
}

realizarPedido("taza");

