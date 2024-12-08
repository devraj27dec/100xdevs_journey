// let nums = [1 , 2 ,3 ,4 ,5 ,6]


// function claculateSum() {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//     }
//     return sum;
// }


// console.log(claculateSum())



// OOPS in javascript

// new key word , prototype
// function User(username , score){
//     this.username = username
//     this.score = score
// }

// User.prototype.increment = function () {
//     this.score++
// }

// const user = new User('dev' , '12')
// console.log(user.increment())

// prototype

// let name = 'devraj      '
// console.log(name.length)


// let player = ['msd', 'virat' ,'bumrah']

// let rolePlayer = {
//     msd: "wicketkeeper",
//     virat:"batsman",
//     bumrah:"bowler"

//     // getDhoniRole:function() {
//     //     console.log(`Dhoni is number one ${this.msd} in world`)
//     // }
// }



// Object.prototype.hitesh = function() {
//     console.log('hitesh is present in all objects')
// }

// rolePlayer.hitesh()
// player.hitesh()


// inheritance

// const User = {
//     name: "devraj"
// }
// const Teacher = {
//     makeVideo: true
// }
// const TeachingSupport = {
//     isAvailabel : true
// }
// const TASupport = {
//     fullTime: true,
//     makePapers: "JS Assignment",
//     __proto__:TeachingSupport
// }

// // modern syntaxc
// Object.setPrototypeOf(TeachingSupport , Teacher)

// const Username = "Devraj Rajput     "

// String.prototype.trueLength = function() {
//     console.log(`${this}`)
//     console.log(`True length is : ${this.trim().length}`)
// }

// Username.trueLength()


// class User{
//     constructor(username , password){
//         this.username = username,
//         this.password = password
//     }
//     hashPassword() {
//         return `$dsaf6sat434g34t4q{this.password}dsafuiuteqwey`
//     }
//     logMe(){
//         console.log(`my name is ${this.username} & password is ${this.password}`)
//     }
// }

// const user = new User('chai' , '123')
// console.log(user)
// user.logMe()
// console.log(user.hashPassword())


// behind the scene


// function hello(username , email) {
//     this.username = username
//     this.email = email

//     logMe(){
//         console.log(`my name is ${this.username} & password is ${this.password}`)
//     }
// }

// function sumEvenNumbers() {
//     let sum = 0;
//     for (let i = 2; i <= 100; i += 2) {
//       sum += i;
//     }
//     return sum;
// }
  
// console.log(sumEvenNumbers()); // Output: 2550
  