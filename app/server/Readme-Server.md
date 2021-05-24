### Backend Server

#### Build

Compiles the files (precompiling our assets) and saves in dist folder

#### Run tests

`$ yarn test`

### Run the app

##### Using Typescript

Install typescript and tslint globally:

`npm install -g typescript tslint`

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

- Typescript
- Morgan
- Cors
- ErrorHandlers
- Swagger


#### Enabling TSLint with Vscode Workspace :

Press Ctrl+Shift+P to open command pallete.

In the input that pops up at the top of the VS Code, write

`TSLint: Manage workspace library execution" and press
Enter.`

From the menu that replaces the input, pick

`Enable Workspace Library Execution`
