const subscribeBtn = document.getElementById("subscribe-btn");
const successBtn = document.getElementById("success-btn");
const input = document.getElementById("email");
const emailError = document.querySelector(".error-msg");
const successPage = document.querySelector(".success");
const mainPage = document.querySelector(".sign-up");
const confirmEmail = document.getElementById("successMsg");
const emailInput = document.getElementById("email");
const form = document.getElementById("subscribe");

const success = (e) => {
    e.preventDefault();
    successPage.style.display = "none";
    mainPage.style.display = "flex";    
}

const handleSubmit = (e) => {
    e.preventDefault();

    if(!input.value) {
        emailError.innerText = "Valid Email required";
        emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
    }
    else {
        validateEmail();
        form.reset();        
    }
}
const validateEmail = () => {

    const isValidEmail = /^\S+@\S+$/g;
    if (isValidEmail.test(input.value)) {
        successPage.style.display = "flex";
        mainPage.style.display = "none";
        confirmEmail.innerHTML = `<p>A confirmation email has been sent to <span>${input.value}</span>. 
          Please open it and click the button inside to confirm your subscription.
        </p>`;
        emailError.innerText = "";
        emailInput.style.border = "1px solid hsl(235, 18%, 26%)";
    } else {
        emailError.innerText = "Please Enter a Valid Email"
        emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
    }    
}

subscribeBtn.addEventListener("click", handleSubmit);
successBtn.addEventListener("click", success);