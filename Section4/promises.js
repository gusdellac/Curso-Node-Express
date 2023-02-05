//*instanciamos un objeto de clase Promise

const miPromesa = new Promise((resolve, reject) => { //los valores de los parámetros resolve y reject se asignan automáticamente
    //simulamos evento asíncrono
    setTimeout(() => {
        if(promesaCumplida){
            resolve("¡Promesa cumplida!");
        } else {
            reject("Promesa rechazada..");
        }
    }, 3000);

}); 

const promesaCumplida = false; // para ejemplo

//cuando la promesa es resuelta (resolve) se ejecuta el método then()
// miPromesa.then( (valor) => {
//     console.log(valor);
// }).catch();

const manejarPromesaCumplida = (valor) => {
    console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
};

//*manejamos la promesa en caso de que este resolve o reject

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada); // primer parámetro es una función que maneja si la respuesta
//fué exitosa, el segundo es una función que maneja si la respuesta fúe rechazada


