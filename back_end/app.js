const dotenv = require('dotenv')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn')
const port = process.env.PORT

//require model
const Users = require('./models/userSchema.js')

//these methods used to get data from front end

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.get('/', (req, res)=>{
    res.send("Hello world")
})

//registration
app.post('/register', async (req, res)=>{
    try{
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username: username,
            email: email,
            password: password
        });

        const created = await createUser.save();

        console.log(created)
        res.status(200).send("Registred")

    }catch(error){
        res.status(400).send(error)
    }
})

app.post('/login', async (req, res)=>{
    try{
        const username = req.body.username
        const email = req.body.email;
        const password = req.body.password;

        let query;
        if(username){
            query = {username:username}
        }else if(email){
            query = {email:email}
        }

        const user = await Users.findOne(query);

        if(user){
            const isMatch = await bcrypt.compare(password, user.password);
            if(isMatch){
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    express : new Date(Date.now() + 86400000),
                    httpOnly: true
                })
                res.status(200).send("LoggedIn")
            }else{
                res.status(400).send("Invalid Credentials")
            }
        }else{
            res.status(400).send("Invalid Credentials")
        }
    }catch(error){
        res.status(400).send(error)
    }
})

app.listen(port, ()=>{
    console.log("Server is listening");
})