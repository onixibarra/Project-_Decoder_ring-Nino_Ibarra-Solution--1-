// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    const encryptionKeys = {};
    const standardAlph = "abcdefghijklmnopqrstuvwxyz"
    if(!alphabet || alphabet.length < 26 || alphabet.length > 26) return false;


    for(let i = 0; i <= 25; i++){ //fill our object with normal alphabet keys paired with substitution keys
      if(Object.values(encryptionKeys).includes(alphabet[i])){ return false; } //if a value in encryptionKeys already exists (is alphabet[c])
      else{
        encryptionKeys[standardAlph[i]] = alphabet[i]; //set each key to a normal alphabet letter, value to a new alphabet char
      }
    }
    console.log(encryptionKeys)
    const buildEncryption = input.toLowerCase().split('');

    { //encode or decode here
		  return buildEncryption.map(letter => {  //iterate through each letter in our input
            if(letter == " ") return " "; //keep spaces
            
            if(encode) return encryptionKeys[letter];
            
		  	for(let key in encryptionKeys){  //iterate through each object in encryptionKeys
		  		let substitutionLetter = encryptionKeys[key]; //set our keyvalue to substitutionLetter
          
		 
          if(!encode && letter == substitutionLetter) return key; //decode - if our input letter equals a substitution letter, return the plain letter
      }
		}).join('');
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };