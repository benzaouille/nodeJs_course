const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes...'

// ADDNOTE FUNCTION
const addNote = (title, body) => {
  const data = loadNote()
  //cette fonction va nous permettre de copier les objets ayant un title deja similaire
  //on n'utilise plus cette fonction car elle n'est pas optimisé, elle ne va pas s'arreter quand elle trouve une correspondance
  //et c'est un problème si il  a beaucoup de note
  //const duplicateData = data.filter((note) => note.title === title)

  //a la place on utilise find
  const duplicateData = data.find((note) => note.title === title)
  if(!duplicateData)
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

//LIST NOTE
const listNotes = () =>{
  const dataJSON = loadNote()
  console.log(chalk.yellow('Yours Notes'))
  dataJSON.forEach( (note) => console.log('title ->', chalk.yellow(note.title), 'body ->', chalk.yellow(note.body)))
}

//READNOTE
const readNote = (title) => {
    const data = loadNote()
    const replicateNote = data.find((note) => note.title === title)

    if(replicateNote){
      console.log('body -> ', chalk.green(replicateNote.body))
    }else{
      console.log(chalk.red('No note found'))
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
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
