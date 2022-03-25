const chalk = require('chalk')
const yargs = require('yargs')
const notesUtilities = require('./note.js')

yargs.command({
  command  : 'add',
  describe : 'add new note',
  builder :{
    title : {
      describe : 'the title I want to add',
      demandOption : true, //force the --title to exist when calling add
      type : 'string' // force the type to be a string
    },
    body : {
      descibe : 'text describing the title',
      demandOption : true,
      type : 'string'
    }
  },
  handler(argv){
    notesUtilities.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command  : 'remove',
  describe : 'remove note',
  builder : {
    title : {
      describe : 'note to remove',
      demandeOption : true,
      type : 'string'
    }
  },
  handler(argv){
    notesUtilities.removeNote(argv.title)
  }
})

yargs.command({
  command  : 'list',
  describe : 'list elements in note',
  handler(){
    notesUtilities.listNotes()
  }
})

yargs.command({
  command  : 'read',
  describe : 'read elmement in note',
  builder : {
    title : {
      describe : 'note to read',
      demandOption : true,
      type : 'string'
    }
  },
  handler(argv){
    notesUtilities.readNote(argv.title)
  }
})

yargs.parse();
