
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


function MessBox_contactMe(phone,email){
  var ValidPhone, ValidEmail;
  var re = /^[0-9]{0,20}$/im;
  // checks if email address is valid 
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      ValidEmail=true;
  } else {
      ValidEmail=false;
      alert("Please enter valid Email address");

  }

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


function MessBox_connect(email){

  var ValidEmail;

  // checks if email address is valid 
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      ValidEmail=true;
  } else {
      ValidEmail=false;
      alert("Please enter valid Email address");

  }
  if(ValidEmail==true){
    alert("Connect successfully!");
    window.open('../html/newGeneral.html');
    window.close();
  }

}



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

function forgotPassword(){
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