//handles mongodb connection using mongoose

const mongoose=require('mongoose');

var url='mongodb://localhost:27017/bookdb';

const connection=mongoose.createConnection(url);

module.exports=connection;


