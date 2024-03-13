const express = require("express");
const app = express();
const product = require("./routes/productRouter");
const errorMiddleware = require("./middleware/error")
const user = require("./routes/userRouter");
const cookieParser = require("cookie-parser");

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1",product);
app.use("/api/v1", user);

//* middleware for error
app.use(errorMiddleware)

module.exports = app;