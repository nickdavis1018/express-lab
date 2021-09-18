const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res)=>{
    res.send('<p>99 bottles of beer on the wall</p><a href="http://localhost:3001/98">Take one down, pass it around</a>');
  });

app.get('/:number_of_bottles', (req, res)=>{
    if(req.params.number_of_bottles > "0"){
    res.send(`${req.params.number_of_bottles} bottles of beer on the wall</p><a href=http://localhost:3001/${req.params.number_of_bottles-1}>Take one down, pass it around</a>`);
}

    else if (req.params.number_of_bottles < "0"){
    res.send(`It is not physically possible to have ${req.params.number_of_bottles} bottles of beer on the wall. Not sure what happened here, but in the interest of not breaking the laws of physics, let's start over:</p><a href=http://localhost:3001>Start over!</a>`);  
    }

    else{
    res.send(`${req.params.number_of_bottles} bottles of beer on the wall</p><a href=http://localhost:3001>None left! Start over!</a>`);
    }
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
  });