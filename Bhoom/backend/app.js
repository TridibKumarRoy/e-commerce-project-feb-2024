const express = require("express");
const app = express();
const product = require("./routes/productRouter");
const errorMiddleware = require("./middleware/error")
const user = require("./routes/userRouter");
const order = require("./routes/orderRouter");
const serviceReq = require("./routes/serviceRouter");
const cookieParser = require("cookie-parser");

const cors = require("cors");


const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));  //handling cors frontend issues

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1",product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", serviceReq);

//* middleware for error
app.use(errorMiddleware)

module.exports = app;