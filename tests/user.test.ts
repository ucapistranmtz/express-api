// tests/user.test.ts
import request from 'supertest';
import app from '../src/index';

describe('GET /api/users', () => {
  it('should return 200 and an array', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
