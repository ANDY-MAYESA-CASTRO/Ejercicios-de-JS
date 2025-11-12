// 1. Serie de Fibonacci de un objeto número

function fibonacci(obj) {
  const n = obj.numero;
  let a = 0, b = 1;
  let result = [];
  if (n > 0) result.push(a);
  if (n > 1) result.push(b);
  for (let i = 2; i < n; i++) {
    let next = a + b;
    result.push(next);
    a = b;
    b = next;
  }
  return result;
}


// 2. Divisores de un número (objeto)
function divisores(obj) {
  const num = obj.numero;
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) result.push(i);
  }
  return result;
}

// 3. Suma de los divisores de un número
function sumaDivisores(obj) {
  const divs = divisores(obj);
  let suma = 0;
  for (let i = 0; i < divs.length; i++) {
    suma += divs[i];
  }
  return suma;
}

// 4. Verificar si el número es perfecto
function esPerfecto(obj) {
  const num = obj.numero;
  let suma = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) suma += i;
  }
  return suma === num;
}

// 5. Verificar si el número es primo
function esPrimo(obj) {
  const num = obj.numero;
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 6. Invertir los dígitos de un número
function invertirNumero(obj) {
  let num = obj.numero;
  let invertido = 0;
  while (num > 0) {
    invertido = invertido * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return invertido;
}

// 7. Contar dígitos de un número
function contarDigitos(obj) {
  let num = obj.numero;
  let contador = 0;
  if (num === 0) return 1; // para 0
  while (num > 0) {
    contador++;
    num = Math.floor(num / 10);
  }
  return contador;
}

// 8. Factorial de un número
function factorial(obj) {
  const num = obj.numero;
  if (num === 0 || num === 1) return 1;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

// 9. Sumas sucesivas
function sumasSucesivas(obj) {
  const num = obj.numero;
  const veces = obj.veces;
  let suma = 0;
  for (let i = 0; i < veces; i++) {
    suma += num;
  }
  return suma;
}

// 10. Restas sucesivas
function restasSucesivas(obj) {
  let num = obj.numero;
  const num2 = obj.numero2;
  while (num > 0) {
    num -= num2;
  }
  return num;
}
 
// BLOQUE 2

// Reutilizamos funciones del Bloque 1 ya definidas para un objeto individual (e.g. fibonacci, divisores, sumaDivisores, esPerfecto, esPrimo, invertirNumero, contarDigitos, factorial, sumasSucesivas, restasSucesivas)

// 1. Serie de Fibonacci para lista de objetos
function fibonacciLista(lista) {
  let resultados = [];
  for (let i = 0; i < lista.length; i++) {
    resultados.push({
      numero: lista[i].numero,
      serie: fibonacci(lista[i])
    });
  }
  return resultados;
}

// 2. Divisores para lista de objetos
function divisoresLista(lista) {
  let resultados = [];
  for (let i = 0; i < lista.length; i++) {
    resultados.push({
      numero: lista[i].numero,
      divisores: divisores(lista[i])
    });
  }
  return resultados;
}

// 3. Suma de divisores para lista de objetos
function sumaDivisoresLista(lista) {
  let resultados = [];
  for (let i = 0; i < lista.length; i++) {
    resultados.push({
      numero: lista[i].numero,
      sumaDivisores: sumaDivisores(lista[i])
    });
  }
  return resultados;
}

// 4. Números perfectos en lista de objetos
function numerosPerfectosLista(lista) {
  let perfectos = [];
  for (let i = 0; i < lista.length; i++) {
    if (esPerfecto(lista[i])) {
      perfectos.push(lista[i].numero);
    }
  }
  return perfectos;
}

// 5. Números primos en lista de objetos
function numerosPrimosLista(lista) {
  let primos = [];
  for (let i = 0; i < lista.length; i++) {
    if (esPrimo(lista[i])) {
      primos.push(lista[i].numero);
    }
  }
  return primos;
}

// 6. Invertir números en lista de objetos
function invertirNumerosLista(lista) {
  let resultados = [];
  for (let i = 0; i < lista.length; i++) {
    resultados.push({
      numero: lista[i].numero,
      invertido: invertirNumero(lista[i])
    });
  }
  return resultados;
}

// 7. Contar dígitos en lista de objetos
function contarDigitosLista(lista) {
  let resultados = [];
  for (let i = 0; i < lista.length; i++) {
    resultados.push({
      numero: lista[i].numero,
      digitos: contarDigitos(lista[i])
    });
  }
  return resultados;
}

// 8. Factorial para lista de objetos
function factorialLista(lista) {
  let resultados = [];
  for (let i = 0; i < lista.length; i++) {
    resultados.push({
      numero: lista[i].numero,
      factorial: factorial(lista[i])
    });
  }
  return resultados;
}

// 9. Sumas sucesivas para lista de objetos (suponiendo cada objeto tiene atributos numero y veces)
function sumasSucesivasLista(lista) {
  let resultados = [];
  for (let i = 0; i < lista.length; i++) {
    resultados.push({
      numero: lista[i].numero,
      veces: lista[i].veces,
      resultado: sumasSucesivas(lista[i])
    });
  }
  return resultados;
}

// 10. Restas sucesivas para lista de objetos (cada objeto tiene numero y numero2)
function restasSucesivasLista(lista) {
  let resultados = [];
  for (let i = 0; i < lista.length; i++) {
    resultados.push({
      numero: lista[i].numero,
      numero2: lista[i].numero2,
      resultadoFinal: restasSucesivas(lista[i])
    });
  }
  return resultados;
}

