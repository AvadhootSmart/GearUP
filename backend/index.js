const express = require("express");
const UserModel = require("./models/User");
const HeroProductsModel = require("./models/HeroProducts");
const ProductsModel = require("./models/Products");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
// const jwt = require("jsonwebtoken");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const mongoose = require("mongoose");
const { initializePassport } = require("./LocalAuth");
// require("./Oauth");
// const { initializeGoogleAuth } = require("./Oauth");
const bodyParser = require("body-parser");
const app = express();


app.use(
  cors({
    origin: process.env.FRONTEND_DOMAIN,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

initializePassport(passport);
// initializeGoogleAuth(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "jai Shree Ram",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Serving Static files:
app.use(express.static(__dirname + "/Images"));

app.get("/", (req, res) => {
  res.send("Backend Successfully working!!");
});
//Local Authentication:

app.post("/register", async (req, res) => {
  const ExistingUser = await UserModel.findOne({ username: req.body.username });

  if (ExistingUser) return res.status(201).json({ ExistingUser });

  const user = await UserModel.create(req.body);

  res.status(200).json({ user });
});

app.post("/login", passport.authenticate("local"), async (req, res) => {
  const User = req.user;
  const user = await UserModel.findOne({
    username: User.username,
  }).populate("cart.items.product");
  res.send({ user });
});

//Product list
app.get("/HeroProducts", async (req, res) => {
  const HProducts = await HeroProductsModel.find();
  res.json(HProducts);
});

app.get("/Products", async (req, res) => {
  const Products = await ProductsModel.find();
  res.json(Products);
});

app.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  const Product = await ProductsModel.findById(id);
  res.json(Product);
});

//Cart functionality
app.post("/add-to-cart", async (req, res) => {
  const { productId, userId } = req.body;

  try {
    const product = await ProductsModel.findById(productId);
    const user = await UserModel.findById(userId);

    if (!product || !user) {
      return res.status(404).json({ message: "Product or User not found" });
    }

    const cartItem = user.cart.items.find((item) => item.product == productId);

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      user.cart.items.push({ product: productId });
    }

    // Update total price
    user.cart.totalPrice += product.discountPrice;

    await user.populate("cart.items.product");

    await user.save();

    res.json({
      message: "Added To cart",
      data: user.cart,
    });
  } catch (error) {
    console.error("Error adding to cart", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//Categorization:

app.get("/products/:category", async (req, res) => {
  const category = req.params.category;
  const products = await ProductsModel.find({ category: category });
  res.json(products);
});

//Stripe Integration:

app.post("/create-checkout-session", async (req, res) => {
  const { products } = req.body;

  const LineItems = products.map((item) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: item.product.name,
      },
      unit_amount: item.product.discountPrice * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: LineItems,
    mode: "payment",
    success_url: `${process.env.FRONTEND_DOMAIN}/paymentSuccess`,
    cancel_url: `${process.env.FRONTEND_DOMAIN}/paymentFailed`,
  });

  res.json({ id: session.id });
});

//Google Auth
// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "http://localhost:5173/Login",
//   }),
//   (req, res) => {
//     // Successful authentication, redirect to the home page
//     res.redirect("http://localhost:5173/");
//   }
// );

app.listen(5000, () => {
  console.log("Server listening on http://localhost:5000");
});
