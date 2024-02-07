let num = 3;

//funcion tradicional
/* function mostrarDatos (num) {
  if (num < 1 || num > 20) {
    console.log("número fuera del rango");
  } else {
    console.log("Numeros corerctos");
  }
}; */

//Function tipo arrow function
let mostrarDatos = (num) => {
  if (num < 1 || num > 20) {
    console.log("número fuera del rango");
    }

    //Tabla de multiplicacion

    for (let i = 1; i <= num; i++){
        let resultado = i * num
        console.log(`${i} x ${num} = ${resultado}`)
    } 
    

};

mostrarDatos(num);
