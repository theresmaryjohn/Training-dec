const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate"); //the button
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
//we want the functionality to copy it from clipboard
clipboardEl.addEventListener('click',()=>{
    const textarea=document.createElement('textarea')
    const password=resultEl.innerText
    if(!password){
        return
    }
    textarea.value=password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  //we want to know what all elements are checked
  //below comes as true or false value if checked or unchecked
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  console.log(hasLower, hasUpper, hasNumber, hasSymbol);
  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  console.log(typesCount); //count of how many are selected
  // const typesArr=[{lower},{upper}, {number}, {symbol}]
  // console.log(typesArr);
  //if an array element is false filter it out
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (randomFunc) => Object.values(randomFunc)[0]
  );
  //if falsy values filter it from the array
  console.log(typesArr);

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      console.log(funcName);
      generatedPassword += randomFunc[funcName]();
      //the empty string will be now appended with random lower,upeer,number,symbol order upto 20
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
  //put inito unnertest of resultEL
}

function getRandomLower() {
  // return String.fromCharCode(98)
  //the lowercase characters start from 97(a) to 122(z)
  //26 alphabets
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());
function getRandomNumber() {
  //0-9
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}=[]/,.";
  console.log(symbols);
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());
