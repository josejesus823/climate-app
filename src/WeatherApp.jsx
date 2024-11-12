import { useState } from 'react'
import './WeatherApp.css'

export const WeatherApp = () => {


    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState(null)


    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = 'YOUR_API_KEY'
    const difKelvin = 273.15 // To get Celsius 

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`)
            const data = await response.json()
            setWeatherData(data)
        }
        catch (error) {
            console.error('There has been an error: ', error)
        }
    }

    const handleCityChange = (event) => {
        setCity(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchWeatherData()
    }


    return (
        <div className="container">
            <h1>Weather Application</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a City"
                    value={city}
                    onChange={handleCityChange}
                />
                <button type="submit"> Search </button>
            </form>
            {weatherData && (

                <div>
                    <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                    <p>The current temperature is {Math.floor(weatherData.main.temp - difKelvin)} °C</p>
                    <p>Current weather conditions: {weatherData.weather[0].description}</p>
                    <img 
                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                    alt={weatherData.weather[0].description}/>
                </div>
            )}
        </div>
    )
}
