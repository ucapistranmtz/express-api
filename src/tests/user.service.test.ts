import test from 'node:test';
import assert from 'node:assert';
import userService from '../services/user.services';

test('createUser adds a new user', async () => {
  const initial = await userService.getAllUsers();
  const user = await userService.createUser({ name: 'Jane', email: 'jane@example.com' });
  const allUsers = await userService.getAllUsers();
  assert.strictEqual(allUsers.length, initial.length + 1);
  assert.deepStrictEqual(allUsers.find(u => u.id === user.id), user);
});
