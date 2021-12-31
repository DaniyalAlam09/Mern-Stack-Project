var express = require('express');
const { Product } = require('../models/product');
var product= require("../models/product")
var router = express.Router();

router.get('/', async function(req, res, next) {
  
  res.render('site/body', { title: 'cot'});
});

router.get("/menu", async function (req, res, next) {
  let product = await Product.find();
  return res.render("site/product", {products:product}); // rendering menu and passing all the recipes
});
router.get("/cart", async function (req, res, next) {
  let cart = req.cookies.cart; // for storing cart
  if (!cart) cart = []; // if empty 
  let product = await Product.find({ _id: { $in: cart } }); // seleced item in cart by id
  let total = product.reduce(
    (total, product) => total + Number(product.Cost),0 // suming all the prices
  );
  return res.render("site/cart", { product, total });// rendering cart and passing selected recipe and total value in views/site/cart
});
router.get("/add-cart/:id", function (req, res, next) { // putting items to cart
  let cart = req.cookies.cart; // for storing cart
  if (!cart) cart = [];
  cart.push(req.params.id); // adding recipes of selected to cart
  res.cookie("cart", cart);
  res.redirect("/menu"); // back to menu
});
module.exports = router;
