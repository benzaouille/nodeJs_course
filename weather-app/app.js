const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if(process.argv[2]){
  geocode(process.argv[2], (error, data) => {
    if(error){
      return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, data) => {
      if(error){
        return console.log(error)
      }
      console.log(data)
    })
  })
} else{
  console.log('there is no argument given')
}
