const express = require("express");
const app = express();

const { infoCursos } = require("./datos/cursos.js");

// Routers

const routerProgramacion = require("./routers/programacion.js");
app.use("/api/cursos/programacion", routerProgramacion);

const routerMatematicas = require("./routers/matematicas.js");
app.use("/api/cursos/matematicas", routerMatematicas);

//con los routers evitamos repetir una ruta que no se modifica en cada implementacion de enrutado,
//es decir que solo haremos explicito el camino que siga después de la ruta asignada al router.
//con esto evitamos escribir muchas veces la misma ruta que no tiene variacion y el codigo queda mas conciso y limpio.

// console.log("\u{1F4BB}"); //emojisss


// Routing 

app.get("/", (req, res) => {
    res.send("Mi primer servidor con Express. Cursos \u{1F4BB} !!!");
});

app.get("/api/cursos", (req, res) => {
    res.send(JSON.stringify(infoCursos)); //convertimos infoCursos que es un object a un string JSON y enviamos la respuesta 
});

const PUERTO = process.env.PORT || 3000; // usamos process.env.PORT en el caso de que tengamos nuestra
// app en un servicio de hosting. Se asigna un puerto a nuestra app. El servicio configura variables de ambiente para asignar
// los puertos. - process.env.PORT obtiene el valor del puerto si está definido como variable de ambiente (environment), si no está
//definido se asigna el puerto fijo 3000

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});





