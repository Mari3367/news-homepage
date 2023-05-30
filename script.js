

// const wrappers = document.querySelectorAll('.new-unit-wrap');

// wrappers.forEach((wrapper) => {
// const border = document.createElement('div');
// border.style.height = '1px';
// border.style.backgroundColor = 'red';
// border.className = 'border';
//    wrapper.after(border);
// });


//onclick show side menu
const sideMenu = document.querySelector('#side-menu');
const menu = document.querySelector('.menu');
menu.addEventListener('click', ()=>{
    sideMenu.style.display = 'flex';
});

const close = document.querySelector('.close-icon');
close.addEventListener('click', ()=>{
    sideMenu.style.display = 'none';
})
