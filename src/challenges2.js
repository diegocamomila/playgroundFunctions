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
const test = (listNumbers) => {
  listNumbers.sort();
  let current = null;
  let cnt = 0;

  for (let index = 0; index < listNumbers.length; index += 1) {
    if (listNumbers[index] !== current) {
      current = listNumbers[index];
    } else cnt += 1;
  }

  if (cnt === 3) {
    return true;
  }
};

// Desafio 11
function generatePhoneNumber(listNumbers) {
  const max = (Math.max.apply(null, listNumbers));
  const min = (Math.min.apply(null, listNumbers));

  if (listNumbers.length !== 11) return 'Array com tamanho incorreto.';
  if (max > 9 || min < 0) return 'não é possível gerar um número de telefone com esses valores';
  if (test(listNumbers) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let phone = `(${listNumbers.slice(0, 2).join('')}) ${listNumbers.slice(2, 7).join('')}-${
    listNumbers.slice(7, 11).join('')}`;
  return phone;
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
