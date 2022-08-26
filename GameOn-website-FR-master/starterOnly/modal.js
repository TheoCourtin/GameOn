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
const modalCross = document.getElementsByClassName("close");

// const modalBtnClose = document.querySelectorAll("modalBtnClose");
// const msg_confirmation = document.querySelector("msg_confirmation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//  #1 TODO : close modal

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
};




// Close modal event
modalCross[0].addEventListener ("click", closeModal);


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

  console.log(lastName.value);
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
})




//V2

// const prenom = document.getElementById("first");
// const nom =  document.getElementById("last");
// const email =  document.getElementById("email");
// const naissance = document.getElementById("birthdate");
// const nombreTournois = document.getElementById("quantity");
// const location1 = document.getElementById("location1");
// const location2 =  document.getElementById("location2");
// const location3 =  document.getElementById("location3");
// const location4 =  document.getElementById("location4");
// const location5 =  document.getElementById("location5");
// const location6 =  document.getElementById("location6");
// const checkbox1 = document.getElementById("checkbox1");
// const checkbox2 = document.getElementById("checkbox2");


// var mailCaractere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})
// )$/;

// function validate () {

  // if (prenom.value === '' || prenom.value.length< 2)

  // {
    // alert ("Remplir votre prénom avec 2 lettres minimums");  
    // event.preventDefault();
  // }

  // if (nom.value === '' || nom.value.length < 2)
  // {
    // alert ("Remplir votre nom avec 2 lettres minimums");  
    // event.preventDefault();
  // }
  // if (naissance.value ===''){
    // alert("entrez une date de naissance");
    // event.preventDefault();
  // }

  // if (nombreTournois.value === ''){
    // alert ("Indiquez le nombre de tournois GameOn");
    // event.preventDefault();
  // }

  // if(mailCaractere.test(document.getElementById("email").value)){
    // alert(" OK");
  // }
  // else{
    // alert ("Entrez une adresse mail correct ");  
    // event.preventDefault();
  // }

  // if ((location1.checked)|| (location2.checked) || (location3.checked)
    // ||(location4.checked) ||(location5.checked) ||(location6.checked)) {
    // alert("bouton selectionné");
  // }
  // else{
    // alert ("Selectionner un bouton"); 
    // event.preventDefault();
  // }

  // if(checkbox1.checked){
    // alert("Condition selectionné");
  // }
  // else{
    // alert("Veuillez accepter les condtions d'utilisation");
    // event.preventDefault();
  // }

// }
