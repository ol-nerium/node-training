const express = require("express");

const moment = require("moment");
const fs = require("fs/promises");
const cors = require("cors");

const booksRouter = require("./routes/api/books");

const app = express(); // web-server

const corsMiddleware = cors();
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

// app.get("/products", (req, res) => {
//   res.json([]);
// });

app.use(corsMiddleware);

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

app.use("/api/books", booksRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.listen(3000, () => console.log("Server is running")); // starting server
