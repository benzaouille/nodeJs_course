const Express = require('express')

const app = Express()

app.get('', (req, res) =>{
  res.send('Hello express')
})

app.get('/help', (req,res) =>{
  res.send('Help page')
})

app.get('/about', (req,res) =>{
  res.send('About page')
})

app.get('/weather', (req,res) =>{
  res.send('Weather page')
})

app.listen(3000, () =>{
  console.log('local server start at 3000 port')
})
