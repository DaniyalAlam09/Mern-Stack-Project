var express = require("express");
const res = require("express/lib/response");
let router = express.Router();
const ValidateProduct=require("../../../middleware/ValidatProduct")
var {Product} = require("../../models/product");
router.get("/", async (req, res) => {
    let products = await Product.find();
    return res.send(products);

});

router.get("/:id", async (req, res) => {
    try{
    let product = await Product.findById(req.params.id);

        return res.send(product);} 
        catch (err) {
        return res.send("invilad id ");

    }
    
});
router.put("/:id", ValidateProduct , async (req, res) => {
    let product = await Product.findById(req.params.id);
    product.Brand_Name=req.body.Brand_Name;
    product.Cost=req.body.Cost;
   await product.save();
   return res.send(product);
})

router.post("/",   ValidateProduct , async (req, res) => {
   let product = new Product();
    product.Brand_Name=req.body.Brand_Name;
    product.Cost=req.body.Cost;
   await product.save();
   return res.send(product);
})

router.delete("/:id", async (req, res) => {
    
    let product = await Product.findByIdAndDelete(req.params.id);
    
    if(!product){
        return res.send("Error")
    }
    else{
        return res.send(product);
    }
    
});
module.exports = router;