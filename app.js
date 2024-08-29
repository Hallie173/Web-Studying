var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var btnClose = document.querySelector('.modal-footer button')
var iconClose = document.querySelector('.modal-header i')

function toggleModal(e) {
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e) {
    if(e.target == e.currentTarget) {
        toggleModal()
    }
})