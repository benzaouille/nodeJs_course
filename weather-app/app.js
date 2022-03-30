const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if(process.argv[2]){
  // si latitude ou longitude n'existent pas dans l'objet nodejs va essayer de destructuré un undifined ce qui fera planté le programme
  // en rajoutant = {} on lui fait comprendre que meme si latitude et longitude n'existent pas on cree un objet avec rien dedans pour eviter le crash comme en c++
  geocode(process.argv[2], (error, {latitude, longitude} = {}) => {
    if(error){
      return console.log(error)
    }

    forecast(latitude, longitude, (error, {weather_descriptions, temperature, humidity} = {}) => {
      if(error){
        return console.log(error)
      }
      console.log('weather     -> ', weather_descriptions)
      console.log('temperature -> ', temperature)
      console.log('humodity    ->', humidity)
    })
  })
} else{
  console.log('there is no argument given')
}
