let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}






const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});




var swiper=new Swiper(".review-slider",{
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints:{
        0:{
            slidesPerview: 1,
        },
        768:{
            slidesPerview: 2,
        },
        1020:{
            slidesPerview: 3,
        },
    },

});