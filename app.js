const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.send('<h1>Hello Warudo</h1>');
})

app.listen(3000, ()=>{
    console.log("Listening on 3000");
});