//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],

    //utiliser directement une function arrow est mauvais pour les methode parce
    //on ne peut pas acceder aux this de l'objet appelant la methode
    //du coup on utilise ES6 paradigme

    //la fonction ci dessous est fausse car this n'est pas defini
    /*getTasksToDo : () => {
      console.log(this.tasks)
      const duplicateData = this.tasks.filter((task) => {
        return (task.completed === false)
      })
      return duplicateData
    }*/

    //fonctionne mais c'est une ancienne manière de faire
    /*getTasksToDo : function(){
      console.log(this.tasks)
      const duplicateData = this.tasks.filter((task) => return (task.completed === false))
    }*/

    //nouveau paradigme ES6
    getTasksToDo(){
      console.log(this.tasks)
      return this.tasks.filter((task) => (task.completed === false))
    }
}

console.log(tasks.getTasksToDo())
