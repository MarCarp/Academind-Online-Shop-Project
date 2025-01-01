const express = require('express');
const path = require('path');

const defaultRoutes = require('./routes/defaults');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', defaultRoutes);

app.listen(3000, ()=>{
    console.log("Listening on 3000");
});