const express=require('express');
const Product=require('../models/product.js');
const router=express.Router();

router.get('/products',async(req,res)=>{
    const products= await Product.find({});
    res.send(products);
});

module.exports=router;
