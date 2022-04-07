const path = require('path')
const Express = require('express')
const hbs = require('hbs')
const geocode  = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = Express()
const port = process.env.port || 3000

const partialFolder = path.join(__dirname, '../template/partials')
const dynamicFolder = path.join(__dirname, '../template/views')
const staticIndexPath = path.join(__dirname, '../public')
app.use(Express.static(staticIndexPath))


/*on va indiquer ou chercher les fichier partial (header) a bhs*/
hbs.registerPartials(partialFolder)
/*maintenant que nous avons vu comment integrer des pages static (html)
voyons comment remplacer ses page static en page dynamic avec hbs qui est une surcouche de
handlebars ... (pas besoin de require même si hbs à été installé avec npm)*/
app.set('view engine', 'hbs')
//changeons le dossier que express 'regarde' pour les fichier dynamiqye hbs (voir set dans la ref express)
app.set('views', dynamicFolder)

app.get('', (req,res) => {
  //ici les données sont envoyées de l'app vers la page (dynamisme)
  //index va directement être rechercher dans le dossier viex a la racine de projet
  //inutile de rajouter l'extension .hbs pour index
  res.render('index', {
    title : 'Weather Page',
    name : 'S2z'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title : 'About page',
    name : 'S2z'
  })
})


app.get('/help', (req, res) => {
  res.render('help', {
    title : 'Help Page',
    helpMsg : 'how can I help you',
    name: 'S2z'
  })
})

app.get('/weather', (req,res) =>{
  if(!req.query.address){
    return res.send([{
        error: 'you must provide address'
      }])
  }

  //geocode the address
  geocode(req.query.address, (error, {latitude, longitude} = {}) => {
    forecast(latitude, longitude, (error, {weather_descriptions, temperature, humidity} = {}) => {
      if(error){
          return res.send([{error: error}])
      }

      res.send([{
        weather_descriptions : weather_descriptions,
        temperature : temperature,
        humidity : humidity,
        address : req.query.address
      }])
    })
  })
})



//il faut bien penser à mettre cette fonction en toute derniere place pour les requetes de pages
app.get('/help/*', (req, res) => {
  res.render('404',{
    title : '404',
    errorMsg : 'help article not found',
    name: 'S2z'
  })
})

app.get('*', (req,res) => {
  res.render('404', {
    title : '404',
    errorMsg : 'Page not found',
    name: 'S2z'
  })
})
app.listen(port, () =>{
  console.log('local server start at port' + port)
})
