import request from 'supertest';
import app from '../src/index';

describe('Get /api/users/', ()=> {
 it('should return 200 an array of users',async()=> {
  const res= await request(app).get('/api/users');
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);

 });
});