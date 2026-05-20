import './Weather.css'

function Weather({ weather }) {
    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            <div className='weather-main'>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
                <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
            </div>
            <p className='description'>{weather.weather[0].description}</p>
            <div className='weather-details'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure} hPa</p>
            </div>
        </div>
    )
}

export default Weather