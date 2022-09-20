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
const modalBgConfirm = document.querySelector(".bground-thank");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.getElementsByClassName("close");
const msg_confirmation = document.querySelector(".thank-body");
const modalConfirmBtnClose = document.querySelector("#modalConfirmBtnClose");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalConfirmBtnClose.addEventListener("click", closeModalConfirm);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//  #1 TODO : close modal

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Lancement de la modal message de confirmation
function lauchModalConfirm() {
  modalBgConfirm.style.display = "block";
}

// Fermeture de la modal message de confirmation 
function closeModalConfirm() {
  modalBgConfirm.style.display = "none";
}

// Close modal event
modalCross[0].addEventListener("click", closeModal);
modalCross[1].addEventListener("click", closeModalConfirm);

// #2 Implement form entries

// Récupération des champs du formulaire
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.querySelector("#last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantityTournament = document.getElementById("quantity");
const loc1 = document.getElementById("location1");
const loc2 = document.getElementById("location2");
const loc3 = document.getElementById("location3");
const loc4 = document.getElementById("location4");
const loc5 = document.getElementById("location5");
const loc6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");

// Régex pour la date de naissance, le nombre de tournoi et le mail
const dateFormat = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

const numbers = /^[0-9]+$/;
const regexMail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,63})$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

 // Vérification si les champs du formulaire rentrée par l'utilisateur respecte les conditions 


 // Vérifie si la valeur firstName est inférieur à 2
  if (firstName.value.length < 2) {
    document.querySelector(".msg_firstname").textContent =
      "Veuillez remplir le champ Prénom";
    return false;
  } else {
    document.querySelector(".msg_firstname").style.display = "none";
  }

  // Vérifie si la valeur lastName est inférieur à 2
  if (lastName.value.length < 2) {
    document.querySelector(".msg_lastname").textContent =
      "Veuillez remplir le champ Nom";
    return false;
  } else {
    document.querySelector(".msg_lastname").style.display = "none";
  }

  // Vérifie si la valeur eMail respecte le régex
  if (!regexMail.test(eMail.value)) {
    document.querySelector(".msg_email").textContent =
      "Veuillez remplir le champ email";
    return false;
  } else {
    document.querySelector(".msg_email").style.display = "none";
  }
  
  // Vérifie si la valeur birthdateDate respecte le régex
  if (!dateFormat.test(birthDate.value)) {
    document.querySelector(".msg_birthdate").textContent =
      "Veuillez entrer votre date de naissance";
    return false;
  } else {
    document.querySelector(".msg_birthdate").style.display = "none";
  }

  // Vérifie si la valeur quantityTournament est un nombre
  if (!quantityTournament.value.match(numbers)) {
    document.querySelector(".msg_quantityTournament").textContent =
      "Veuillez indiquer le nombre de tournois";
    return false;
  } else {
    document.querySelector(".msg_quantityTournament").style.display = "none";
  }

  // Vérifie si une case ville est cochée
  if (
    !loc1.checked &&
    !loc2.checked &&
    !loc3.checked &&
    !loc4.checked &&
    !loc5.checked &&
    !loc6.checked
  ) {
    document.querySelector(".msg_location").textContent =
      "Veuillez choisir une ville";
    return false;
  } else {
    document.querySelector(".msg_location").style.display = "none";
  }

  // Vérifie si la case des conditions d'utilisations est cochée
  if (!checkbox1.checked) {
    document.querySelector(".msg_checkbox1").textContent =
      "Veuillez cocher la case des conditions d'utilisations";
    return false;
  }

 // Fermeture de la modal du formulaire
  closeModal();

  // Ouverture de la modal du message de confirmation
  lauchModalConfirm();

  // Réinitialise les données du formulaire après la fermture du message de validation
  document.querySelector("form").reset();
});
