console.log('Client side log :)')

/*fetch('http://localhost:3000/weather?address=Paris').then((response) => {
  response.json().then( (data) => {
    if(data.error){
        return console.log(data.error)
    }
    console.log(data)
  })
})
*/

const weatherForm = document.querySelector('form')
const input = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  message1.textContent = 'Loading Data...'
  message2.textContent = ''

  const location = input.value
  const url = 'http://localhost:3000/weather?address=' + location
  console.log(url)

  fetch(url).then( (response) => {
    response.json().then((data) => {
      if(data.error){
        message1.textContent = data[0].error
      } else {
        message1.textContent = data[0].weather_descriptions
        message2.textContent = data[0].temperature
      }

    })
  })
})
