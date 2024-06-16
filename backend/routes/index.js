const express = require("express");
const HeroProductsModel = require("./models/HeroProducts");
const app = express();

app.get("/HeroProducts", async (req, res) => {
  const HProducts = await HeroProductsModel.find();
  res.json(HProducts);
});
