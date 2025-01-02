const express = require('express');
const path = require('path');

const defaultRoutes = require('./routes/defaults');
const db = require('./data/database');

const app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', defaultRoutes);

db.connectToClient().then(
    app.listen(3000, ()=>{
        console.log("Listening on 3000");
    })
);

