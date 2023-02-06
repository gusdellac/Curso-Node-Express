const http = require("http");


//request: solicitud http que el cliente realiza al servidor
//response: respuesta http que el servidor devuelve


const servidor = http.createServer((req, res) => {
    // console.log("===> req (solicitud)");
    // console.log(req);
    // console.log(req.url); //atributo url nos indica la ubicación a la que se dirije la solicitud
    // console.log(req.method); //atributo method indica el verbo de la solicitud que el cliente esta requiriendo
    // console.log(req.headers); //atributo headers indica cabecera de la solicitud
    

    console.log("===> res (respuesta)");
    // console.log(res);
    console.log(res.statusCode); //atributo statusCode indica el estado de la solicitud
    


    res.end("Hola, mundo");
});

const puerto = 3000;

servidor.listen(3000, () => {
    console.log(`El servidor esta escuchando en http://localhost:${puerto}...`);
});