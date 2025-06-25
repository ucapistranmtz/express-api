const { test } = require('node:test');
const assert = require('assert');
const { MemoryUserRepository } = require('../src/repositories/memoryUserRepository');

const repo = new MemoryUserRepository();

test('list returns initial user', async () => {
  const users = await repo.list();
  assert.strictEqual(users.length, 1);
});

test('create adds a user', async () => {
  const user = await repo.create({ name: 'Bob', email: 'bob@example.com' });
  assert.strictEqual(user.id, 2);
  const users = await repo.list();
  assert.deepStrictEqual(users[1], user);
});
