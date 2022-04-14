const express = require("express");
const app = express();
const items = require("./fakeDb")
const itemRoutes = require("./itemRoutes")
// const { NotFoundError } = require("./expressError");

app.use(express.json());                           // process JSON data
app.use(express.urlencoded({ extended: true }));   // process transform data

// ... your routes go here ...

app.get("/", (req, res) => {
    return res.send("<hr><h1>We here!</h1><hr>")
});

app.use("/items", itemRoutes);


app.use(function (req, res) {                      // handle site-wide 404s
  throw new NotFoundError();
});

app.use(function (err, req, res, next) {           // global err handler
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});

module.exports = app;