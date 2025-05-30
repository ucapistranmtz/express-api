const { request, response } = require('express');
let products = [
  { id: 1, name: 'iphone se ', price: 150 },
  { id: 1, name: 'iphone x ', price: 300 },
  { id: 1, name: 'iphone 11 ', price: 350 },
  { id: 1, name: 'iphone 12 ', price: 400 },
  { id: 1, name: 'iphone 13 ', price: 500 },
];
const addProduct = (req, res) => {
  console.log();
  const max = Math.max(...new Set(products.map(item => item.id)));
  //const max = Math.max(...new Set(products.map(product => product.id)));

  console.log('max', max);
  const product = products.filter(item => item.name === req.body.name);
  if (product.length > 0) {
    res.status(400).json({ message: 'Product can not be created' }).send();
  }
  const newProduct = { ...req.body, id: max + 1 };
  products.push(newProduct);
  res.status(201).json(newProduct).send();
};

const getProducts = (req, res) => {
  res.status(200).json(products);
};

const getProduct = (req, res) => {
  res.status(200);
};

const deleteProduct = (req, res) => {
  res.status(200);
};

module.exports = { addProduct, getProducts, getProduct, deleteProduct };
