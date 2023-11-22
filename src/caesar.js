// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    input = input.toLowerCase().split('');
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = '';

    for (let i = 0; i < input.length; i++) {
      const isUpperCase = input[i] !== input[i].toLowerCase();
      const currentChar = input[i];

      const currentIndex = alphabet.indexOf(currentChar);

      if (currentIndex !== -1) {
        let newIndex;

        if (encode) {
          newIndex = (currentIndex + shift) % 26;
          newIndex = newIndex < 0 ? newIndex + 26 : newIndex;
        } else {
          newIndex = (currentIndex - shift) % 26;
          newIndex = newIndex < 0 ? newIndex + 26 : newIndex;
        }

        const newChar = alphabet[newIndex];
        result += isUpperCase ? newChar.toUpperCase() : newChar;
      } else {
        result += input[i];
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
