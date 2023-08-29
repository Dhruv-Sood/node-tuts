const express = require("express");

const app = express();

// req => middleware => res

const {logger} = require('./logger.js')
const authorize  = require("./authorize.js");

app.use([authorize, logger]);


app.get('/', (req,res)=>{


    res.send('Home Page')
})

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(5173,()=>{
    console.log(`Server is listening on port 5173`);
})