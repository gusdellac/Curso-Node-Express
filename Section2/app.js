//!Módulos built-in (incorporados)

//*Módulo console

// console.log("\nMódulo console\n")
// console.log("¡Hola Mundo!");

// console.warn("Ocurrió un error...");

// console.error("¡Ocurrió un error!");

// console.error(new Error("¡Ocurrió un error!"));


//*Módulo process

/*
console.log("\n\nMódulo process\n")
//console.log(process);
console.log(process.env);

console.log(process.argv); //accedemos a los argumentos de nuestro programa.
//esta propiedad de process (argv) nos retorna un array con los sgts elementos : 0 - ubicación ejecutable node,
// 1 - ubicación del archivo js que estamos ejecutando (app.js), 2 -3 -4 etc otros argumentos que ingresemos.

console.log(process.argv[2]); //obtenemos el argumento de la posición 2
console.log(process.argv[3]); //obtenemos el argumento de la posición 3

//iteramos con forEach array argv
console.log("\nIteramos argv con forEach")
process.argv.forEach(element => {
    console.log(element);
});

//iteramos con for array argv y obtenemos valores
//a partir de la posición 2
console.log("\nIteramos argv con for")
for(let i = 2; i < process.argv.length; i++){
    console.log(process.argv[i]);
}
console.log(process.argv.length);

console.log(process.memoryUsage());

*/

//*Módulo OS (info sobre sist op)

/*
const os = require("os"); //importamos el módulo os
console.log(os.type()); //tipo sist op

console.log(os.homedir()); //directorio principal sist

console.log(os.uptime()); // tiempo en seg desde que se inició el sist op

console.log(os.userInfo()); // info sobre el usuario

*/

//*Módulo Timers

/*
//setTimeout(funcion, retraso , argumento1***, argumento2);  (***argumentos que utilizará la función cuando se ejecute)

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

mostrarTema("Node.js");

//1 argumento
setTimeout(mostrarTema, 2000, "Node.js");


function sumar(a, b){
    console.log(a + b);
}

//2 argumentos
setTimeout(sumar, 4000, 5, 10);



//setImmediate(funcion, argumento1, argumento2);

console.log("Antes de setImmediate()"); //código síncrono

setImmediate(mostrarTema, "Angular js"); //se ejecuta inmediatamente después de la ejecución
//del código síncrono. Esta función tiene prioridad sobre cualquier otro código asíncrono que se esté
//ejecutando

console.log("Después de setImmediate()"); //código síncrono



//setInterval(funcion, intervalo, arg1, arg2);

// setInterval(mostrarTema, 1500, "React js");
// setInterval(sumar, 1500, 5, 10);

*/

//*Módulo fs

const fs = require("fs");

//*Leer archivo

// fs.readFile("Section2/index.html", "utf-8", (err, contenido) => {
//     if(err){
//         throw err; //lanzamos error y detenemos la ejecución del código
//     }
//     console.log(contenido);
// });


//*Cambiar nombre archivo

// fs.rename("Section2/index.html", "main.html", (err) => {
//     if(err){
//         throw err;
//     }
//     console.log("Nombre cambiado exitosamente!!");
// });



// *Agregar contenido al final de un archivo (append)

// fs.appendFile("Section2/index.html", "<p>Hola</p>", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Archivo actualizado..");
// });

// *Reemplazar todo el contenido del archivo

// fs.writeFile("Section2/index.html", "Contenido Nuevo", (err) => {
//     if(err){
//         throw err;
//     }
//     console.log("Contenido reemplazado exitosamente.");
// });

// *Eliminar archivos

// fs.unlink("Section2/main.html", (err) => {
//     if(err){
//         throw err;
//     }
//     console.log("Archivo eliminado.");
// });


/*Estos métodos no son síncronos, es decir son asíncronos. 
No necesariamente van a ir finalizando en el orden en que el código está escrito,
sino que se va a ir leyendo el código y ejecutando los métodos. Pueden que algunos métodos
demoren más que otros realizando la operación por lo que pueden no finalizar en un orden 
específico. El código asíncrono se ejecuta después del código síncrono*/

//*Versiones síncronas de los métodos anteriores.

//*Leer archivo

console.log("Antes de leer el archivo...");

const archivo = fs.readFileSync("index.html", "utf-8");

console.log(archivo);

console.log("Después de leer el archivo...");

//*Cambiar nombre archivo

console.log("Antes de cambiar el nombre del archivo...");

fs.renameSync("index.html", "main.html");

console.log("Después de cambiar el nombre del archivo...");



// *Agregar contenido al final de un archivo (append)

console.log("Antes de agregar contenido...");

fs.appendFileSync("main.html", "<p>Hola</p>");

console.log("Después de agregar contenido...");


// *Reemplazar todo el contenido del archivo

console.log("Antes de reemplazar el contenido del archivo...");

fs.writeFileSync("main.html", "Contenido Nuevo");

console.log("Después de reemplazar el contenido del archivo...");


// *Eliminar archivos

console.log("Antes de eliminar el archivo..");

fs.unlinkSync("main.html");

console.log("Después de eliminar el archivo..");















