const path = require('path')
const Express = require('express')

const app = Express()

//app.use(...) va reproduire exactement :
/*app.get('', (req, res) =>{
  res.send('<h1>Hello express<\h1>')
})*/
//en allant directement chercher le fichier index.html pour la racine du site web
//donc ne jamais creer un fichier index.html pour une tout autre chose
//pareil pour les pages static about.html et help.html
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
