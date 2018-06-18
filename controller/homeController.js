var express = require('express');
var router = express.Router('router');

router.get('/home', function(req,res){
    res.send('This is a home controller');
});

module.exports = router;