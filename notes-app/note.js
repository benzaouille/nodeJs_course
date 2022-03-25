const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes...'

// ADDNOTE FUNCTION
const addNote = (title, body) => {
  const data = loadNote()
  //cette fonction va nous permettre de copier les objets ayant un title deja similaire
  const duplicateData = data.filter((note) => note.title === title)

  if(duplicateData.length === 0)
  {
    data.push({
      title : title,
      body : body
    })
    saveNote(data)
    console.log('note added succefully !')
  } else{
    console.log('note already added !')
  }
}
//

// REMOVENOTE FUNCTION
const removeNote = (title) => {
  const data = loadNote();
  //on utilise la methode filter cette fois pour degager la note
  const duplicateData = data.filter((note) => (note.title !== title))

  if(duplicateData.length === data.length){
    console.log(chalk.red.inverse('No note was found'))
  }else{
    console.log(chalk.green.inverse('the note was removed'))
    saveNote(duplicateData);
  }
}


const loadNote = () => {
  try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataString = dataBuffer.toString();
    const dataJSON   = JSON.parse(dataString)
    return dataJSON
  }catch(e){
    return [] // apparament [] est l'équivalent d'un objet .json vide
  }
}

const saveNote = (data) => {
  const dataString = JSON.stringify(data)
  fs.writeFileSync('notes.json', dataString)
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}
