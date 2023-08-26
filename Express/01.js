const express = require("express");

const app = express();

// METHODS WE WILL USE THE MOST
/*
-> app.get()
-> app.post()
-> app.put()
-> app.delete()
-> app.all()
-> app.delete()
-> app.use()
-> app.listen()

*/

app.get('/',(req,res)=>{
    res.status(200).send(`Homepage`)
})


app.get('/about',(req,res)=>{
    res.status(200).send(`About Page `)
})


app.all('*',(req,res)=>{
    res.status(404).send(`RESOURSE NOT FOUND!!!!`)
})


app.listen(5173,()=>{
    console.log(`The server is listening on port 5173....`)
})
