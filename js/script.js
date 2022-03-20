// search form
let searchForm = document.querySelector('.search-form-container');


document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}


// shoping-cart form
let cart = document.querySelector('.shoping-cart-container');


document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

// login form
let loginForm = document.querySelector('.login-form-container');


document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
    searchForm.classList.remove('active');
}


// menu form

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');
}


document.querySelector('.home').onmousemove = (e) => {

    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
}

document.querySelector('.home').onmouseleave = () => {

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
}