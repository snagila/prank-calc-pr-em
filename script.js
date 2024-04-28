const allButtonsElm = document.querySelectorAll(".btn");
const displayElm = document.querySelector(".display");
let strToDisplay = "";
const operators = ["%", "+", "-", "/", "*"];

const buttonAction = (value) => {
  if (value === "AC") {
    strToDisplay = "";
    return display(strToDisplay);
  }
  if (value === "C") {
    strToDisplay = strToDisplay.slice(0, -1);
    return display(strToDisplay);
  }

  if (value === "=") {
    const lastChar = strToDisplay[strToDisplay.length - 1];
    if (operators.includes(lastChar)) {
      strToDisplay = strToDisplay.slice(0, -1);
    }
    return displayTotal();
  }

  if (operators.includes(value)) {
    const lastChar = strToDisplay[strToDisplay.length - 1];
    if (operators.includes(lastChar)) {
      strToDisplay = strToDisplay.slice(0, -1);
    }
  }

  strToDisplay += value;
  display(strToDisplay);
};

allButtonsElm.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;
    buttonAction(value);
  });
});

const display = (str) => {
  displayElm.innerText = str || "0.0";
};

const displayTotal = () => {
  const total = eval(strToDisplay);
  strToDisplay = total;
  display(strToDisplay);
};
