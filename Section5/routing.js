//Rutas servidor

const http = require("http");
// const cursos = require("./cursos.js");
const {infoCursos} = require("./cursos.js");

const servidor = http.createServer((req, res) => {
    const {method} = req; //sintaxis de desestructuración , extraemos la propiedad method de la solicitud (req)

    switch(method) {
        case "GET":
            return manejarSolicitudGET(req, res);
        case "POST":
            return manejarSolicitudPOST(req, res);
        default:
            res.statusCode = 501; //asignando el valor 501 al statusCode podemos enviar la respuesta que deseamos al cliente
            res.end(`El metodo usado no puede ser manejado por el servidor: ${method}`); //enviamos esta respuesta al cliente   
            break;     
    }
});


function manejarSolicitudGET(req, res) {
    const path = req.url;
    // console.log(res.statusCode); //por defecto el valor para una solicitud GET es 200, sólo se asigna por defecto en la solicitud GET

    if (path === "/") {
        // res.statusCode = 200; //no es necesario hacer explícita la asignacion de satusCode = 200 para solicitud GET

        // res.writeHead(200, {"Content-Type" : "application/json"}); //configuramos cabezera
        return res.end("Bienvenidos a mi primer servidor y API creados con Node.js");
    } else if (path === "/cursos") { // por convencion se inicia el camino de una API con el subdominio /api/cursos/...
        return res.end(JSON.stringify(infoCursos));
    } else if (path === "/cursos/programacion") {
        return res.end(JSON.stringify(infoCursos.programacion));
    }

    res.statusCode = 404;
    return res.end("El recurso solicitado no existe...");
}

function manejarSolicitudPOST(req, res){
    const path = req.url;

    if (path === "/cursos/programacion") {

        //procesar cuerpo solicitud
        let cuerpo = "";

        req.on("data", contenido => {
            cuerpo += contenido.toString();
        }); //emisor de evento asíncrono

        req.on("end", () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            //Convertir a un objeto de JavaScript
            cuerpo = JSON.parse(cuerpo);

            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);

            res.end("El servidor recibió una solicitud POST para /cursos/programación");
        });


        return res.end("El servidor recibio una solicitud POST para  /cursos/programacion");
    }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});

