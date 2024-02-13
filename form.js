// form
"use strict";

const formElement = document.getElementById("resgitration");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const errors = {};

  //username
  let usernameValue = document.getElementById("usernamefield").value;

  if (usernameValue == "") {
    errors.username = "Username Field can not be emtpy";
  }

  // password
  let passwValue = document.getElementById("passwordfield").value;
  let passw2Value = document.getElementById("passwordfield2").value;

  if (passwValue == "") {
    errors.passw = "Password field can not be emtpy";
  }

  if (passwValue != passw2Value) {
    errors.passw2 = "Passwords do not match";
  }

  // radio
  let gender = false;

  formElement.querySelectorAll('[name = "gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please select Your Gender";
  }
  // formElement.querySelectorAll('.radio-class')

  //checkbox
  let checkInput = document.getElementById("agree").checked;

  if (!checkInput) {
    errors.check = "You must agree our terms and conditions";
  }

  formElement.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });

  // შეცდომები
  for (let item in errors) {
    console.log(item); //key in errors

    let errorPElement = document.getElementById("error-" + item);
    console.log(errorPElement);

    if (errorPElement) {
      errorPElement.textContent = errors[item];
    }
    //
    // <p id="error-username">Username Field can not be emtpy'</p>
    // <p id="error-passw">Password field can not be emtpy</p>
  }

  console.log(errors);
  if (Object.keys(errors).length == 0) {
    formElement.submit();
  }
});

// let errors = {
// key: value
// username: 'Username Field can not be emtpy',
// passw: 'Password field can not be emtpy',
// passw2:'Passwords do not match',
// gender:'Please select Your Gender',
// check: 'You must agree our terms and conditions'
// }

// show hide password
let passwShow = document.getElementById("passwordfield");
let icon = document.getElementById("showIcon");

let showHidePassword = () => {
  if (passwShow.type == "password") {
    passwShow.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwShow.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
};

icon.addEventListener("click", showHidePassword);

// email validation - regex
let email = document.getElementById("emailfield");

function validationEmail() {
  let emailValue = document.getElementById("emailfield").value;
  let emailErrorText = document.getElementById("emailError");
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regex.test(emailValue)) {
    emailErrorText.innerText = "Your Email Is Valid";
    emailErrorText.style.color = "green";
  } else {
    emailErrorText.innerText = "Your Email Is Invalid";
    emailErrorText.style.color = "red";
  }

  if (emailValue == "") {
    emailErrorText.innerHTML = " ";
  }
}

email.addEventListener("keyup", validationEmail);

// Username Validation

const username = document.getElementById("usernamefield");

function validateUsername() {
  const usernameValue = username.value;
  const usernameError = document.getElementById("error-username");
  const regex = /^[a-zA-Z0-9_]{3,15}$/; 

  if (regex.test(usernameValue)) {
    usernameError.textContent = "Username is valid";
    usernameError.style.color = "green";
  } else {
    usernameError.textContent = "Username is invalid)";
    usernameError.style.color = "red";
  }

  if (usernameValue === "") {
    usernameError.textContent = "";
  }
}

username.addEventListener("keyup", validateUsername);




// oop
const PersonInfo = function (firstName, birthYear) {
  this.userFirstName = firstName;
  this.userbirthYear = birthYear;
};

PersonInfo.prototype.getUserAge = function () {
  console.log(2024 - this.userbirthYear);
};

const NewObj = function (firstName, birthYear, lastName) {
  PersonInfo.call(this, firstName, birthYear);
  this.userLastName = lastName;
};

const info = new PersonInfo("anna", 2002);
const info2 = new PersonInfo("irakli", 1990);
const info3 = new PersonInfo("lasha", 1994);

const infoNew = new NewObj("beka", 1994, "ragaca");
console.log(infoNew);
console.log(info);
console.log(info2);
console.log(info3);

info3.getUserAge();

// 1. {}
// 2. this value = {}
// 3.prototype
// 4. abrunebs obiekts

// classes
class Person {
  constructor(firstName, birthYear) {
    this.userFirstName = firstName;
    this.userbirthYear = birthYear;
  }
  printAge() {
    console.log(2024 - this.userbirthYear);
  }
}

class newPersonInfo extends Person {
  constructor(firstName, birthYear, lastName) {
    super(firstName, birthYear);
    this.userLastname = lastName;
  }
}

const obj1 = new Person("nini", 1993);
const obj2 = new newPersonInfo("levani", 2001, "smith");
obj1.printAge();
console.log(obj1);
console.log(obj2);
obj2.printAge();

// npm
axios
  .get("https://reqres.in/api/users?page=")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));
