/* -------------------- HTML ELEMENTS ------------------- */

let emailInput = document.getElementById("email");
let inputWrapper = document.querySelector(".input-wrapper");
let indicator = document.querySelector(".indicator");
let errorMessage = document.querySelector(".error-message");

/* ---------------------- FUNCTIONS --------------------- */

const renderValid = () => {
  inputWrapper.style.border = `1px solid var(--desaturated-red)`;
  indicator.style.visibility = "hidden";
  errorMessage.style.display = "none";
};

const renderInvalid = () => {
  inputWrapper.style.border = `2px solid var(--soft-red)`;
  indicator.style.visibility = "visible";
  errorMessage.style.display = "block";
};

/* ------------------- EVENT LISTENERS ------------------ */

document.addEventListener("keyup", (event) => {
  console.log(emailInput.value);
  console.log(emailInput.checkValidity());

  let isInputValid = emailInput.checkValidity();

  if (isInputValid) {
    renderValid();
  } else {
    renderInvalid();
  }
});
