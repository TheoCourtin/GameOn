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
const form = document.getElementById ('#form');
const firstName = document.getElementById ('"first');
const lastName = document.getElementById ('#last');
const eMail = document.getElementById ('#email');
const birthDate = document.getElementById ('#birthdate');
const quantityTournament = document.getElementById ('#quantity');
const loc1 = document.getElementById ('#location1');
const loc2 = document.getElementById ('#location2');
const loc3 = document.getElementById ('#location3');
const loc4 = document.getElementById ('#location4');
const loc5 = document.getElementById ('#location5');
const loc6 = document.getElementById ('#location6');

const dateFormat = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const numbers = /^[0-9]+$/;


// form.addEventListener('submit', (e) => {
  // e.preventDefault();
// })

function validate () {
	form.addEventListener('submit', (e) => {
	e.preventDefault();
})
  if (firstName.value === '' && firstName.lenght > 1) {
    alert ("Veuillez remplir le champ Prénom");
    return false;
  } 
  else if (lastName.value === '' && lastName.lenght > 1) { 
    alert ("Veuillez remplir le champ Nom");
    return false;
  } 
  else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value)) { 
    alert ("Veuillez remplir le champ email");
    return false;
  }
  // else if (!birthDate.value.match(dateFormat)) { 
  //   alert ("Veuillez remplir votre date d'anniversaire");
  //   return false;
  // }
  else if (!quantityTournament.value.match(numbers)) { 
    alert ("Veuillez indiquer le nombre de tournois");
    return false;
  }
  else if (!quantityTournament.value.match(numbers)) { 
    alert ("Veuillez indiquer le nombre de tournois");
    return false;
  }
  else if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) { 
    alert ("Veuillez choisir une ville");
    return false;
  }

}

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
