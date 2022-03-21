const chalk = require('chalk')
const yargs = require('yargs')


yargs.command({
  command  : 'add',
  describe : 'add new note',
  handler  : function() {
    console.log('adding stuff..!')
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
