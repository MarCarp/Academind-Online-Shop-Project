const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.render('default',{test:'test 2'});
});

module.exports = router;