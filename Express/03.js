const express = require('express')

const app = express()

const {products} = require('./data.js')


app.get('/',(req,res)=>{
    res.json([
      { name: "Dhruv Sood", age: 18 },
      { name: "Abhimanyu Sood", age: 21 },
    ]);
})

app.listen(5173,()=>{
    console.log(`Sever is running on port 5173`)
})