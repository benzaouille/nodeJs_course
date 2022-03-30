//es6 shortand
 const name = 'Sofiane'
 const age = 26

//common way
 const chara = {
   name: name,
   age, age
 }
//with es6 paradigme,
 const charaEs6 = {
   name,
   age
 }

////////////////////////////////////////////////////////////////////////////////

//Es6 object destructuring
const objet = {
  label : 'Red laptop',
  stock : 201,
  price : 1000
}
//it permits to have easily access to parameters on a object
const {label, price} = objet ; // ou chara

console.log(label)
console.log(price)
////////////////////////////////////////////////////////////////////////////////
//Grace a l'Es6 on peut aussi renomer une valeur que l'ont veux obtenir d'un objets et initialiser une variable qui n'existe pas dans l'objet ex :
 const {label:newNameLabel, price:newNamePrice} = objet ;
 console.log(newNameLabel)
 console.log(newNamePrice)
////////////////////////////////////////////////////////////////////////////////
//Avec l'Es6 on peut filter les parametres que l'ont veut fournir à une fonction
const randomFunction = (argument1, {label, stock}) => {
  console.log(label)
  console.log(stock)
}

randomFunction(1, objet)
