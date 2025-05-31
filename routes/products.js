const express = require("express");
const router = express.Router();

let products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 100 },
  { id: 3, name: "Product 3", price: 100 },
  { id: 4, name: "Product 4", price: 100 },
  { id: 5, name: "Product 5", price: 100 },
  { id: 6, name: "Product 6", price: 100 },
  { id: 7, name: "Product 7", price: 100 },
  { id: 8, name: "Product 8", price: 100 },
  { id: 9, name: "Product 9", price: 100 },
];
router.get("/", (req, res) => {
  res.status(200).json(products);
});

router.get("/:id", (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json(product);
});

router.put("/:id", (req, res) => {
  const productId = Number(req.params.id);
  let productProperties = req.body;

  const productIndex = products.indexOf((item) => item.id === productId);

  if (productIndex<0) {
    res.status(404).json({ message: "Product not found" });
  }
  const product = products[productIndex];

   const [id,...rest]= product;
  product ={ id: id, ...productProperties };
  res.status(200).json(product);
});

router.delete("/:id", (req, res) => {
  if (!products.every((item) => item.id === Number(req.params.id))) {
    res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({ message: "Product deleted sucessfully" });
});

router.post("/", (req, res) => {
  const maxId = Math.max(...products.map((item) => Number(item.id)));

  const newproduct = { id: maxId + 1, ...req.body };

  products.push(newProduct);

  req.status(201).json(newProduct);
});

module.exports = router;
