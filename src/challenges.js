// foco e constancia
// Desafio 1
function compareTrue(valueA, valueB) {
  // seu código aqui
  if (valueA === true && valueB === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  const area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(fhrase) {
  // seu código aqui
  const newArry = fhrase.split(' ');
  return newArry;
}

// Desafio 4
function concatName(listArray) {
  // seu código aqui
  let { length, 0: first, [length - 1]: last } = listArray;
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
