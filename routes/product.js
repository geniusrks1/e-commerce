const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// displaying all the products from database
router.get('/products', async(req, res)=>{
    const products = await Product.find({});
    res.render('products/index', {products});
});


// add new product this is form
router.get('/products/new', (req,res)=>{
    res.render('products/new');
})

// from form we creating and adding data to database
// showing it to product page
router.post('/products', async(req,res)=>{
    await Product.create(req.body);
    res.redirect('/products');
})


// showing a specific product page
router.get('/products/:id', async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show', {product});
})




module.exports = router;

module.exports = router;
