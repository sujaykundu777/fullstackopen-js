### Backend Server

Fullstackopen-js Node.js Express Typescript Server

Compiles the files (precompiling our assets) and saves in dist folder
#### Run tests

`$ yarn test`

### Run the app

##### Using Typescript

Install typescript and tslint globally:

`npm install -g typescript eslint`

If using typescript (.ts):

Watch compilation :

`yarn dev-ts`

Run server (in development ):

`yarn run start-ts`

Run server (in production ):

`$ yarn serve-ts`


##### Without Typescript

or if not using typescript (.js)

`yarn run start-js`

`yarn run server-ts`


The server should be running at PORT : 3001

You can change the port in **.env** file

### Routes:

- /api/v1 [http://localhost:3001/api/v1](http://localhost:3001/api/v1)

### Todo:

- Lerna
- Jsdocs
- Cors
- ErrorHandlers
- Swagger
- MVC
- Graphql
- Postgres
- Mongodb

#### Enabling TSLint with Vscode Workspace (optional) - prefer ESLint as TSlint is deprecated:

Press Ctrl+Shift+P to open command pallete.

In the input that pops up at the top of the VS Code, write

`TSLint: Manage workspace library execution" and press
Enter.`

From the menu that replaces the input, pick

`Enable Workspace Library Execution`


### Styleguide

This project uses Airbnb Styleguide for linting [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

So for Eslint rules, we use the following guides:

[Eslint Prettier](https://github.com/prettier/eslint-config-prettier)
[Eslint Airbnb base](https://www.npmjs.com/package/eslint-config-airbnb-base)


Recommended Eslint Rules :

- [import/extentions](https://github.com/benmosher/eslint-plugin-import/blob/v2.23.3/docs/rules/extensions.md) - Ensure consistent use of file extension within the import path (value can be : never || always || ignorePackages) - Only use always if you want to have extentions while importing, otherwise use never.
- [Import Resolver Typescript](https://github.com/alexgorbatchev/eslint-import-resolver-typescript)
