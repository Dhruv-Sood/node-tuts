const express = require('express')

const path = require('path')

const app = express()

app.use(express.static('./public'))


app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./Ref/navbar-app/index.html'))
    
})

app.all('*',(req,res)=>{
    res.status(404).send("Error page")
})

app.listen(5173,()=>{
    console.log(`Server is running on port 5173....`)
})