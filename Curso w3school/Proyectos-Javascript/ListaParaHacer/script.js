const getInputText = document.getElementById('input-text-lista');
const getButton = document.getElementById('btn-add');
const getButtonCompleteList = document.querySelector('.btn-clean-list');
var getListaContainer = document.querySelector('.listas-agregadas-container');
var getButtonsTrash = document.querySelectorAll('.btn-delete');
var getParagraphs = document.querySelectorAll('.item-added');

buttonTrash();
paragraphClick();

getButton.addEventListener('click', () => {
    addArticulo();
})

function buttonTrash(){
    getButtonsTrash.forEach(button => {
        button.addEventListener('click', () => {
            var articleSelector = getListaContainer.querySelector(`article[name=${button.name}]`);
            articleSelector.remove();
        })
    })
}

function paragraphClick(){
    getParagraphs.forEach(paragraph => {
        paragraph.addEventListener('click', () => {
            if(paragraph.classList.contains('strikethrough')){
                paragraph.classList.remove('strikethrough');
            }else{
                paragraph.classList.add('strikethrough');
            }
        })
    })
}

getButtonCompleteList.addEventListener('click', () => {
    eliminarArticulos(getListaContainer)
})

function eliminarArticulos(contenedor) {
    const articulos = contenedor.getElementsByTagName("article");
    for (let i = articulos.length - 1; i >= 0; i--) {
      articulos[i].parentNode.removeChild(articulos[i]);
    }
  }

function addArticulo(){
    if(getInputText.value.trim() !== ''){
        getInputText.classList.remove('input-error');
        //Agregar article con la lista deseada
        const valueText = getInputText.value;
        const listaContainerHTML = getListaContainer.innerHTML;

        getListaContainer.innerHTML = 
        `
        <article name="${valueText.replace(" ", "-")}" class="listas-agregadas">
                <p class="item-added">${valueText}</p>
                <button name="${valueText.replace(" ", "-")}" class="btn-delete"><i class="fa-sharp fa-solid fa-trash"></i></button>
            </article>
        ` + listaContainerHTML;
        getButtonsTrash = document.querySelectorAll('.btn-delete');
        getParagraphs = document.querySelectorAll('.item-added');
        getListaContainer = document.querySelector('.listas-agregadas-container');
        buttonTrash();
        paragraphClick();
    }else{
        getInputText.classList.add('input-error');
    }
}