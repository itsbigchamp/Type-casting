const date = new Date()
console.log(date)
 
const hour = date.getHours()
console.log(hour)

// let message = 'good morning class'
let message = `good ${hour > 12 ? 'afternoon': 'morning'} class`



console.log(message)