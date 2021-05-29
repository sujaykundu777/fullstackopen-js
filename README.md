# fullstackopen-js
Full stack web app boilerplate using JS stack.

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

This project follows a monorepo-based architecture

### Run App:

```sh
cd fullstackopen-js  # move to app dir
yarn install         # install dependencies
yarn lint            # run lint
yarn start           # run app
```

### Architechture :

```
-fullstackopen-js
--/packages
---/web-client  (React Client)
---/server-api  (Express Server)
```

### Tech Stack :

Tooling
- Yarn Workspaces
- Lerna
- Typescript
- ESLint
- Prettier
- Editorconfig

Frontend (Client) :
- React
- Redux
- Typescript
- Jest
- Bit

Backend (Server):
- Nodejs
- Express
- Typescript
- Graphql
- REST
- Swagger
- Mocha,Chai
- ESLint
- Yarn
- Babel

Database:
- Postgres
- Mongodb
- Redis

CI/CD:
- Kafka
- Docker
- Kubernetes
- AWS

Integrations
- Social Authentication
- RBAC
- Payment Integration (Stripe, Razorpay)



Tutorials :

- [Setting up Yarn Workspace and Lerna](coming soon)
- [Creating Express Server](coming soon)
- [Setup Typescript with Node.js](https://sujaykundu.com/blog/setting-up-typescript-with-nodejs-project/)
- [Setting up a custom logger for node express typescript server](https://sujaykundu.com/blog/setting-up-custom-logger-for-node-express-typescript-server/)
- [Setting up code linting using ESLint and Prettier](https://sujaykundu.com/blog/adding-linting-to-express-typescript-server-using-eslint/)
- [Configuring code linting rules using ESLint, Editorconfig, and Husky](https://sujaykundu.com/blog/configuring-code-quality-and-rules-using-eslint-editorconfig-and-husky/)
- [Setting up React Client from scratch](coming soon)
- [Setting up Typescript with React](coming soon)
