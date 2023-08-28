const express = require("express");

const app = express();

// req => middleware => res

const {logger} = require('./logger.js')



app.get('/',logger,(req,res)=>{


    res.send('Home Page')
})

app.get("/about", logger, (req, res) => {
  res.send("About Page");
});

app.listen(5173,()=>{
    console.log(`Server is listening on port 5173`);
})