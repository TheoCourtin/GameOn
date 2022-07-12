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
const modalClose = document.querySelectorAll(".close");
const checkbox1 = document.querySelectorAll(".location1");
const btn = document.querySelectorAll('.btn-submit');



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
btn.forEach((btn) => btn.addEventListener("click", checkAgree));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

function checkAgree
{
  var submit = document.forms["formData"]['input[name=["checkbox2-label"]:checked'];
  if (submit.checked) {
    alert ('hi');
} else {
    alert ('bye');
}
}





function acceptValue() 
{
  var prenom = document.forms["formData"]["first"].value;
  var nom = document.forms["formData"]["last"].value;
  var email = document.forms["formData"]["email"].value;
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var birthdate = document.forms["formData"]["birthdate"].value;
  var checkbox = documen.forms["formData"]['input[name="location"]:checked'];
  var checkbox2 = documen.forms["formData"]['input[name="checkbox2"]:checked'];
  
  
  if (prenom == "" || prenom == null)                                  
  { 
    alert("Ce champ ne doit pas être vide.");
    return false;

  }

  if (nom == "")                                  
  { 
    alert("Ce champ ne doit être pas vide.");
  }

  if (email == "" || !regex.test(email)) {
    alert("Ce champ ne respecte pas les conditions.");
    return false;
  }

  if (birthdate == "" || birthdate == "jj/mm/aa")
  {
    alert("Ce champ ne remplis pas les conditions.");
  }

  if( checkbox == false)
  {
    alert("Veuillez cocher une ville.");
  }

  if( checkbox2 == false)
  {
    alert("Vous n'avez pas accepté les conditions d'utilisations");
  } 
    
}
