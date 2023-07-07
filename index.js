const express=require('express');
const bodyparser=require('body-parser');
const api=require('./routes/api');

const app=express();
const PORT=3000;

app.use(bodyparser.json());
app.use('/',api);
app.listen(PORT,()=>console.log("app listening on port 3000"));
