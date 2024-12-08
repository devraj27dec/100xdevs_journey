
// interface User {
//     name: string,
//     age: number
// }

// function SumofAge(user1: User , user2:User){
//     return user1.age + user2.age
// }

// const ans = SumofAge({name:"dev" , age:20 },{name:"raj", age:30})
// console.log(ans)

// const user = {
//     id: "123",
//     name: "Alice",
//     age: 30,
//     email: "alice@example.com",
//     password: "securepassword",
// }; 

// interface User {
//     id:string,
//     name:string,
//     age:number,
//     email:string,
//     password:string
// }

// type UpdateProps = Pick<User , "name" | "email" | "age">

// function updateUser(user:UpdateProps){
//     console.log(`Name:${user.name} & Age:${user.age}`)
// }



// type User = {
//     id: string;
//     username: string
// }

// type Users = {
//     [key: string]: User
// }

// const users:Users = {
//     "dev12": {
//         id: "dev121",
//         username:"devraj27"
//     },
//     "yash21": {
//         id:"yash16",
//         username:"yashraj16"
//     }
// }



// records and Map



// type Users = Record<string , {age:number , name:string}>

// const users: Users = {
//     "dev23": {age:21 , name:"devraj"},
//     "raj72": {age: 25, name:"yashraj16"}
// }

// console.log(users["dev23"])

// interface User{
//     name:string
//     email:string
//     age: number
// }

// const users = new Map<string , User>();
// users.set("dev12", {name:"dev", age:30, email:"dev12@test.com"})
// users.set("sarsh@qd1" , {name:"$arah", age: 31 , email: "sarsh@qd1"})

// const user = users.get("dev12")
// console.log(user)



type EventType = 'click'|'scroll'|'mousemove'
type ExcludeEvent = Exclude<EventType, "scroll">

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`)
}

handleEvent('click')