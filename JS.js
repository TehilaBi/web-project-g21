
function validateGiftInput(amount,email) {
    var ValidAmount, ValidEmail;

    // If amount is Not a Number or less than 0
    if (isNaN(amount) || amount < 0) {
        ValidAmount=false;
        alert("Please enter amount greater than 0");
    } else {
        ValidAmount=true;
    }

    // If email adress is valid - contain @
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        ValidEmail=true;
    } else {
        ValidEmail=false;
        alert("Please enter valid Email address");

    }

    if(ValidAmount==true && ValidEmail==true){
        alert("Add to cart successfully!");
        window.open('../html/newGeneral.html');
        window.close();
    
      }

  }

  function validateDate(date){
    var today = new Date();
    var yearT = today.getFullYear();
    var yearD = date.substring(0,4);
    var monthT = today.getMonth() + 1;
    var monthD = date.substring(5,7);
    var dayT = today.getDate();
    var dayD = date.substring(8,10);

    if(yearD==yearT){
      if(monthD<monthT){
       alert("Please enter a valid date");
      }
      else if(monthD==monthT && dayD<dayT){
       alert("Please enter a valid date");
      }
      else {
        alert("The workshop added to the cart!");
        window.open('../html/newGeneral.html');
        window.close();
      }
    }
    else if(yearD<yearT){
      alert("Please enter a valid date");
    }
    else{
      alert("The workshop added to the cart!");
      window.open('../html/newGeneral.html');
      window.close();
    }
    

  }

// validation and messages of contact me 
function MessBox_contactMe(phone,email){
  var ValidPhone, ValidEmail;
  var re = /^[0-9]{0,20}$/im;
  // checks if email address is valid 
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      ValidEmail=true;
  } else {
      ValidEmail=false;
      alert("Please enter valid Email address");

  }// checks if phone is valid (0 to 20 characters)
  if(re.test(phone)) {
    ValidPhone=true;
  }
  else {
    ValidPhone=false;
    alert("Please enter valid Phone Number");

}
  
  if(ValidEmail==true && ValidPhone==true){
    alert("Thank you! Your message has been received");
    window.open('../html/newGeneral.html');
    window.close();

}
}

// validation and messages of sign up connect 
function MessBox_connectUP(fname,lname,email,pas){

  var ValidEmail;
  var ValidName;
  var ValidPas;

  // checks if email address is valid 
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) ) {
      ValidEmail=true;
  } else{
    ValidEmail=false;
    alert("Please enter valid Email address");
}

  if (!isNaN(fname)) {
    ValidName = false;
    alert("Please enter First name ");
  } else {
    ValidName=true;
  }

  if (!isNaN(lname)) {
    ValidName = false;
    alert("Please enter Last name");
  } else {
    ValidName=true;
  }

  if (isNaN(pas)) {
    ValidPas = false;
    alert("Choose password!");
  } else {
    ValidPas=true;
  }

  if(ValidEmail==true && ValidName==true && ValidPas==true ){
    alert("Connect successfully!");
    window.open('../html/newGeneral.html');
    window.close();
  }

}

// validation and messages of sign in connect
function MessBox_connectIN(email,pas){

  var ValidEmail;
  var ValidPas;

  // checks if email address is valid 

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) ) {
      ValidEmail=true;
  } else{
    ValidEmail=false;
    alert("Please enter valid Email address");
}

  if (isNaN(pas)) {
    ValidPas = false;
    alert("select password!");
  } else {
    ValidPas=true;
  }

  if(ValidEmail==true &&  ValidPas==true){
    alert("Connect successfully!");
    window.open('../html/newGeneral.html');
    window.close();
  }

}

// by press sign up - sing in display off
function signUpClick() {
  var x = document.getElementById("signup");
  var y = document.getElementById("signin");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

// by press sign in - sign up display off
function signInClick() {
  var x = document.getElementById("signin");
  var y = document.getElementById("signup");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}



// able and disable fields in the forms
function disable_fn(){
  document.getElementById('FirstName').disabled=true;

}

function able_fn(){
  document.getElementById('FirstName').disabled=false;

}

function disable_ln(){
  document.getElementById('LastName').disabled=true;

}

function able_ln(){
  document.getElementById('LastName').disabled=false;

}

function disable_e_u(){
  document.getElementById('Emailup').disabled=true;

}

function able_e_u(){
  document.getElementById('Emailup').disabled=false;

}


function disable_p_u(){
  document.getElementById('pwdup').disabled=true;

}

function able_p_u(){
  document.getElementById('pwdup').disabled=false;

}

function disdable_e_i(){
  document.getElementById('Emailin').disabled=true;

}

function able_e_i(){
  document.getElementById('Emailin').disabled=false;

}

function disable_p_i(){
  document.getElementById('pwdin').disabled=true;

}

function able_p_i(){
  document.getElementById('pwdin').disabled=false;

}




function forgotPassword(EmailAdress){

  var newPass = Math.random().toString(36).slice(-8);

  Email.send({ 
    Host: "smtp.gmail.com", 
    Username: "chloecookies.isreal@gmail.com", 
    Password: "Chloe123!", 
    To: EmailAdress, 
    From: "chloecookies.isreal@gmail.com", 
    Subject: "Your Chloe's Cookies new password is ready" , 
    Body: "Your new password is " + newPass +"." + " I will be happy to see you,Chloe.", 
  })  
 
  alert("New password sent to your Email!");
  window.open('../html/newGeneral.html');
  window.close();
}



function addedToCart(){
    alert("The product added to the cart!");
    window.open('../html/newGeneral.html');
    window.close();
}


function filterSelection(c) {
  var x, j;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (j = 0; j < x.length; j++) {
    RemoveClass(x[j], "show");
    if (x[j].className.indexOf(c) > -1) AddClass(x[j], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var j, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (j = 0; j < arr2.length; j ++) {
    if (arr1.indexOf(arr2[j]) == -1) {
      element.className += " " + arr2[j];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var j, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (j = 0; j < arr2.length; j++) {
    while (arr1.indexOf(arr2[j]) > -1) {
      arr1.splice(arr1.indexOf(arr2[j]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var j = 0; j < btns.length; j++) {
  btns[j].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}