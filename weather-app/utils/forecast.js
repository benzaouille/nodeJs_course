const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=40096a79e0b6f9520d2f11847776b89d&query=' + longitude + ',' + latitude
  request({ url, json : true }, (error, {body}) => {
    if(error){
      callback('unable to connect to the server', undefined)
    } else if(body.success === false){
      callback('missing_query', undefined)
    } else
    {
      callback(undefined, {weather_descriptions : body.current.weather_descriptions[0],
        temperature : body.current.temperature,
        humidity : body.current.humidity})
    }
  })
}


module.exports = forecast
