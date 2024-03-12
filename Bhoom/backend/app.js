const express = require("express");
const app = express();
const product = require("./routes/productRouter");
const errorMiddleware = require("./middleware/error")
const user = require("./routes/userRouter");

app.use(express.json())

app.use("/api/v1",product);
app.use("/api/v1", user);

//middlewire for error
app.use(errorMiddleware)

module.exports = app;