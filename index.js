const express=require('express');
const app=express();

const mongoose=require('mongoose');

const port=5000;



















app.listen(port, (err)=>{
    if(err)console.log(`server is not running on port #{port}`);
    else{
        console.log(`server is running on port ${port}`);
    }
})
