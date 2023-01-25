// Módulos built-in (incorporados)

//Módulo console

console.log("\nMódulo console\n")
console.log("¡Hola Mundo!");

console.warn("Ocurrió un error...");

console.error("¡Ocurrió un error!");

console.error(new Error("¡Ocurrió un error!"));


// Módulo process

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


//Módulo OS (info sobre sist op)

const os = require("os"); //importamos el módulo os
console.log(os.type()); //tipo sist op

console.log(os.homedir()); //directorio principal sist

console.log(os.uptime()); // tiempo en seg desde que se inició el sist op

console.log(os.userInfo()); // info sobre el usuario

//Módulo Timers






