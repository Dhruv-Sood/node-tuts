const http = require('http')
// console.log(http);

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Welcome to the home page of our first ever server!!");
    }
    else{
    res.end(`
        <h1>Oops.....Page....Not.....Found....</h1>
    `)
    }
})

server.listen(5173)