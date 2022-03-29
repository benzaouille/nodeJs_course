const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=40096a79e0b6f9520d2f11847776b89d&query=New%20York'

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current.temperature)
})
