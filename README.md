# Express API Example

This repository contains a very small REST API built with **Node.js**, **Express**, and **TypeScript**. It demonstrates basic CRUD endpoints for managing users and can be implemented in about 30–40 minutes as a technical interview exercise.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the server in development mode**
   ```bash
   npm run dev
   ```
   The API will be available on `http://localhost:3000` by default.
3. **Build and run**
   ```bash
   npm start
   ```

## Endpoints

- `GET /users` – list all users
- `GET /users/:id` – get a user by id
- `POST /users` – create a new user (expects `name` and `email` in the body)

## Tests

Basic tests for the service layer can be run with:

```bash
npm test
```

## Quick Steps to Recreate From Scratch

1. Initialize a project and install the required packages:
   ```bash
   npm init -y
   npm install express
   npm install -D typescript ts-node-dev @types/express @types/node
   npx tsc --init
   ```
2. Create `src/index.ts` to set up Express and mount your routes.
3. Add a simple user model in `src/models/user.model.ts`:
   ```ts
   export interface User {
     id: number;
     name: string;
     email: string;
   }
   ```
4. Implement controllers, services, and routes under `src/`.
5. Add scripts to `package.json`:
   ```json
   "scripts": {
     "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
     "build": "tsc",
     "start": "node dist/index.js",
     "test": "npm run build && node --test ./dist/tests"
   }
   ```
6. Run `npm run dev` and exercise the endpoints using curl or Postman.

These steps help bootstrap a TypeScript Express API quickly for interview demonstrations.
