let random = Math.random()

let wholeRandomNumber = Math.floor(Math.random() * 10) + 1

console.log(wholeRandomNumber)

// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
let roll = `You rolled a ${die1} and a ${die2}. They sum ${die1 + die2}`

console.log(roll)

const password = prompt('Please enter a new password');

if(password.length >= 6) {
  if (password.indexOf(' ') === -1) {
  console.log('good password') 
  } else {
  console.log('password too short! please enter password with 6+ characters')
//password cannot contain a space

}} else {
  console.log('password cannot contain a space')
}