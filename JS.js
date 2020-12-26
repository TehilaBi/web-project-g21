
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

// validation and messages of contact me page
function MessBox_contactMe(phone,email,text){
  var ValidPhone, ValidEmail,ValidText;
  var re = /^[0-9]{0,20}$/im;
  // checks if email address is valid 
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      ValidEmail=true;
  } else {
      ValidEmail=false;
      alert("Please enter valid Email address");

  }// checks if phone is valid (0 to 20 characters) but not a must as input
  if(re.test(phone)) {
    ValidPhone=true;
  }
  else {
    ValidPhone=false;
    alert("Please enter valid Phone Number");

}
 // text is a must
if (!isNaN(text)) {
  ValidText = false;
  alert("Please write something ..");
} else {
  ValidText=true;
}

  
  if(ValidEmail==true && ValidPhone==true && ValidText==true){
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

// checks name is not empty
  if (!isNaN(fname)) {
    ValidName = false;
    alert("Please enter First name ");
  } else {
    ValidName=true;
  }

  // checks name is not empty
  if (!isNaN(lname)) {
    ValidName = false;
    alert("Please enter Last name");
  } else {
    ValidName=true;
  }

  // checks password is not empty
  if (pas.value.length == 0)
  { 
     alert("Please choose a password");  	
     ValidPas= false; 
  }  	else {
      ValidPas= true; 
}

// success
  if(ValidEmail==true && ValidName==true &&  ValidPas==true){
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

// checks password is not empty
  if (pas.value.length == 0)
  { 
     alert("Please enter password");  	
     ValidPas= false; 
  }  	else {
      ValidPas= true; 
}

// success
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
  
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(EmailAdress) ) {
    alert("New password sent to your Email!");
    window.open('../html/newGeneral.html');
    window.close();
} else{
  alert("Please enter valid Email address");
}

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


// button of read more or less for about page
function read_more_less() {
  var btn = document.getElementById("btn");
  var txt = document.getElementById("text");
    var minText = "Chloe's Cookies is a private boutique bakery <br> " +
    "that specializes in baking cookies, cakes, pastries and desserts for various events." + "<br> ...";
  var fullText = "Chloe's Cookies is a private boutique bakery <br> " +
  "that specializes in baking cookies, cakes, pastries and desserts for various events.<br>" +
  "Chloe Mauda, the owner of the bakery, <br> is a student of industrial engineering and management at Ben-Gurion.<br>" +
  "Since childhood she used to bake with her mother,  <br> and making pastries and cakes for every occasion. <br>" +
   "<b>Opening the bakery was a way to spread her love for the profession.</b>";

  if (btn.value == 'Read More') {
      btn.value = 'Read Less';
      txt.innerHTML = fullText;
  } else {
      btn.value = 'Read More';
      txt.innerHTML = minText;
      }
  }


  // button of read more or less for recipe page
function read_more_less_recipe() {
  var btn = document.getElementById("btn");
  var txt = document.getElementById("text");
    var minText ="Estimate time: 30min <br>";
    
   var fullText = "Estimate time: 30min <br>"+
      "<h3>Ingredients:</h3>"+
    "<ul>"+
        "<li>2 cups plain flour (290g)</li>"+
        "<li>1/4 cup sugar or sweetener (60g)</li>"+
        "<li>4 teaspoons baking powder</li>"+
        "<li>1/4 teaspoon baking soda</li>"+
        "<li>1/2 teaspoon salt</li>"+
        "<li>1 3/4 cups milk (440ml)</li>"+
        "<li>1/4 cup butter (60g)</li>"+
        "<li>2 teaspoons pure vanilla extract</li>"+
        "<li>1 large egg</li>"+
    "</ul><br>"+
    "<h3>Instructions:</h3>"+
    "<ol>"+
    "<li>Combine the flour, sugar, baking powder, baking soda and salt in a large-sized bowl."+
    "Make a well in the centre and add the milk, slightly cooled melted butter, vanilla and egg.</li>"+
    "<li>Use a wire whisk to whisk the wet ingredients together first before slowly folding them into "+
    "the dry ingredients. Mix together until smooth (there may be a couple of lumps but that's okay).</li>"+
    "<li>Set the batter aside and allow to rest while heating up your pan or griddle. </li>"+
    "<li>Heat a nonstick pan or griddle over low-medium heat and wipe over with a little"+
    "butter to lightly grease pan. Pour ¼ cup of batter onto the pan and spread out gently"+
    "into a round shape with the back of your ladle or measuring cup.</li>"+
    "<li>When the underside is golden and bubbles begin to appear on the surface,"+
    "flip with a spatula and cook until golden. Repeat with remaining batter.</li>"+
    "<li>Serve with honey, maple syrup, fruit, ice cream or frozen yoghurt, or enjoy plain!</li>"+
    "</ol> <br>";
  if (btn.value == 'Read More') {
      btn.value = 'Read Less';
      txt.innerHTML = fullText;
  }
  else {
      btn.value = 'Read More';
      txt.innerHTML = minText;
      }
  }