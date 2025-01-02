const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();


const db = require('../data/database');

router.get('/', async function(req,res){
    const demo = await db.getDb().collection('demo').find().toArray();
    res.render('default',{test:demo});
});

router.get('/login', function(req,res){
    res.render('login');
});

router.get('/signup', function(req,res){
    res.render('signup');
});

router.post('/signup', async function(req,res){
    const userData = req.body;

    const user = {
        mail: userData.mail,
        confirmMail: userData['confirm-mail'],
        password: userData.password
    }

    const existingMail = await db.getDb().collection('users').findOne({mail: user.mail});

    if(existingMail) {
        console.log('Mail existant');
        return res.render('signup');
    }

    if(user.mail !== user.confirmMail ||
        user.mail.trim() < 6 ||
        ! user.mail.includes('@') ||
        user.password.trim() < 4
    ) {
        console.log("err de saisie de donnée");
        return res.render('signup');
    }

    user.hashedPass = await bcrypt.hash(user.password, 12);

    const result = await db.getDb().collection('users').insertOne({mail: user.mail, password: user.hashedPass});

    res.redirect('/');
});

module.exports = router;