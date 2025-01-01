const express = require('express');
const defaultRoutes = require('./routes/defaults');

const app = express();

app.use('/', defaultRoutes);

app.listen(3000, ()=>{
    console.log("Listening on 3000");
});