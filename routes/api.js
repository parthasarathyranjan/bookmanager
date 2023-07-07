const router=require('express').Router();
const bookmodel=require('../model/bookmodel');

router.get('/books',async function(req,res){
    const booklist=await bookmodel.find();
    console.log(booklist);
    res.send(booklist);
});

router.get('/books/:id',function(req,res){
    const {id}=req.params;
    const book=bookmodel.findOne({bn:id});
    if(!book) return res.send("NO BOOK FOUND");
     res.send(book); 
});

router.post('/books',function(req,res){     //post used to create a resource 
    const title=req.body.title;
    const bn=req.body.bn;
    const author=req.body.author;
    const bookExist=bookmodel.findOne({bn:bn});
   // if(bookExist) return res.send('Book already exist');
    var data=bookmodel.create({title,bn,author});
    data.save();
    res.send("Book uploaded");
});

router.put('/books/:id',function(req,res){     //put used to modify a resource 
    const{id}=req.params;
    const{
        title,
        author,
    }=req.body;
    
const bookExist=bookmodel.findOne({bn:id});
    if(!bookExist) return res.send('Book already not exist');
    const updatefield=(val,prev) => !val ? prev: val;
    const updatebook={
        ...bookExist,
        title:updatefield(title,bookExist.title),
        authors:updatefield(author,bookExist.author)
    };
    
    bookmodel.updateOne({bn:id},{$set:{title:updatebook.title,author:updatebook.author}})                 //this set operation is used to update the values
    res.status(200).send("book updated");

});


module.exports=router;



