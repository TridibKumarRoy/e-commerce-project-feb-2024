const express = require("express");
const app = express();
const product = require("./routes/productRouter");
const errorMiddleware = require("./middleware/error");
const user = require("./routes/userRouter");
const order = require("./routes/orderRouter");
const serviceReq = require("./routes/serviceRouter");
const paymentRoute = require("./routes/paymentRouter");
const contact = require("./routes/contactRoutes");
const community = require("./routes/communityRoutes");
const cart = require("./routes/cartRoutes");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const connCloudinart = require("./config/cloudinary")

const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(fileUpload({ useTempFiles: true }));
app.use(express.json());
app.use(cookieParser());
connCloudinart()

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", serviceReq);
app.use("/api/v1", paymentRoute);
app.use("/api/v1", contact);
app.use("/api/v1", community);
app.use("/api/v1", cart);

//* middleware for error
app.use(errorMiddleware);

module.exports = app;
