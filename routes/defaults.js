const express = require('express');
const router = express.Router();

const db = require('../data/database');

router.get('/', async function(req,res){
    const demo = await db.getDb().collection('demo').find().toArray();
    res.render('default',{test:demo});
});

module.exports = router;