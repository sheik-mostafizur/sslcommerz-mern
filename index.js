const express = require("express");
const app = express();
const port = 3000;
const paymentRoutes = require("./payment.js");
const cors = require("cors");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

app.use("/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
