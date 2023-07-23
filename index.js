const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const app=express();
const PORT=5000;


app.set('view-engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));




mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
    .then(()=>{console.log('db-connected')})
    .catch(err=> console.log(err));;

app.get('/',(req,res)=>{
    res.send(`welcome to backend`);
})



app.listen(PORT,(err)=>{
console.log(`server is running at port ${PORT}`);
})
