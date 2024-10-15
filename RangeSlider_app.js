var process = document.querySelector('.process')
var value = document.querySelector('.process span')
var range = document.querySelector('.range')

function updateProcess(percent) {
    process.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
}

range.addEventListener('mousemove', function (e) {
    var processWidth = e.pageX - this.offsetLeft
    var percent = processWidth / this.offsetWidth * 100
    percent = Math.round(percent)
    console.log(percent)
    updateProcess(percent)
})

updateProcess(30)

var slider = document.getElementById('slider')

slider.addEventListener('change', function (val) {

})