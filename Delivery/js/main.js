new WOW().init();
const cartButton =document.querySelector("#cart-button");
const modal=document.querySelector(".modal");

const close=document.querySelector(".close");

if(close!==null){
    cartButton.addEventListener('click', toggleModal);
    close.addEventListener('click', toggleModal);
}

function toggleModal(){
    modal.classList.toggle("is-open");
}

