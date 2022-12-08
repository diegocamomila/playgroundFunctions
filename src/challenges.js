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
  const { length, 0: first, [length - 1]: last } = listArray;
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  const totalPoint = (wins * 3 + ties);
  return totalPoint;
}

// Desafio 6
function highestCount(listNunbers) {
  // seu código aqui
  let count = 0;
  const numMax = (Math.max.apply(null, listNunbers));
  for (let index = 0; index < listNunbers.length; index += 1) {
    if (listNunbers[index] === numMax) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  const positioncat1 = (cat1 - mouse) ** 2;
  const positioncat2 = (cat2 - mouse) ** 2;

  if (positioncat1 < positioncat2) {
    return 'cat1';
  } if (positioncat1 > positioncat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(listNunbers) {
  // seu código aqui
  let result = [];
  for (let index = 0; index < listNunbers.length; index += 1) {
    if (listNunbers[index] % 15 === 0) {
      result.push('fizzBuzz');
    } else if (listNunbers[index] % 5 === 0) {
      result.push('buzz');
    } else if (listNunbers[index] % 3 === 0) {
      result.push('fizz');
    } else result.push('bug!');
  }
  return result;
}

// Desafio 9
function encode(str) {
  // seu código aqui
  const newCode = str.replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return newCode;
}
function decode(str) {
  // seu código aqui
  const newDecode = str.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return newDecode;
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
