const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const employeModel = require('./models/employe');

const app = express();
app.use( express.json());
app.use( cors() );

mongoose.connect("mongodb://127.0.0.1:27017/lonin");

app.post("/register" , (req,res)=>{
    employeModel.create(req.body)
    .then(emplye => res.json(emplye) )
    .catch( err => res.json(err) )

})

app.post("/login" , (req,res)=>{
    const {email,password} = req.body;
    employeModel.findOne({email:email})
    .then( user=>{
        if(user){
            if(user.password===password){
                res.json("Success");
                console.log("suss")
            }else{
                res.json("Incorrect password")
            }
        }else{
            res.json("No Record Found!!!")
        }
    } )
} )

app.listen( 3001 , ()=> console.log("server is running") )