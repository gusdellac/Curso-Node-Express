const express = require("express");
const app = express();

const { infoCursos } = require("./cursos.js");

// console.log("\u{1F4BB}"); //emojisss

// Routing 
app.get("/", (req, res) => {
    res.send("Mi primer servidor con Express. Cursos \u{1F4BB} !!!");
});

app.get("/api/cursos", (req, res) => {
    res.send(JSON.stringify(infoCursos)); //convertimos infoCursos que es un object a un string JSON y enviamos la respuesta 
});

// CURSOS PROGRAMACION

app.get("/api/cursos/programacion", (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});

//parámetros url 
app.get("/api/cursos/programacion/:lenguaje", (req, res) => {
    const lenguaje = req.params.lenguaje; //extraemos el lenguaje determinado en la solicitud y asignamos a const lenguaje
    const resultados = infoCursos.programacion.filter( curso => curso.lenguaje === lenguaje); //filtramos el array de cursos de programacion de acuerdo al parámetro url
    // si se obtienen resultados se asignaran a const resultados (será un array con x elementos)

    //comprobamos si array resultados tiene elementos dentro
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`); //si no tiene elementos, significa que durante el filtrado
        //no se encontro ningun curso con ese nombre dentro del array de cursos de programacion
    }

    res.send(JSON.stringify(resultados)); //si el condicional previo no se cumple se enviara al cliente como respuesta el array de resultados en formato JSON
});

//solicitud con dos parametros url
app.get("/api/cursos/programacion/:lenguaje/:nivel", (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }

    res.send(JSON.stringify(resultados));


});

//CURSOS MATEMATICAS

app.get("/api/cursos/matematicas", (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});

app.get("/api/cursos/matematicas/:tema", (req, res) => {
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);

    if (resultados.length === 0 ) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }

    res.send(JSON.stringify(resultados));
});


const PUERTO = process.env.PORT || 3000; // usamos process.env.PORT en el caso de que tengamos nuestra
// app en un servicio de hosting. Se asigna un puerto a nuestra app. El servicio configura variables de ambiente para asignar
// los puertos. - process.env.PORT obtiene el valor del puerto si está definido como variable de ambiente (environment), si no está
//definido se asigna el puerto fijo 3000

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});





