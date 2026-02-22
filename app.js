const express = require("express");

const moment = require("moment");
const fs = require("fs/promises");

const app = express(); // web-server
//
// app.get("/", (request, response) => {
//   response.send("<h2>Home page</h2>");
// });
// app.get("/contacts", (request, response) => {
//   console.log(request.url);
//   console.log(request.method);
//   response.send("<h2>Contacts page</h2>");
// });
//

const books = require("./books");

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("./public/server.log", `\n ${method} ${url} ${date}`);
  next();
});

/*
app.use((req, res, next) => {
  console.log("First middleware");
  next();
});
*/
app.get("/books", (req, res) => {
  res.json(books);
  //   res.send(books); //cant get correctly if argument is null
});
app.get("/products", (req, res) => {
  res.json([]);
});

app.listen(3000, () => console.log("Server is running")); // starting server
