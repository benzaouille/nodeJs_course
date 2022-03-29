const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=40096a79e0b6f9520d2f11847776b89d&query=New%20York&units=f'
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Lossssss.json?access_token=pk.eyJ1IjoiczJ6IiwiYSI6ImNsMWJ2bTJ0ajAxbjAzZG1mYmNnN3E1dGMifQ.ANhIHrB3KOTrls9LJFRlRA'


request({url : geocodeURL, json : true}, (error, response) => {

  if(error){
    console.log(error)
  }else if(response.body.features.length === 0){
    console.log('the location was not found')
  }else{
    console.log("The lat/long for Los Angeles is " + response.body.features[0].geometry.coordinates[0] + " , " + response.body.features[0].geometry.coordinates[1])
  }
})

request({ url: url, json : true }, (error, response) => {
  //with json : true, the the response is already parsed in JSON format
  //const data = JSON.parse(response.body)
  console.log(response.body.current.weather_descriptions[0] , '. Today the temperature is ', response.body.current.temperature, 'with humidity of ' , response.body.current.humidity)
})
