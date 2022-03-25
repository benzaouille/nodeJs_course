console.log('Starting')

setTimeout(() => {
  console.log('setTimeOut after 2 sec')
}, 2000)

setTimeout(() => {
  console.log('setTimeOut after 0 sec')
}, 0)

console.log('Stopping')
