var express = require('express');
var router = express.Router('router');
var comicData = require('../model/Comic');

router.get('/comic', function(req,res){
    var listComic= [];
    comicData.find().then(function(data){
        listComic.push(data);
        res.json(listComic);
    })
    
});

router.post('/comic',function(req,res){
    //create a new object comic base on Json data.
    const comic = new comicData(req.body);  
    comic.save(err => {  
        if (err) return res.status(500).send(err);
        return res.status(200).send(comic);
    });
})

router.post('/comicId',function(req,res){
    var idComic = req.body.comicId;
    comicData.findById(idComic).then(function(data){

              function addlike(numberlikes){
                return numberlikes + 1;
              }
              comic = { 
                        '_id':data._id,
                        'name':data.name,
                        'likes':addlike(data.likes)
                      }     
              comicData.findByIdAndUpdate(data._id,comic,function(err,doc){
                if (err) return res.send(500, { error: err });
                return res.send("succesfully update!");
              })
              
              
        
    });

})

module.exports = router;