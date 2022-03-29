//callback function
//NOTE : when dealing with function using async function like setTimeOut... we don't use standard return function like  :

console.log("BAD WAY TO DO THIS")
const standardFunction = () => {
  setTimeout(() => {
      const data = {
        locationX : 0,
        locationY : 0,
      }
      return data
  }, 2000) //2 sec
}

console.log(standardFunction()) //will return undefined because standardFunction is in the stack so it end and setTimeOut remain in the queu wainting for the 2 sec to end

console.log("GOOD WAY TO DO THIS")
//the right way to use an async function within an async function is to use callback
const callbackFunction = (callback) => {
  setTimeout(() => {
      const data = {
        locationX : 0,
        locationY : 0,
      }
      callback(data)
  }, 2000) //2 sec
}
callbackFunction((data) => {
  console.log(data)
})


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b , callback) => {
  setTimeout(() => {
    c = a + b
    callback(c)
  }, 2000)
}
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
