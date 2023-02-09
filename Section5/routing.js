//Rutas servidor

const http = require("http");
const cursos = require("./cursos.js");

const servidor = http.createServer((req, res) => {
    const {method} = req; //sintaxis de desestructuración , extraemos la propiedad method de la solicitud (req)

    switch(method) {
        case "GET":
            return manejarSolicitudGET(req, res);
        default:
            console.log(`El metodo usado no puede ser manejado por el servidor: ${method}`);        
    }
});


function manejarSolicitudGET(req, res) {
     
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});

