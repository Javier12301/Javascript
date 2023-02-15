const button_text = document.getElementById('span-button');
const button = document.querySelector('.btn-primary');
const span_hex = document.getElementById('color-span');

//function button click
function buttonClick() {
    var color_body = randomHexColor();
    var color_button = randomHexColor();

    document.body.style.backgroundColor = color_body;
    span_hex.innerText = color_body;
    button.style.backgroundColor = color_button;
}

function buttonClickRGB() {
    var color_body = randomRgbColor();
    var color_button = randomRgbColor();

    document.body.style.backgroundColor = color_body;
    span_hex.innerText = color_body;
    button.style.backgroundColor = color_button;
}

//random hex color
function randomHexColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//random rgb color
function randomRgbColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}