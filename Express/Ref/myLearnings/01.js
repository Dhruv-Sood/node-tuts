const http = require('http')
const fs = require('fs')

const index = fs.readFileSync('./index.html','utf8')
const indexStyles = fs.readFileSync('./styles.css','utf8')
const indexJs = fs.readFileSync('./browser-app.js','utf8')
const logo = fs.readFileSync('./logo.svg','utf8')

const server = http.createServer((req,res)=>{
    // res.writeHead(200,{
    //     'content-type': 'text/plain'
    // })
    // res.write(`<h1>Hello</h1>`);
    // res.end()

    const url = req.url
    console.log(url);
    if(url === '/'){
        res.writeHead(200, {
          "content-type": "text/html",
        });
        res.write(index);
        res.end();
    }
    else if(url==='/styles.css'){
        res.writeHead(200,{
            'content-type':'text/css'
        })
        res.write(indexStyles)
        res.end()
    }
    else if(url==='/browser-app.js'){
        res.writeHead(200, {
          "content-type": "text/js",
        });
        res.write(indexJs);
        res.end();
    }
    else if (url === "/logo.svg") {
        res.writeHead(200, {
          "content-type": "image/svg+xml",
        });
        res.write(logo);
        res.end();
    } else {
      res.end();
    }
 
})


server.listen(5173)

