'use strict';

const $navbar = document.querySelector("[data-navbar]");
const $iconBtn = document.querySelector("[data-nav-toggler]");

$iconBtn.addEventListener("click", () =>$navbar.classList.toggle("active"));

const $header=document.querySelector("[data-header]");

window.addEventListener("scroll",e=>{
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});


const $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn=> {
    $toggleBtn.addEventListener("click", () => {
        $toggleBtn.classList.toggle("active");
    });
});