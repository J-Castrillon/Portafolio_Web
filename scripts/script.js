'use strict'; 

window.addEventListener('load',()=>{
    // Declaración e inicialización de variables ; 
    const netsInstagram = document.querySelector('#nets-instragram'); 
    const netsLinkedin = document.querySelector('#nets-linkedin'); 
    const netsGithub = document.querySelector('#nets-github');
    const menuMobileIcon = document.querySelector('#menuIcon'); 
    const menuMobile = document.querySelector('#menu-mobile'); 
    const main = document.querySelector('#Main'); 
    const lastName = document.querySelector('#second-lastName');
    let timer;

    // Instrucciones; 
    timer = setInterval(()=>{
        window.innerWidth >= 600 ? lastName.classList.remove('inactive') : lastName.classList.add('inactive'); 
    },100); 

    // Redes sociales - versión mobile; 
    netsInstagram.setAttribute('href','https://www.instagram.com/juliancastrillon17/');
    netsLinkedin.setAttribute('href','https://www.linkedin.com/in/juli%C3%A1n-castrill%C3%B3n-364056168/');
    netsGithub.setAttribute('href','https://github.com/J-Castrillon?tab=repositories'); 

    // Abrir el menú mobile;
    menuMobileIcon.addEventListener('click',()=>{
        menuMobile.classList.toggle('inactive'); 
        main.classList.contains('inactive') ? main.classList.remove('inactive') : main.classList.add('inactive'); 
    })

    
}); 