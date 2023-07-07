//used for maintaining schemas

const mongoose=require('mongoose');
const db=require('../config/db');

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        default:"true"
    },
    bn:{
        type:Number,
        default:"true"
    },
    author:{
        type:String,
        default:"true"
    }
});

const bookmodel=db.model('books',bookSchema);
module.exports=bookmodel;
    