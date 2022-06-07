/* Efectos para cambiar a Día y Noche */
let color_morning = 'rgb(147, 197, 253)';
let button_1 = document.getElementById('morning');

button_1.addEventListener('click', function(){
    let container = document.getElementById('container');
    let clouds = document.getElementById('clouds');
    container.style.background = color_morning;
    clouds.style.opacity = '1';
})

let color_night = 'rgb(30, 58, 138)';
let button_2 = document.getElementById('night');

button_2.addEventListener('click', function(){
    let container = document.getElementById('container');
    let clouds = document.getElementById('clouds');
    container.style.background = color_night;
    clouds.style.opacity = '0.6';
})