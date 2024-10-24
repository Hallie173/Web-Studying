var upload = document.querySelector('#mypicture')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')

upload.addEventListener('change', function (e) {
    var file = upload.files[0]

    if (!file) return
    if (!file.name.endsWith('.jpg')) {
        error.innerHTML = "Invalid format!"
        return
    } else {
        error.innerHTML = ""
    }
    if (file.size / (1024 + 1024) > 50) {
        error.innerHTML = "Invalid size!"
        return
    } else {
        error.innerHTML = ""
    }

    var img = document.createElement('img')
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onloadend = function (e) {
        console.log('load successfully', e.target.result);
        img.src = URL.createObjectURL(upload.files[0])
    }

    //img.src = URL.createObjectURL(upload.files[0])
    preview.appendChild(img);
})