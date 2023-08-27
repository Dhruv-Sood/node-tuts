const express = require("express");

const app = express();

const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.send(`<h1>This is the homepage</h1><a href="/api/products">Products</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});


app.get("/api/products/:productID", (req, res) => {
  
    // console.log(req)
    // console.log(req.params)

    const {productID} = req.params

  const singleProduct = products.find((product) => product.id === Number(productID))
  
  if(!singleProduct){
    res.status(404).send(`Product does not exist`)
  }
  
  res.json(singleProduct)
});


app.listen(5173, () => {
  console.log(`Sever is running on port 5173`);
});
