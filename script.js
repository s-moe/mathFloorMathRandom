// let random = Math.random()

// let wholeRandomNumber = Math.floor(Math.random() * 10) + 1

// console.log(wholeRandomNumber)

// // NO TOUCHING! (please)
// const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
// const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// // YOUR CODE BELOW THIS LINE:
// let roll = `You rolled a ${die1} and a ${die2}. They sum ${die1 + die2}`

// console.log(roll)

// const password = prompt('Please enter a new password');

// if(password.length >= 6) {
//   if (password.indexOf(' ') === -1) {
//   console.log('good password') 
//   } else {
//   console.log('password too short! please enter password with 6+ characters')
// //password cannot contain a space

// }} else {
//   console.log('password cannot contain a space')
// }

//another way: 

// const password = prompt('enter a password')

// if (password.length >= 6 && password.indexOf(' ') === -1){
//   console.log('valid password')
// } else {
//   console.log('enter a valid password')
// }

//0-5 free
//5-10 $10
//10-65 $20
//66+ free
// const age = 13;

// if (age >=0 && age <= 5 || age > 65){
//   console.log('free')
// } else if (age >=6 && age <= 10){
//   console.log('$10')
// } else if (age >= 11 && age <= 65) {
//   console.log('$20')
// } else {
//   console.log('invalid age')
// }

// let firstName = prompt('enter your first name');

// if (!firstName) {
//   firstName = prompt('enter a valid first name')
// } else {
//   console.log(firstName)
// }

// const age = 13;

// if (!(age >=0 && age <= 5 || age > 65)){
//   console.log('you are not a baby or a senior')
// }

//Switch statement
// const day = 6;

// if (day === 1) {
//   console.log('Monday')
// } else if (day === 2) {
//   console.log('Tuesday')
// } else if (day === 3) {
//   console.log('Wednesday')
// }

// switch(day){
//   case 1: 
//   console.log('Monday');
//   break;
//   case 2: 
//   console.log('Tuesday');
//   break;
//   case 3: 
//   console.log('Wednesday');
//   break;
//   case 6:
//   case 7:
//   console.log('weekend');
//   break;
//   default:
//   console.log('Unknown number')
// } 

//Arrays
let days = ['Monday', 'Tuesday', 'Wednesday']
console.log(days)
console.log(days.length)
console.log(days[3 -1])

console.log(days[2][0])

days[2] = "Thursday"
console.log(days)
console.log(days[2])

days[5] = "Friday"
console.log(days)
