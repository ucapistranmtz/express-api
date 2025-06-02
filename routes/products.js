import express from 'express';

const router = express.applicationRouter();

router.get('/', (req, res) => {
  res.json({ message: 'Products list' });
});

router.getById('/', (req, res) => {
  res.json({ message: 'Products list' });
});

router.getByName('/', (req, res) => {
  res.json({ message: 'Products list' });
});

router.delete('/', (req, res) => {
  res.json({ message: 'Products list' });
});

router.get('/', (req, res) => {
  res.json({ message: 'Products list' });
});

router.get('/', (req, res) => {
  res.json({ message: 'Products list' });
});

export default { router: productRouter };
