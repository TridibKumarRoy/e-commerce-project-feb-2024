const express = require("express");
const app = express();
const product = require("./routes/productRouter");
const errorMiddleware = require("./middleware/error")

app.use(express.json())

app.use("/api/v1",product);

//middlewire for error
app.use(errorMiddleware)

module.exports = app;