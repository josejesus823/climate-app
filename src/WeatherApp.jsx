import './WeatherApp.css'

export const WeatherApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = 'dddad9a883ca355516db5d349e3a65fa'
    const difKelvin = 273.15 // To get Celsius 

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Hola mundo")
    }
    return (
      <div className="container">
        <h1>Weather Application</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a City" />
            <button type="submit"> Search </button>
        </form>
      </div>
    )
}
