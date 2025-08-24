// const bar = document.getElementById('bar');
// const nav = document.getElementsByClassName('navbar');

// if (bar) {
//     bar.addEventListener('click', () => {
//         nav.classList.add('active');
//     })
// }

const bar = document.querySelector("#bar");
const close = document.querySelector("#close");
const nav = document.querySelector(".navbar");

if(bar){
bar.addEventListener("click", () => {
    bar.classList.toggle("active");
    nav.classList.toggle("active");
})
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.toggle("active");
    })
}

// account/login page

var LoginForm = document.getElementById("LoginForm");
var RsgForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator")

function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(150px)";
}

function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(50px)";
}
