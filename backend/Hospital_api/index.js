const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const app = express();
const z = require('zod')
const port = 3000;

app.use(express.json()) // only when you use post body paramenter 
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("Hello world");
});

// middlewares => they are just callback funcions or modify the req & res to run before the final route handlers

// app.get('/health_checkup', (req, res) => {
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username != "harkirat" || password != "123") {
//         res.status(403).json({
//             msg: "Invalid username or password"
//         });
//         return;
//     }

//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(403).json({
//             msg: "Invalid kidneyId"
//         });
//         return;
//     }
//     res.json({ message: "You are ready for Health Checkup!" });
// });

// const schema = z.array(z.number())

// userSchema 
// {
//  email: string => email validataon
//  password: 6 letters
//  country: "US" ,"INR"
// }




// app.post('/health_checkup', (req , res) => {

//     const kidneys = req.body.kidneys;
//     // const kidneysLength = kidneys.length;
//     const response = schema.safeParse(kidneys).value
//     // res.send("you have " + kidneysLength + " kidneys")
//     res.send({
//         response
//     })

// })
// global catches

// app.use(function(req, res , next ,err) {
//     res.json({
//         msg: "Something went wrong "
//     })
// })


// User Authenticaion

// zod implementation

function validateInput(arr) {
    const userSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.number().min(6),
        country: z.literal("IN").or(z.literal("US")),
        kidneys: z.array(z.number())
    })

    const result = userSchema.safeParse(arr)
    console.log(result)
    if (result.success) {
        return {
            success: true,
            data: result.data
        };
    } else {
        return {
            success: false,
            error: result.error
        };
    }
}

// validateInput({
//     name:"dev",
//     email:"dev12@test.com",
//     password:122414,
//     country: "IN",
//     kidneys: [1 , 2]
// })


let users = [];


app.post('/register' , function(req , res) {
  
    const response = validateInput(req.body);

    if(!response.success) {
        res.status(400).json({
            msg: "Check your Inputs"
        })
    }

    const { email, name, password, country, kidneys } = response.data;

    const hashedPassword = bcrypt.hash(password.toString() , 10)

    const user = { email, name, password: hashedPassword, country, kidneys };
    users.push(user);

    const token = jwt.sign({user} , JWT_SECRET, {expiresIn: '1d'})

    res.cookie('token' , token , {httpOnly: true});

    return res.status(201).json({
        success:"true",
        msg: "User registered successfully",
        token
    });
    
})

let JWT_SECRET="jdksajfjdsadfhsahjgdha"

function UserAuthentication(req , res , next) {
    
    const {token} = req.cookies;

    if(!token){
        res.json({
            msg: "Token Undefined!"
        })
    }

    try {
        const decoded = jwt.verify(token , JWT_SECRET)
        req.user = decoded;
        next()
    
        console.log(decoded)
    } catch (error) {
        return res.status(403).json({ msg: "Invalid Token!" });
    }


}


app.post('/login' ,UserAuthentication , (req , res) => {
    const response = validateInput(req.body)

    if(!response.success) {
        res.json({
            msg: "Check your Inputs"
        })
    }
    
    const {email , password } = response.data

    const user = users.find((u) => u.email === email)

    if (!user) {
        return res.status(404).json({ msg: "User not found" });
    }

    const isPasswordValid = bcrypt.compare(password ,user.password)

    if (!isPasswordValid) {
        return res.status(401).json({ msg: "Invalid password" });
    }

    return res.status(200).json({ msg: "Logged in successfully" });
})

app.get('/profile', UserAuthentication, (req, res) => {
    res.json({ msg: `Welcome, ${req.user.name}` });
});

app.post('/logout' , (req , res) => {

    const userId = req.users.userId;

    res.clearCookie('token')

    // res.cookie("token" , null, {
    //     expires: new Date(Date.now()),
    //     httpOnly: true
    // })
    res.status(200).json({
        msg: `User with ID ${userId} logged out successfully`

    })
})

app.get('/users' , (req , res) => {
    return res.status(200).json({users})
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
