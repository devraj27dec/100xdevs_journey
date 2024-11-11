const express = require("express");
const app = express();
const z = require('zod')
const port = 3000;

app.use(express.json()) // only when you use post body paramenter 

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

const schema = z.array(z.number())

// userSchema 
// {
//  email: string => email validataon
//  password: 6 letters
//  country: "US" ,"INR"
// }




app.post('/health_checkup', (req , res) => {

    const kidneys = req.body.kidneys;
    // const kidneysLength = kidneys.length;
    const response = schema.safeParse(kidneys).value
    // res.send("you have " + kidneysLength + " kidneys")
    res.send({
        response
    })

})


// global catches

// app.use(function(req, res , next ,err) {
//     res.json({
//         msg: "Something went wrong "
//     })
// })


// zod implementation
function validateInput(arr) {
    
    const userSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.number().min(6),
        country: z.literal("IN").or(z.literal("US")),
        kidneys: z.array(z.number())
    })

    const response = userSchema.safeParse(arr)
    console.log(response)
}

validateInput({
    email:"dev12@test.com",
    password:122414,
    country: "IN",
    kidneys: [1 , 2]
})


app.post('/register' , (req , res) => {

    const response = validateInput(req.body)

    if(!response.success) {
        res.json({
            msg: "Check your Inputs"
        })
    }

    const user = localStorage.setItem(response)
    user.save()
    res.status(201).json({
        user,
        msg:"User Created Successfully"
    })

})

// app.post('/login ' , (req , res) => {
//     const response = validateInput(req.body)

//     if(!response.success) {
//         res.json({
//             msg: "Check your Inputs"
//         })
//     }
//     return
// })


// function Authorization() {
    
//     const token = Authorization

// }

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
