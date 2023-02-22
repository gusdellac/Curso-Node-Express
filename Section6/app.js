const { Console } = require("console");
const http = require("http");

const servidor = http.createServer((req, res) => {
    res.end("Hola freeCodeCamp");
});

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});