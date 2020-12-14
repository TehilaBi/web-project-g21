
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
        alert("Please enter valid Email adress");

    }

    if(ValidAmount==true && ValidEmail==true){
        alert("Add to cart successfully!");
    }

    
  }


function MessBox_contactMe(){
    alert("Thank you! Your message has been received");
    location.href='../html/general.html';

}

function MessBox_connect(){
    alert("Connect successfully!");
    location.href='../html/general.html';

}
