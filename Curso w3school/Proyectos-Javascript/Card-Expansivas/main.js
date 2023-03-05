const panelToggle = document.querySelectorAll('.panel')

panelToggle.forEach(panel => {
    panel.addEventListener('click', () => {
        deleteActive();
        panel.classList.toggle('active');
    })
})

function deleteActive(){
    panelToggle.forEach(panel => {
        if(panel.classList.contains('active')){
            panel.classList.remove('active');
        }
    })
}