const APIKey = "2f4b7673d49e433191f195656232511"
const searchButton = document.querySelector(".btn-search")

searchButton.addEventListener("click", async () => {
    const city = document.getElementById("search-input").value

    if (!city) return

    const data = await fetchCityData(city)

    if (data) showDataOnScreen(data, city)
})

async function fetchCityData(city) {
    const APIUrl = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no&lang=pt`

    const response = await fetch(APIUrl)

    if (response.status !== 200) return

    const data = response.json()

    return data
}

function showDataOnScreen(data, city) {
    const temperature = data.current.temp_c
    const condition = data.current.condition.text
    const humidity = data.current.humidity
    const windSpeed = data.current.wind_kph
    const conditionIcon = data.current.condition.icon

    document.getElementById("city").textContent = city
    document.getElementById("temperature").textContent = `${temperature} °C`
    document.getElementById("condition").textContent = condition
    document.getElementById("humidity").textContent = `${humidity}%`
    document.getElementById("wind-speed").textContent = `${windSpeed} Km/h`
    document.getElementById("condition-icon").setAttribute("src", conditionIcon)
}