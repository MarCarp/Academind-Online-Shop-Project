const express = require('express');
const router = express.Router();

const db = require('../data/database');

router.get('/', async function(req,res){
    const demo = await db.getDb().collection('demo').find().toArray();
    res.render('default',{test:demo});
});

router.get('/login', async function(req,res){
    res.render('login');
});

module.exports = router;