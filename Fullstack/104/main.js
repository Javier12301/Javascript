const inputs = document.querySelectorAll(".input-color-selector")
const bodyDOM = document.querySelector(".body");
const colorADOM = document.getElementById("colorA");
const colorBDOM = document.getElementById("colorB"); 
var colorA = colorADOM.value;
var colorB = colorBDOM.value;

window.onload = (event) =>{
    changeBackgroundColor();
    inputs.forEach(input => {
        input.addEventListener("change", ()=>{
            switch(input.id){
                case "colorA":{
                    colorA = input.value;
                    changeBackgroundColor();
                    break;
                }

                case "colorB":{
                    colorB = input.value;
                    changeBackgroundColor();
                    break;
                }
            }
        })
    })
}


function changeBackgroundColor(){
    bodyDOM.style = `background: linear-gradient(${colorA}, ${colorB});`
}
