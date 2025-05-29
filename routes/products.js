const express = require("express");

const router = express.Router();
let products = [
  { id: 1, name: "Iphone se", price: 100 },
  { id: 2, name: "Iphone 14", price: 300 },
  { id: 3, name: "Iphone 14", price: 300 },
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

router.post("/", (req, res) => {
  console.log(req.body);
  const maxId= Math.max  (... new Set(products.map(product=>product.id)));
 
    console.log("Max Id", maxId);
  const newProduct = {
    id: maxId + 1,
    name: req.body.name,
    price: req.body.price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct).send();
});

router.delete("/:id", (req, res) => {
    console.log("Delete Request", req.params.id);
  const productIndex = products.findIndex( (product)=> product.id === parseInt(req.params.id));
  console.log("Product Index", productIndex);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  products = products.filter(
    (product) => product.id !== parseInt(req.params.id)
  );
  console.log("Products", products);
  return res.status(200).json({ message: "Product deleted successfully",remaingingProducts: products }).send();
});

module.exports = router;
