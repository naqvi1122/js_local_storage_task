const formlog = document.getElementById("login-form");
const BtnLog = document.getElementById("login-form-submit");
const ErrorMessage = document.getElementById("login-error-msg");
let email='';
let password='';
BtnLog.addEventListener("click", (e) => {
    e.preventDefault();
    const username = formlog.username.value;
    const password = formlog.password.value;


    if (username === localStorage.getItem("email") && password === localStorage.getItem("passwordd")) {
        alert("You have successfully logged in.");
        window.location.href = "home.html";
    } else {
        ErrorMessage.style.opacity = 1;
    }
})


//..............saving form data into local storage

function mydata(e){

 email= document.querySelector('input[name="mail"]').value;
 password=document.querySelector('input[name="password"]').value;
 localStorage.setItem("email", email);
 localStorage.setItem("passwordd", password);
console.log(password);
console.log(email);
window.location.href = "index.html";
// source  of help
// https://linuxhint.com/get-input-value-javascript/
// https://www.w3schools.com/jsref/prop_win_localstorage.asp

}






function get_item_data(){
    //console.log('clicked')
    let product=document.getElementById("shirt").innerText;
    let productp=document.getElementById("shirtP").innerText;
    let productinfo=document.getElementById("shirtinfo").innerText;
   


    localStorage.setItem("product", product);
    localStorage.setItem("productp", productp);
    localStorage.setItem("productinfo", productinfo);

    

    window.location.href = "cart.html";
    
  

}