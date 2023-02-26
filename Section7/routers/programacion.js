const express = require("express");

const {programacion} = require("../datos/cursos.js").infoCursos;

const routerProgramacion = express.Router();

//Middleware
routerProgramacion.use(express.json()); //nos permite procesar el cuerpo de la solicitud en formato JSON y trabajar con esa informacion en nuestro codigo


// CURSOS PROGRAMACION

routerProgramacion.get("/", (req, res) => {
    res.send(JSON.stringify(programacion));
});

//parámetros url 
routerProgramacion.get("/:lenguaje", (req, res) => {
    const lenguaje = req.params.lenguaje; //extraemos el lenguaje determinado en la solicitud y asignamos a const lenguaje
    const resultados = programacion.filter( curso => curso.lenguaje === lenguaje); //filtramos el array de cursos de programacion de acuerdo al parámetro url
    // si se obtienen resultados se asignaran a const resultados (será un array con x elementos)

    //comprobamos si array resultados tiene elementos dentro
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`); //si no tiene elementos, significa que durante el filtrado
        //no se encontro ningun curso con ese nombre dentro del array de cursos de programacion
    }

    //parámetros query (al final de la url se determinan los parámetros query , ej: /api/cursos/programacion/python?ordenar=vistas)
    //en este caso, si este parámetro es enviado se ordenaran los resultados de acuerdo al numero de vistas y se enviara la res al cliente
    if (req.query.ordenar === "vistas") {
        return res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)));
    } 

    res.send(JSON.stringify(resultados)); //si el condicional previo no se cumple se enviara al cliente como respuesta el array de resultados en formato JSON
});

//solicitud con dos parametros url
routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }

    res.send(JSON.stringify(resultados));
});

routerProgramacion.post("/", (req, res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
});

routerProgramacion.put("/:id", (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

});

module.exports = routerProgramacion;