// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

function polybius(input, encode = true) {
  const polybiusSquare = {
    1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' },
    2: { 1: 'f', 2: 'g', 3: 'h', 4: 'i/j', 5: 'k' },
    3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p' },
    4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u' },
    5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z' },
  };

  const lowerCaseInput = input.toLowerCase().split('');
  const messageNoSpaces = lowerCaseInput.filter((nums) => nums !== ' ');

  if (!encode) {
    let decodeString = '';
    if (messageNoSpaces.length % 2 !== 0) return false;
    for (let index = 0; index < lowerCaseInput.length; index += 2) {
      if (lowerCaseInput[index] === ' ') {
        decodeString += ' ';
        index--;
      } else {
        decodeString += polybiusSquare[lowerCaseInput[index + 1]][lowerCaseInput[index]];
      }
    }
    return decodeString;
  } else {
    const buildEncryption = [];
    for (let letter of lowerCaseInput) {
      if (letter === ' ') {
        buildEncryption.push(' ');
      } else {
        for (let c = 1; c < 6; c++) {
          for (let i = 1; i < 6; i++) {
            if (polybiusSquare[c][i].includes(letter)) {
              buildEncryption.push(i, c);
            }
          }
        }
      }
    }
    return buildEncryption.join('');
  }
}

module.exports = { polybius };

