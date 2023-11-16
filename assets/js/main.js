let email=document.querySelector("[name='email']");
let signIn=document.querySelector(".sign-up");
let signsuccess=document.querySelector(".sign-success");
const form = document.querySelector("[name='myform']");
const validateEmail = (inputEmail)=> inputEmail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const generateError = () =>{
    const emailError = document.getElementById("emailError");
    emailError.innerText = "Valid email required";    
}
form.addEventListener("submit",(e) => {
    e.preventDefault();
    if(!validateEmail(email)){
        email.style.borderColor = "hsl(4, 100%, 67%)";
        generateError();
        email.parentElement.classList.add("error");
    }
    else {
        document.getElementById("change").innerText=email.value;
        signIn.style.display="none";
        signsuccess.style.display="flex";
    }
});
