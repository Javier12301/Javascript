// Primero agarramos el elemento panel.
const panels = document.querySelectorAll('.panel');

// Iteramos cada panel y le agregamos un evento click.
panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        if(panel.classList.contains('active')){
            removeActiveClasses();
        }else{
            removeActiveClasses();
            panel.classList.add('active');
        }
    })
})

// Función para remover clase
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}