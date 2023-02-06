const http = require("http"); //requerimos el módulo http

//creación servidor
const servidor = http.createServer((req, res) => { //parámetros (request : solicitud http, response: respuesta http)

    //proceso
    console.log("Solicitud nueva");
    res.end("Hola, mundo"); //método end (objeto res) finaliza el proceso y envía la respuesta al cliente 

});

const puerto = 3000; // definimos el número de puerto


//el método listen() pone en escucha al servidor del puerto que determinemos en su primer parámetro y ejecuta el proceso que determinemos
//en su segundo parámetro
servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en http://localhost:${puerto}...`);
});