const { MemoryUserRepository } = require('../repositories/memoryUserRepository');

const repo = new MemoryUserRepository();

async function listUsers(req, res) {
  const users = await repo.list();
  res.json(users);
}

async function getUser(req, res) {
  const id = Number(req.params.id);
  const user = await repo.get(id);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  res.json(user);
}

async function createUser(req, res) {
  const { name, email } = req.body;
  const created = await repo.create({ name, email });
  res.status(201).json(created);
}

module.exports = { listUsers, getUser, createUser };
