# Getting Started
- create a `package.json`
    - In the terminal you can use the cli command: `npm init -y`
- install our dependencies
    `express: `npm install express`
- create a `.gitignore` file
    - /node_modules is typed into it.
- updated our `package.json` with `app.js` instead of `index.js`
- starting up the server typing `nodemon`
    - to restart a nodemon you can resave a file or type `rs` in terminal

## Boiler Plate for Starting Server

```js
const express = require("express");
const app = express();
const PORT = 4000;

app.listen(PORT, ()=>{
    console.log(`Your server is running on port: ${PORT}`);
});
```

## CRUD (Create, Read, Update, Delete)

- Create : POST
- Read : GET
- Update : PATCH
- Delete : DELETE

## Preparing our server to handle JSON Object

In our `app.js` we need to have this line of code:
```js
app.use(express.json());
```
## MVC

- Stands for Model View Controller
- Architecture pattern that helps out Separtation of Concerns
- View - browser, Postman, curl, etc. Applications that interact with the server.
- Controller - part of server application which handles logic
- Model - database schematic


File structure review

``` . ``` means existing folder
``` ../ ``` means one folder back

> These can be chained, for ex:

``` ../.. ``` moves you two folders back up the tree