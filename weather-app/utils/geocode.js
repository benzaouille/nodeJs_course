const request = require('request')

const geocode = (address, callback) => {
  const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiczJ6IiwiYSI6ImNsMWJ2bTJ0ajAxbjAzZG1mYmNnN3E1dGMifQ.ANhIHrB3KOTrls9LJFRlRA'
  request({url : geocodeURL, json : true}, (error, response) => {
    if(error){
      //console.log(error)
      callback(error, undefined)
    }else if(response.body.features.length === 0){
      //console.log('the location was not found')
      callback('the location was not found', undefined)
    }else{
      //console.log("The lat/long for Paris is " + response.body.features[0].geometry.coordinates[0] + " , " + response.body.features[0].geometry.coordinates[1])
      callback(undefined, {latitude : response.body.features[0].geometry.coordinates[0], longitude : response.body.features[0].geometry.coordinates[1]})
    }
  })
}


module.exports = geocode
