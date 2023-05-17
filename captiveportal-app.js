"use strict";

const loginForm = document.querySelector(".login");

const loginTitle = document.querySelector(".login__title");

const signUpform = document.getElementById("enregistrement");

const signUpTitle = document.querySelector(".signUp__title");

const cpfInput = document.querySelector(".cpf__input");
const cpfError = document.querySelector(".cpf__error");
cpfError.style.display = "none";
const cpfErrorContribuitor = document.querySelector(".cpf__error-contribuitor");
cpfErrorContribuitor.style.display = "none";

const fullNameInput = document.querySelector(".full-name__input");
const fullNameError = document.querySelector(".full-name__error");
fullNameError.style.display = "none";

const passwordInputRegister = document.querySelector(
  ".password-register__input"
);
const passwordErrorRegister = document.querySelector(
  ".password-register__error"
);
passwordErrorRegister.style.display = "none";

const checkbox = document.getElementById("terms_of_use");
const checkboxError = document.querySelector(".checkbox__error");
checkboxError.style.display = "none";

const checkboxTerms = document.querySelector(".checkbox__terms");
checkboxTerms.style.display = "none";

const termsLink = document.querySelector(".terms__link");

const termsButton = document.querySelector(".terms__button");

const selectContainer = document.querySelector(".contributions-period-container");
const contributionPeriodDefault = document.querySelector(
  ".contribution-period__default"
);
const contributionPeriodError = document.querySelector(
  ".contribution-period__error"
);
contributionPeriodError.style.display = "none";

const registerButton = document.querySelector(".register__button");

const registerAlreadyRegistred = document.querySelector(
  ".register__already-registred"
);

const anotherOption = document.querySelector(".another-option");

const voucherForm = document.querySelector(".voucher");

const voucherInput = document.querySelector(".voucher__input");
const voucherError = document.querySelector(".voucher__error");
voucherError.style.display = "none";

const voucherButton = document.querySelector(".voucher__button");

const userInput = document.querySelector(".user__input");
const userError = document.querySelector(".user__error");
userError.style.display = "none";

const passwordInput = document.querySelector(".password__input");
const passwordError = document.querySelector(".password__error");
passwordError.style.display = "none";

const loginButton = document.querySelector(".login__button");

const loginNotRegistred = document.querySelector(".login__not-registred");

const validate = function (input, error) {
  let status = true;

  if (input.value == "") {
    input.classList.add("error");
    error.classList.add("error-text");
    error.style.display = "block";
    input.focus();
    status = false;
  }
  return status;
};

const removeErrors = function (input, error) {
  input.classList.remove("error");
  error.classList.remove("error-text");
  error.style.display = "none";
};

const validateIsContributor = async function () {
  let status = true;

  const response = await fetch("./captiveportal-contribuintes.txt");
  const data = await response.text();

  let contribuitors = data;
  const lineBreak = /\r/g;
  const newLine = /\n/g;

  contribuitors = contribuitors
    .replace(lineBreak, "")
    .replace(newLine, "")
    .split(",");

  if (!contribuitors.includes(cpfInput.value)) {
    cpfInput.classList.add("error");
    cpfErrorContribuitor.classList.add("error-text");
    cpfErrorContribuitor.style.display = "block";
    cpfInput.focus();
    status = false;
  }

  return status;
};

const removeContributionPeriodDefault = function () {
  contributionPeriodDefault.style.display = "none";
};

removeContributionPeriodDefault();

const validateCheckbox = function () {
  let status = true;

  if (!checkbox.checked) {
    checkbox.classList.add("error");
    checkboxError.classList.add("error-text");
    checkboxError.style.display = "block";
    status = false;
  } else {
    removeErrors(checkbox, checkboxError);
  }
  return status;
};

const handleTermsLinkClick = function () {
  checkboxTerms.style.display = "flex";
};

const handleTermsButtonClick = function (event) {
  event.preventDefault();
  checkboxTerms.style.display = "none";
};

const validateVoucherInput = function (event) {
  let status = true;

  if (voucherInput.value == "") {
    voucherInput.classList.add("error");
    voucherError.classList.add("error-text");
    voucherError.style.display = "block";
    voucherInput.focus();
    event.preventDefault();
    status = false;
  }
  return status;
};

const validateSignUp = async function () {
  if (
    validate(cpfInput, cpfError) &&
    validate(fullNameInput, fullNameError) &&
    validate(passwordInputRegister, passwordErrorRegister) &&
    validate(selectContainer, contributionPeriodError) &&
    validateCheckbox() &&
    (await validateIsContributor())
  ) {
    signUpform.submit();
  }
};

const validateLogin = function (event) {
  if (
    validate(userInput, userError) &&
    validate(passwordInput, passwordError)
  ) {
    loginForm.submit();
  } else {
    event.preventDefault();
  }
};

const changeAuthenticationMethodLogin = function () {
  signUpTitle.style.display = "none";
  signUpform.style.display = "none";
  anotherOption.style.display = "none";
  voucherForm.style.display = "none";

  loginTitle.style.display = "block";
  loginForm.style.display = "block";
};

const changeAuthenticationMethodSignUp = function () {
  signUpTitle.style.display = "block";
  signUpform.style.display = "flex";
  anotherOption.style.display = "block";
  voucherForm.style.display = "flex";

  loginTitle.style.display = "none";
  loginForm.style.display = "none";
};

termsLink.addEventListener("click", handleTermsLinkClick);

termsButton.addEventListener("click", handleTermsButtonClick);

registerButton.addEventListener("click", validateSignUp);

registerAlreadyRegistred.addEventListener(
  "click",
  changeAuthenticationMethodLogin
);

voucherButton.addEventListener("click", validateVoucherInput);

loginButton.addEventListener("click", validateLogin);

loginNotRegistred.addEventListener("click", changeAuthenticationMethodSignUp);

cpfInput.addEventListener("keydown", function () {
  removeErrors(cpfInput, cpfError);
});

cpfInput.addEventListener("keydown", function () {
  removeErrors(cpfInput, cpfErrorContribuitor);
});

fullNameInput.addEventListener("keydown", function () {
  removeErrors(fullNameInput, fullNameError);
});

passwordInputRegister.addEventListener("keydown", function () {
  removeErrors(passwordInputRegister, passwordErrorRegister);
});

checkbox.addEventListener("click", function () {
  removeErrors(checkbox, checkboxError);
});

voucherInput.addEventListener("keydown", function () {
  removeErrors(voucherInput, voucherError);
});

selectContainer.addEventListener("change", function () {
  removeErrors(selectContainer, contributionPeriodError);
});

userInput.addEventListener("keydown", function () {
  removeErrors(userInput, userError);
});

passwordInput.addEventListener("keydown", function () {
  removeErrors(passwordInput, passwordError);
});
