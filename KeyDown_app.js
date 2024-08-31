var eKey = document.querySelector('.key p:last-child')
var eLocation = document.querySelector('.location p:last-child')
var eWhich = document.querySelector('.which p:last-child')
var eCode = document.querySelector('.code p:last-child')
var alert = document.querySelector('.alert')
var box = document.querySelector('.box')
var result = document.querySelector('.result')

document.addEventListener('keydown', e=> {
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
    result.innerHTML = e.code

    alert.classList.add('hide')
    box.classList.remove('hide')
})