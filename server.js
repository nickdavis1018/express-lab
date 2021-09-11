const express = require('express');
const app = express();
const port = 3000;

app.get('/greeting', (req, res)=>{
    res.send("Hello stranger!");
  });

app.get('/greeting/:name', (req, res)=>{
    res.send(`What's up, ${req.params.name}!`);
  });

app.get('/tip/:total/:tipPercentage', (req, res)=>{
    res.send('Tip should be: ' + `${req.params.total *= (.01 * req.params.tipPercentage)}`);
  }); 

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
  });