const path = require('path')
const Express = require('express')

const app = Express()

/*maintenant que nous avons vu comment integrer des pages static (html)
voyons comment remplacer ses page static en page dynamic avec hbs qui est une surcouche de
handlebars ... (pas besoin de require même si hbs à été installé avec npm)*/
app.set('view engine', 'hbs')
app.get('', (req,res) => {
  //ici les données sont envoyées de l'app vers la page (dynamisme)
  //index va directement être rechercher dans le dossier viex a la racine de projet
  //inutile de rajouter l'extension .hbs pour index
  res.render('index', {
    title : 'Weather App',
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
const staticIndexPath = path.join(__dirname, '../public')
app.use(Express.static(staticIndexPath))





app.get('/weather', (req,res) =>{
  res.send({
    forecast : 'it is raining',
    location : 'Paris'
  })
})

app.listen(3000, () =>{
  console.log('local server start at 3000 port')
})
