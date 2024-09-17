var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var tempValue = document.querySelector('.tempValue')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var humidity = document.querySelector('.humidity span')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')

async function changeWeatherUI(positionSearch) {
    positionSearch = search.value.trim()
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${positionSearch}&appid=370006edf87f8443260b2ed6a1fdb56e`

    let data = await fetch(apiURL).then(res=> res.json())

    if (data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        humidity.innerText = data.main.humidity + '%'
        let temp = Math.round(data.main.temp - 273.15)
        tempValue.innerText = temp
        shortDesc.innerText =  data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('vi')

        body.classList.remove('spring', 'summer', 'autumn', 'winter')

        if (temp >= 28) {
            body.classList.add('summer')
            console.log('summer')
        } else if (temp >= 23) {
            body.classList.add('spring')
            console.log('spring')
        } else if (temp >= 18) {
            body.classList.add('autumn')
            console.log('autumn')
        } else {
            body.classList.add('winter')
            console.log('winter')
        }
    } else {
        content.classList.add('hide')
    }


}

changeWeatherUI()

search.addEventListener('keypress', function(e) {
    if (e.code === 'Enter') {
        let positionSearch = search.value.trim()
        changeWeatherUI(positionSearch)
    }
})