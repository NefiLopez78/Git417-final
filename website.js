// JavaScript Document
'use strict';
/*i dont know what im doing*/
function productDisplay(){
let prod1 = document.querySelector("#product1");
let prod2 = document.querySelector("#product2");
let prod3 = document.querySelector("#product3");

let clickBtn1 = document.querySelector("#btn1");
let clickBtn2 = document.querySelector("#btn2");
let clickBtn3 = document.querySelector("#btn3");





clickBtn1.addEventListener("click", function(){
	prod1.classList.toggle("hidden");
});

clickBtn2.addEventListener("click", function(){
	prod2.classList.toggle("hidden");
});

clickBtn3.addEventListener("click", function(){
	prod3.classList.toggle("hidden");
});
	
}

function toggleImage() {
    let img = document.getElementById("image");
    
    if (img.src.endsWith("light_mode.png")) {
        img.src = "dark_mode.png";
    } else {
        img.src = "light_mode.png";
    }
    return false;
}
    
function toggleMode() {
    let body = document.getElementsByTagName("body")[0];
    
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
}


/* guessing game*/
function randomNum() {
    let randNum = Math.floor(Math.random() * 10) + 1;
    let numInput = document.getElementById("numGuess");/* numGuess*/
    let userInput = Number(numInput.value);
    let output = document.getElementById("gameOutput");

    if (randNum === 0 || userInput === 0 || userInput === "") {
        output.innerHTML = "Please enter a number between 1 and 10.";
    } else if (randNum === userInput) {
        output.innerHTML = `<h2>You Win!</h2> <br>Your Guess = ${userInput} <br>Winning Number = ${randNum}`; /*$${userInput} */
    } else {
        output.innerHTML = `<h2>Sorry! Try Again!</h2> <br>Your Guess = ${userInput} <br>Winning Number = ${randNum}`;
    }
    event.preventDefault();
    output = "";
}

function validateForm(event){

  event.preventDefault();

  let fullName  = document.getElementById("fullName");
  let emailAdd = document.getElementById("emailAdd");
  let phoneNum = document.getElementById("phoneNum");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let perferred = document.getElementById("perferred");
  let confirm = document.getElementById("confirm");

  perferred.classList.add("hidden");
  confirm.classList.add("hidden");

  let contact = "";
  
  let fullNameRegex = /[a-z]\s[a-z]/i;
  let emailAddRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  let phoneNumRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  fullName.classList.remove("error");
  emailAdd.classList.remove("error");
  phoneNum.classList.remove("error");
  message.classList.remove("error");
  
  fullName.nextElementSibling.classList.add("hidden");
  emailAdd.nextElementSibling.classList.add("hidden");
  phoneNum.nextElementSibling.classList.add("hidden");
  message.nextElementSibling.classList.add("hidden");
	
  perferred.innerHTML = "";
  confirm.innerHTML = "";

  let isValid = true;

  if(!fullNameRegex.test(fullName.value)){
   
    isValid = false;
    fullName.classList.add("error");
    fullName.nextElementSibling.classList.remove("hidden");
  }

  if(!emailAddRegex.test(emailAdd.value)){

    isValid = false;
    emailAdd.classList.add("error");
    emailAdd.nextElementSibling.classList.remove("hidden");
  }

  if(!phoneNumRegex.test(phoneNum.value)){

    isValid = false;
    phoneNum.classList.add("error");
    phoneNum.nextElementSibling.classList.remove("hidden");
  }

  if(phone.checked){
    
    contact = "Phone";
    perferred.classList.remove("hidden");
 
  }else if(email.checked){ 
    
    contact = "Email"; 
    perferred.classList.remove("hidden");
    
  }

  if(isValid){
    
    confirm.classList.remove("hidden");
    confirm.innerHTML = "<strong>You Entered:</strong> <br> Full Name: " + fullName.value + "<br>Email: " + emailAdd.value + "<br>Phone Number: " + phoneNum.value + "<br>Perferred method of contact: " + contact + "<br>Message: " + message.value;
    
    document.getElementById("newAcct").submit();
    fullName.value = "";
    emailAdd.value = "";
    phoneNum.value = "";
    message.value = "";
    phone.checked = true;
    email.checked = false;
  }
}

document.getElementById("newAcct").addEventListener("submit", validateForm);
document.getElementById("guessGame").addEventListener("click", randomNum);