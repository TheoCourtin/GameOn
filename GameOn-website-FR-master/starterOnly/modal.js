function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

  // Inputs Value
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");

// // Regex
const nameRegex = /^[a-z ,.'-][a-z ,.'-]+$/i;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const quantityRegex = /^[0-9]+/;
const birthdateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;


// div where to insert error text
const errorText = [
  "textErrorFirst",
  "textErrorLast",
  "textErrorEmail",
  "textErrorBirthdate",
  "textErrorQuantity",
  "textErrorLocation",
  "textErrorCheckbox",
];

// all the error texts
const errorMsg = [
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom",
  "Veuillez entrer 2 caractères ou plus pour le champ du nom",
  "Merci de renseigner une adresse email valide",
  "Vous devez entrer votre date de naissance",
  "Merci d'indiquer votre nombre de games",
  "Vous devez choisir une ville",
  "Vous devez vérifier que vous acceptez les termes et conditions",
];

// function to validate First name, Last name, Email, Birthdate, Quantity (tournament)
const validInput = (input, regex, errorTextId, errorMsg) => {
  let inputValue = input.value;
  if (regex.test(inputValue)) {
    document.getElementById(errorTextId).innerText = "";
    return true;
  } else {
    document.getElementById(errorTextId).innerHTML = errorText;
    return false;
  }
};

// function radio
const validateRadio = (event) => {
  let checkedLocation1 = location1.checked;
  let checkedLocation2 = location2.checked;
  let checkedLocation3 = location3.checked;
  let checkedLocation4 = location4.checked;
  let checkedLocation5 = location5.checked;
  let checkedLocation6 = location6.checked;
  if (
    checkedLocation1 == false &&
    checkedLocation2 == false &&
    checkedLocation3 == false &&
    checkedLocation4 == false &&
    checkedLocation5 == false &&
    checkedLocation6 == false
  ) {
    document.getElementById(errorText[5]).innerHTML = errorMsg[5];
    return false;
  } else {
    document.getElementById(errorText[5]).innerHTML = "";
    return true;
  }
};

// function checkbox (CGU)
const validateCheckbox = (event) => {
  if (!conditionsCheckBox1.checked) {
    document.getElementById(errorText[6]).innerHTML = errorMsg[6];
    return false;
  } else {
    document.getElementById(errorText[6]).innerHTML = "";
    return true;
  }
};

// FONCTION DE VALIDATION
// First name
const validate = () => {
  const isFirstNameValid = validInput(
    first,
    nameRegex,
    errorText[0],
    errorMsg[0]
  );
  // Last name
  const isLastNameValid = validInput(
    last,
    nameRegex,
    errorText[1],
    errorMsg[1]
  );
  // Email
  const isEmailValid = validInput(
    email,
    emailRegex,
    errorText[2],
    errorMsg[2]
  );
  // Birthdate
  const isBirthdateValid = validInput(
    birthdate,
    quantityRegex,
    errorText[3],
    errorMsg[3]
  );
  // Quantity (tournament)
  const isQuantityValid = validInput(
    quantity,
    quantityRegex,
    errorText[4],
    errorMsg[4]
  );
  // Radio
  const isRadioValid = validateRadio();
  // Checkbox (CGU)
  const isCheckboxValid = validateCheckbox();

  return (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isBirthdateValid &&
    isQuantityValid &&
    isRadioValid &&
    isCheckboxValid
  );
};

// form sending
document.getElementById("inscription").addEventListener("submit", function (event) {
    event.preventDefault(); // on le met si erreur afin de ne pas envoyé le formulaire

    if (validate(event)) {
      const messageValidation = document.getElementById("submitMessage");
      messageValidation.style.display = "block";
      const form = document.getElementById("inscription");
      form.style.display = "none";
    }
  });

// close button after validation
const btnValidation = document.querySelector("btn-validation");
if (btnValidation) 
{
	btnValidation.addEventListener("click", close);
}


