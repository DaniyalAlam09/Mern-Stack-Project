var mongoose = require("mongoose");
const joi = require('@hapi/joi');
const { string } = require("@hapi/joi");

var productsSchema= mongoose.Schema({

Brand_Name:String,
Cost:Number,
})

function valditaionProduct(data){


    const Schema= joi.object({
     Brand_Name: joi.string().min(3).max(10).required(),
     Cost: joi.number().min(0).required()

    })
    return Schema.validate(data,{abortEarly:false});
}
var Product = mongoose.model("Product",productsSchema);

module.exports.Product=Product;
module.exports.validate = valditaionProduct;