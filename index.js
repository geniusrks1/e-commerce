const express=require('express');
const mongoose=require('mongoose');
const ejsMate = require('ejs-mate');
const path=require('path');

const app=express();
const PORT=5000;

app.engine('ejs', ejsMate);




app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
    .then(()=>{console.log('db-connected')})
    .catch(err=> console.log(err));;


    const productRoutes=require('./routes/product.js');
    app.use(productRoutes);

app.get('/',(req,res)=>{
    res.send(`welcome to backend`);
})



app.listen(PORT,(err)=>{
console.log(`server is running at port ${PORT}`);
})


















