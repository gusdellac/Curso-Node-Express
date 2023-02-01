// JSON A JS

const curso = require("./curso.json");

console.log(curso);
console.log(typeof curso);
console.log(curso.titulo);
console.log(curso.esPublico);

//JS A JSON

//objeto javascript
let infoCurso = {
    "titulo" : "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
        "Javascript",
        "Node.js"
    ],
    "esPublico": true
}
console.log(infoCurso);
console.log(typeof infoCurso); //type Object


// Objeto --> Cadena de caracteres
//Convertimos el objeto js a cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON); //type String
console.log(infoCursoJSON.titulo); //ya no es un objeto , da undefined

// Cadena de caracteres --> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);


