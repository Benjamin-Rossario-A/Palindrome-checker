const inputUser = document.getElementById("text-input");
const checkbuttonUser = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
let inputUserValue = inputUser.value;

const checkPalindrome = (input) => {
  const givenInput = input;
  if (input == "") {
    document.alert("Please input a value");
    return;
  }

  const normalInput = input.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
  const reversedInput = input.split("").reverse().join("");
  if (normalInput === reversedInput) {
  }
};
