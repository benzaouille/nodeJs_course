const chalk = require('chalk')
const yargs = require('yargs')


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
  handler  : function(argv) {
    console.log('new Title : ', argv.title)
    console.log('body : ', argv.body)
  }
})

yargs.command({
  command  : 'remove',
  describe : 'remove note',
  handler  : function() {
    console.log('removing stuff..!')
  }
})

yargs.command({
  command  : 'list',
  describe : 'list elements in note',
  handler  : function(){
    console.log('listing elements..')
  }
})

yargs.command({
  command  : 'read',
  describe : 'read elmement in note',
  handler  : function(){
    console.log('reading elements..')
  }
})

yargs.parse();
