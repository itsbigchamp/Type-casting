// const animal = 'cat' // global scope
// animal = 'Dog'
// animal = 'snake'

// if(animal === 'dog' || animal === 'Dog' || animal === 'snake'){
//     animal = 'snake' // block scoped
//     console.log('woof')
// } else {
//     console.log('your animal is ', animal)
// }


// let person = 'mammal'
// person = 'not mammal'
// person = false || null || undefined


// if (person === 'mammal'){ 
//     console.log('yes though so!')
// } else if (person && true) {
//     console.log('not sure')
// } else if (person === 'not mammal'){
//     console.log('this is catch all')
// } else {
// console.log('catch all')
// }i

/******* Date */

const date = new Date()
console.log(date)

const time = date.getTime()
console.log(time)

const hours = date.getHours()
console.log(hours)
 
// if (hours > 12) {
//     console.log('is past lunch time')
// // } else if(hours <= 11.50){
//     console.log('is almost lunch time')
// }

// const today = date.getDate()
// console.log(today)

// if (today === 12) {
//     console.log('happy 4th of July')
// }
// const age = 26

//    if ( age => 26){
//      console.log(`Victoria is an adult`)
//  } else if ( age < 26){
//      console.log(`Victoria is an adolesent`)
//                  }



                 
const name = `Todd`
  if (age => 45){
      console.log(name,'can drink')
}else if (age < 45){
    console.log(name,'can not drink')
}let age = 45