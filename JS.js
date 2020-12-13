
function validateGiftInput(amount, phoneNum) {
    var ValidAmount;

    // If amount is Not a Number or less than 0
    if (isNaN(amount) || amount < 0) {
        ValidAmount=false;
        alert("Please enter amount greater than 0");
    } else {
        ValidAmount=true;
    }

    if(ValidAmount==true){
        alert("Add to cart successfully!");
    }

    
  }

