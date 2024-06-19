const inputUser = document.getElementById("text-input");
const checkButtonUser = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
let inputUserValue = inputUser.value;

const checkPalindrome = (input) => {
  const givenInput = input;
  if (input == "") {
    alert("Please input a value"); // done to ensure that the input is not empty.
    return;
  }

  resultDiv.replaceChildren(); // done to remove the previous result of palindrome.

  const normalInput = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase(); // done to remove the punctuations
  const reversedInput = normalInput.split("").reverse().join(""); // done to reverse the userinput value
  const pValue = document.createElement("p");
  pValue.style.fontSize = "18px";

  pValue.className = "output";
  if (normalInput == reversedInput) {
    pValue.innerHTML = `${givenInput} is a palindrome`;
  } else {
    pValue.innerHTML = `${givenInput} is not a palindrome`;
  }
  resultDiv.appendChild(pValue);
  resultDiv.classList.remove("hidden");
};

checkButtonUser.addEventListener("click", () => {
  checkPalindrome(inputUser.value);
  inputUser.value = "";
});

inputUser.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkPalindrome(inputUser.value);
    inputUser.value = "";
  }
});
