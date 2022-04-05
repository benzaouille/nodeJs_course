console.log('Client side log :)')

fetch('http://localhost:3000/weather?address=Paris').then((response) => {
  response.json().then( (data) => {
    if(data.error){
        return console.log(data.error)
    }
    console.log(data)
  })
})
