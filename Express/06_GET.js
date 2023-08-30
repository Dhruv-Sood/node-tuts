const express = require("express");
const app = express()

const {people} = require('./data')

// STATIC ASSETS
app.use(express.static('./ref/methods-public'))

// PARSE FORM DATA
app.use(express.urlencoded({extended: false}))

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true , data:people})
})


app.post('/login',(req,res)=>{
    const {name} = req.body
    if(name !== ''){
        res.status(200).send(`Welcome ${name}`)
        return
    }
    else{
        res.status(401).send(`Please provide the credentials`)
        return
    }
})


app.listen(5173, ()=>{
    console.log(`The server is starting at port 5173....`)
})