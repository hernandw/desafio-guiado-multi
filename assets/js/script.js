let num = +prompt('Ingresa un numero entre 1 y 20')

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
      console.log("número fuera del rango")
      return
  }

  //Tabla de multiplicacion

  for (let i = 1; i <= num; i++) {
    console.log(`${i} x ${num} = ${i * num}`);
  }

  //Factorial

  for (let x = 1; x <= num; x++) {
    let res = 1; // se inicializa la variable
    for (let j = 1; j <= x; j++) {
      res = res * j; //calcula el resulta del factorial
    }
    console.log(`Factorial de ${x}  es:  ${res}`); //muestra el valor del factorial
  }
};

mostrarDatos(num);
