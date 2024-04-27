const allButtonsElm = document.querySelectorAll(".btn");
const displayElm = document.querySelector(".display");
let strToDisplay = "";

const buttonAction = (value) => {
  if (value === "AC") {
    strToDisplay = "";
    return display(strToDisplay);
  }
  if (value === "=") {
    const total = eval(strToDisplay);
    display(total);
    return;
  }
  strToDisplay += value;
  display(strToDisplay);
};

// attached click event to all the buttons
allButtonsElm.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;
    buttonAction(value);
  });
});

// update clicked button value to display area
const display = (str) => {
  displayElm.innerText = str || "0.0";
};

// calculate total
// const displayTotal = () => {
//   const total = eval(strToDisplay);
// };
