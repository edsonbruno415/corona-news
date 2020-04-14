const btnNavbar = document.getElementById("btn");
const navbar = document.getElementById("navbar");

btnNavbar.addEventListener("click", displayMessage);

function displayMessage(e){
    if(navbar.hidden==true){
        navbar.hidden = false;
    }else{
        navbar.hidden = true;
    }
}