import './WeatherForecast.css'

function WeatherForecast({ weatherForecast }) {
    
    let dailyForecast = {}

    for (let forecast of weatherForecast.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()
        
        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    const nextFiveDays = Object.values(dailyForecast).slice(1, 6)

    function convertDate(dateString) {
        const date = new Date(dateString.dt * 1000).toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: '2-digit',
        })
        return date
    }

    return (
        <div className='forecast-container'>
            <h3>Previsão para os próximos dias</h3>
            <div className='forecast-list'>
                {nextFiveDays.map(forecast => (
                    <div key={forecast.dt} className='forecast-item'>
                        <p>{convertDate(forecast)}</p>
                        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].description} />
                        <p>{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp)}°C</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherForecast