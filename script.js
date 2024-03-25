const menu=document.querySelector('.menu');
const hamburger=document.querySelector('.hamburger');
const menuIcon=document.querySelector('.menu-icon');
const closeIcon=document.querySelector('.close-icon');


function toggleMenu(){
    if (menu.classList.contains('show-menu')){
        menu.classList.remove('show-menu');
        menuIcon.style.display='block'
        closeIcon.style.display='none'
    }else{
        menu.classList.add('show-menu')
        menuIcon.style.display='none'
        closeIcon.style.display='block'
    }
}
hamburger.addEventListener("click",toggleMenu)