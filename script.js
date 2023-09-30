
//onclick show side menu
const sideMenu = document.querySelector('#side-menu');
const menu = document.querySelector('.menu');
menu.addEventListener('click', ()=>{
    sideMenu.style.display = 'flex';
});

const close = document.querySelector('.close-icon');
close.addEventListener('click', ()=>{
    sideMenu.style.display = 'none';
});

// add dark layer on menu icon click
const darkLayer = document.querySelector('#dark-layer');

menu.addEventListener('click', ()=> {
    darkLayer.style.display = 'block';
});

//remove dark layer on close icon click
close.addEventListener('click', ()=> {
    darkLayer.style.display = 'none';
});
