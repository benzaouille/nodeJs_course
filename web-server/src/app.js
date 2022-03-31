const Express = require('express')

const app = Express()

app.get('', (req, res) =>{
  res.send('<h1>Hello express<\h1>')
})

app.get('/help', (req,res) =>{
  //si on envoi un objet (ou plusieurs comme dans l'exaple precedant)
  // ils sont automatiquement converti avec stringify pour ensuite être affiché sur la page
  res.send([{
    name : 's2z',
    age : 27
  },{
    name : 'p20',
    age : 26
  }])
})

app.get('/about', (req,res) =>{
  res.send('<h1>About page<\h1>')
})

app.get('/weather', (req,res) =>{
  res.send({
    forecast : 'it is raining',
    location : 'Paris'
  })
})

app.listen(3000, () =>{
  console.log('local server start at 3000 port')
})
