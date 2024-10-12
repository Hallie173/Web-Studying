var successBtn = document.querySelector('.control .success');
var warningBtn = document.querySelector('.control .warning');
var errorBtn = document.querySelector('.control .error');

var successMess = document.querySelector('toast.success');

successBtn.addEventListener('click', function() {
    createToast('success')
})

warningBtn.addEventListener('click', function() {
    createToast('warning')
})

errorBtn.addEventListener('click', function() {
    createToast('error')
})

function createToast(status) {
    let templateInner = `<i class="fa-solid fa-circle-check"></i>
                        <span class="message">This is a success message!</span>`
    switch (status) {
        case 'success':
            templateInner = `<i class="fa-solid fa-circle-check"></i>
                                <span class="message">This is a success message!</span>`
            break;
        case 'warning':
            templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
                                <span class="message">This is a warning message!</span>`
            break;
        case 'error':
            templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>
                                <span class="message">This is an error message!</span>`
            break;
    }
    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML = `${templateInner}
                        <span class="countdown"></span>`

    var toastList = document.getElementById('toasts')
    toastList.appendChild(toast)

    setTimeout(function(){
        toast.style.animation = 'slide_hide 1s ease forwards'
    }, 5000)
    setTimeout(function(){
        toast.remove()
    }, 6000)
}