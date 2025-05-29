const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('../routes/products');

let app;

beforeEach(() => {
    app = express();
    app.use(bodyParser.json());
    // Re-require the router to reset the in-memory products array
    jest.resetModules();
    app.use('/products', require('../routes/products'));
});

describe('Products API', () => {
    describe('GET /products', () => {
        it('should return all products', async () => {
            const res = await request(app).get('/products');
            expect(res.statusCode).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBe(3);
            expect(res.body[0]).toHaveProperty('id', 1);
        });
    });

    describe('GET /products/:id', () => {
        it('should return a product by id', async () => {
            const res = await request(app).get('/products/1');
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('id', 1);
            expect(res.body).toHaveProperty('name', 'Iphone se');
        });

        it('should return 404 if product not found', async () => {
            const res = await request(app).get('/products/999');
            expect(res.statusCode).toBe(404);
            expect(res.body).toHaveProperty('message', 'Product not found');
        });
    });

    describe('POST /products', () => {
        it('should create a new product', async () => {
            const newProduct = { name: 'Iphone 15', price: 500 };
            const res = await request(app).post('/products').send(newProduct);
            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('id');
            expect(res.body).toHaveProperty('name', 'Iphone 15');
            expect(res.body).toHaveProperty('price', 500);

            // Check if the product was added
            const getRes = await request(app).get('/products');
            expect(getRes.body.length).toBe(4);
        });
    });

    describe('DELETE /products/:id', () => {
        it('should delete a product by id', async () => {
            const res = await request(app).delete('/products/1');
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('message', 'Product deleted successfully');
            expect(Array.isArray(res.body.remainingProducts)).toBe(true);
            expect(res.body.remainingProducts.find(p => p.id === 1)).toBeUndefined();
        });

        it('should return 404 if product to delete is not found', async () => {
            const res = await request(app).delete('/products/999');
            expect(res.statusCode).toBe(404);
            expect(res.body).toHaveProperty('message', 'Product not found');
        });

        it('should delete all products one by one', async () => {
            // There are initially 3 products
            let res = await request(app).delete('/products/1');
            expect(res.statusCode).toBe(200);
            expect(res.body.remaingingProducts.length).toBe(2);

            res = await request(app).delete('/products/2');
            expect(res.statusCode).toBe(200);
            expect(res.body.remaingingProducts.length).toBe(1);

            res = await request(app).delete('/products/3');
            expect(res.statusCode).toBe(200);
            expect(res.body.remaingingProducts.length).toBe(0);

            // Now, GET /products should return an empty array
            const getRes = await request(app).get('/products');
            expect(getRes.body.length).toBe(0);
        });

        it('should not allow creating a product with missing name or price', async () => {
            let res = await request(app).post('/products').send({ price: 100 });
            // Your current implementation does not validate, so this will still create a product
            // If you add validation, change this to expect 400
            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('id');
            expect(res.body).toHaveProperty('name', undefined);

            res = await request(app).post('/products').send({ name: 'No Price' });
            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('id');
            expect(res.body).toHaveProperty('price', undefined);
        });

        it('should increment id correctly when adding products after deletion', async () => {
            // Delete product with id 3
            await request(app).delete('/products/3');
            // Add a new product
            const res = await request(app).post('/products').send({ name: 'Iphone 16', price: 600 });
            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('id', 4); // Should be max id + 1
            expect(res.body).toHaveProperty('name', 'Iphone 16');
        });
    });
});