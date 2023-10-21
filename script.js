let tittleText = document.getElementById('text');
let building = document.getElementById('sky');
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

stars.style.left = value *0.2 + 'px';
tittleText.style.left = value * -1.5 + 'px';
moon.style.top = value * 1.05 + 'px';
sky.style.top = value * 0 + 'px';

});