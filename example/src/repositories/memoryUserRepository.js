class MemoryUserRepository {
  constructor() {
    this.users = [{ id: 1, name: 'Jane Doe', email: 'jane@example.com' }];
  }

  async list() {
    return this.users;
  }

  async get(id) {
    return this.users.find((u) => u.id === id);
  }

  async create(user) {
    const nextId = this.users.reduce((m, u) => Math.max(m, u.id), 0) + 1;
    const newUser = { id: nextId, ...user };
    this.users.push(newUser);
    return newUser;
  }
}

module.exports = { MemoryUserRepository };
