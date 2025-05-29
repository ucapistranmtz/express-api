const express = require("express");

const router = express.Router();
const products = [
  { id: 1, name: "Iphone se", price: 100 },
  { id: 1, name: "Iphone 14", price: 300 },
];
router.get("/", (req, res) => {
  res.status(200).json(products).send();
});

router.get("/:id", (req, res) => {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );

  if (!product) {
    res.status(404).json({ message: "Product not found" }).send();
  }

  res.status(200).json(product).send();
});

router.post('/',(req,res)=>{
console.log(req.body);
      const newProduct = {
        id: products.length+1,
        name:req.body.name,
        price:req.body.price
      };

      products.push(newProduct);

      res.status(201).json(newProduct).send();
})

module.exports = router;
