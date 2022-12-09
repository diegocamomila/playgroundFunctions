// Desafio 10
function techList(tech, name) {
  // seu código aqui
  if (tech.length <= 0) {
    return 'Vazio!';
  }

  let newArray = [];
  let techSort = tech.sort();

  for (let index = 0; index < techSort.length; index += 1) {
    let objList = {
      tech: techSort[index],
      name,
    };

    newArray.push(objList);
  }
  return newArray;
}

// complemento desafio 11
function test(listNumbers) {
  const Numbers = [...listNumbers];
  let cnt = 0;
  let current = null;
  Numbers.sort();

  for (let index = 0; index < Numbers.length; index += 1) {
    if (Numbers[index] !== current) {
      current = Numbers[index];
      cnt = 0;
    } if ((cnt) >= 2) {
      return true;
    } if (Numbers[index] === current) {
      cnt += 1;
    } else return false;
  }
}

// Desafio 11
function generatePhoneNumber(listNumbers) {
  const max = (Math.max.apply(null, listNumbers));
  const min = (Math.min.apply(null, listNumbers));

  if (listNumbers.length !== 11) return 'Array com tamanho incorreto.';
  if (max > 9 || min < 0) return 'não é possível gerar um número de telefone com esses valores';
  if (test(listNumbers) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${listNumbers.slice(0, 2).join('')}) ${listNumbers.slice(2, 7).join('')}-${
    listNumbers.slice(7, 11).join('')}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  const line1 = Math.abs(lineA - lineB);
  const line2 = Math.abs(lineA - lineC);
  const line3 = Math.abs(lineB - lineC);

  if (lineA < line3) {
    return false;
  }

  if (lineB < line2) {
    return false;
  }

  if (lineC < line1) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(phrase) {
  // seu código aqui
  const theNum = phrase.match(/\d+/g);

  let total = 0;
  let newArray = theNum.map((index) => Number(index));
  let result = newArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue, total,
  );

  if (result < 2) {
    return `${result} copo de água`;
  }
  return `${result} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
