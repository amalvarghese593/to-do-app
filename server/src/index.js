const express = require("express");
const cors = require("cors");

const app = express();

const products = [
  {
    id: 1,
    name: "nike shoe",
    price: 2000,
  },
  {
    id: 2,
    name: "adidas chappal",
    price: 1500,
  },
  {
    id: 3,
    name: "reebok slipper",
    price: 4000,
  },
];

app.use(cors({ origin: "*", methods: ["GET", "POST"] }));

app.get("/", (req, res, next) => {
  res.json({ success: true, data: "hello world" });
});
app.get("/products", (req, res, next) => {
  res.json({ success: true, data: products });
});

app.use((req, res, next) => {
  res.json({ success: false, data: "route not found" });
});

const PORT = 3010;
app.listen(PORT, () =>
  console.log(`Server started and running on PORT ${PORT}`)
);
