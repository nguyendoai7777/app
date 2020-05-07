require("dotenv").config();

const express = require("express");
const port = 2904;

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

const productRoute = require("./routes/products.routes");
const indexRoute = require("./routes/index.routes");
const pictureRoute = require("./routes/pictures.routes");
const figureRoute = require("./routes/figures.routes");
const cookieParser = require("cookie-parser");

const sessionId = require("./middlewares/session.middlewwares");

const apiProducts = require("./api/routes/product.routes");

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", apiProducts);

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionId);

app.use(express.static("public"));

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/pictures", pictureRoute);
app.use("/figures", figureRoute);

app.listen(port, () => console.log(` app is opened in port ${port}`));
