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


// const modalBtnClose = document.querySelector("#modalBtnClose");
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
};

function lauchModalConfirm()
{
  modalBgConfirm.style.display = "block";
};

function closeModalConfirm()
{
  modalBgConfirm.style.display = "none";
}




// Close modal event
modalCross[0].addEventListener ("click", closeModal);
modalCross[1].addEventListener ("click", closeModalConfirm);


// #2 Implement form entries

// form must be valide when user click on "submit"
const form = document.getElementById ('form');
const firstName = document.getElementById ('first');
const lastName = document.querySelector ('#last');
const eMail = document.getElementById ('email');
const birthDate = document.getElementById ('birthdate');
const quantityTournament = document.getElementById ('quantity');
const loc1 = document.getElementById ('location1');
const loc2 = document.getElementById ('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');
const checkbox1 = document.getElementById("checkbox1");

const dateFormat = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
const numbers = /^[0-9]+$/;
const regexMail =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;


	form.addEventListener('submit', (e) => {
	e.preventDefault();

  
  if (firstName.value.length < 2) {
    document.querySelector(".msg_firstname").textContent = "Veuillez remplir le champ Prénom";
    return false;
  } 
   if (lastName.value.length < 2) { 
    document.querySelector(".msg_lastname").textContent = "Veuillez remplir le champ Nom";
    return false;
  } 
   if (/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(eMail.value)) { 
    document.querySelector(".msg_email").textContent = "Veuillez remplir le champ email";
    return false;
  }
  
  if (dateFormat.test(birthDate.value)) { 
    document.querySelector(".msg_birthdate").textContent = "Veuillez entrer votre date de naissance";
    return false;
  }  
    
   if (!quantityTournament.value.match(numbers)) { 
    document.querySelector(".msg_quantityTournament").textContent = "Veuillez indiquer le nombre de tournois";
    return false;
  }  
   if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) { 
    document.querySelector(".msg_location").textContent = "Veuillez choisir une ville";
    return false;
  }

  if (!checkbox1.checked)
  {
    document.querySelector(".msg_checkbox1").textContent = "Veuillez cocher cette case";
    return false;
  }

  // document.querySelector(".btn-submit");
  closeModal();
  lauchModalConfirm();
  document.querySelector('form').reset();
  
  

})






