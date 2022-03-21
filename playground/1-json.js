const fs = require('fs')
/*
//example
//book est dans un format objet on doit le rendre compatible au format
// json cela passe par une conversion en string
const book = {
  author : 'Remy',
  name : 'remy sans amis'
}
const bookJson = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJson)
//maintenant si on essaye de lire le fichier json
//il sera dans un premier temps dans un format bytes
//il fautdra alors le convertir en string puis en objet en le parsant
const bookDataByte   = fs.readFileSync('1-json.json')
const bookDataString = bookDataByte.toString()
const bookDataObjet  = JSON.parse(bookDataString)
bookDataObjet.author = 'Bassem692' // modification de" l'objet (la version string ne peut pas être modifié.. il faut parser avant)
console.log(bookDataObjet)*/

const jsonDataBuffer = fs.readFileSync('1-json.json') // return a byte format we have to convert it in string
const jsonDataString = jsonDataBuffer.toString()
const jsonDataObjet  = JSON.parse(jsonDataString)

//modification of the data
 jsonDataObjet.name = "S2z"
 jsonDataObjet.age = 17

const outJsonString = JSON.stringify(jsonDataObjet)
fs.writeFileSync('1-json.json', outJsonString)
