
function startOrder(){
    var canSeePassword = false;
    var phoneNumber = "";
    console.log("starting order....");

       
    var welcomeNote = document.getElementById("welcomeNote");
    var passwordField = document.getElementById("password");
    var phoneContainer = document.getElementById("phone");
    var phoneField = document.getElementById("phoneInput");
    var submitButton = document.getElementById("submitButton");
    var insertedNumber = document.getElementById("insertedNumber");
    var password = document.getElementById("password");
    var passwordField = document.getElementById("passwordField");

    if(phoneField.value == "" || phoneField.value == null){
        return;
    }

    if(canSeePassword == false){
        
        passwordField.style.display = "block";
        welcomeNote.style.display = "block";
        password.style.display = "block";
        phoneNumber = phoneField.value;
        insertedNumber.innerText = phoneNumber;

        phoneContainer.style.display = "none";
        submitButton.innerText = "Proceed to Buy Electricity"
        canSeePassword = true;
    }
    if(canSeePassword){
        if(passwordField.value == ""|| passwordField.value == null){
            return;
        }
        window.location = "./buyunit.html"
    }
    
}

function reviewOrder() {
    window.location = "./reviewOrder.html"
}