const express = require('express')

const app = express()

const {products} = require('./data.js')


app.get('/',(req,res)=>{
    res.json(products);
})

app.listen(5173,()=>{
    console.log(`Sever is running on port 5173`)
})