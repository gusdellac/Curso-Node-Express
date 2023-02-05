const estatusPedido = () => {
    //simulamos aleatoriedad de la falla
    return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(estatusPedido()){
            resolve("¡Pedido exitoso! Su pizza está en camino." );
        } else {
            reject("Ocurrio un error. Por favor intente nuevamente.");
        }
    }, 3000);
});

//1er sintaxis 

// const manejarPedido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
// };

// const rechazarPedido = (mensajeDeError) => {
//     console.log(mensajeDeError);
// };

// miPedidoDePizza.then(manejarPedido, rechazarPedido);


//2da sintaxis

// miPedidoDePizza
//     .then((mensajeDeConfirmacion) => {
//         console.log(mensajeDeConfirmacion);
//     })
//     .then(null, (mensajeDeError) => {
//         console.log(mensajeDeError);
//     });


//3er sintaxis (con catch()) --Method chaining (encadenamiento de métodos)--
// miPedidoDePizza
//     .then((mensajeDeConfirmacion) => {
//         console.log(mensajeDeConfirmacion);
//     })
//     .catch((mensajeDeError) => {
//         console.log(mensajeDeError);
//     });


//4ta sintaxis (para funciones complejas y extensas)

const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
    //largaaaaaaaaaaaaaaaaaaaaaa
};

const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError);
    //largaaaaaaaaaaaaaaaaaaaaaa
};


miPedidoDePizza.then(manejarPedido).catch(rechazarPedido);



//simulamos 10 pedidos con bucle 5 seg retraso respuesta

for (let i = 0; i < 10; i++) {
    const miPedidoDePizza = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(estatusPedido()){
                resolve("¡Pedido exitoso! Su pizza está en camino." );
            } else {
                reject("Ocurrio un error. Por favor intente nuevamente.");
            }
        }, 5000);
    });

    const manejarPedido = (mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
        //largaaaaaaaaaaaaaaaaaaaaaa
    };
    
    const rechazarPedido = (mensajeDeError) => {
        console.log(mensajeDeError);
        //largaaaaaaaaaaaaaaaaaaaaaa
    };
    
    
    miPedidoDePizza.then(manejarPedido).catch(rechazarPedido);
};

