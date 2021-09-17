const express = require('express');
const app = express();
const port = 3000;

const eightBallAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/greeting', (req, res)=>{
    res.send("Hello stranger!");
  });

app.get('/greeting/:name', (req, res)=>{
    res.send(`What's up, ${req.params.name}!`);
  });

app.get('/tip/:total/:tipPercentage', (req, res)=>{
    res.send('Tip should be: ' + `${req.params.total *= (.01 * req.params.tipPercentage)}`);
  }); 

// This one below took me awhile. Getting /Magic and /Magic/:question setup was easy, but getting the page to load JQuery to expect a response on the page itself was tough. All easy in a vaccuum but typing it out in a string is not easy. Took me way too long but it works! //

app.get('/magic/', (req, res)=>{
    res.send('<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script><h3>Welcome to the Magic 8 Ball App.</h3><h7>Ask me a question!<br><br><form><input type="text" id="question" placeholder="Ask me anything..."><input type="submit" id="ask" value="Ask!"></form><script>let $question = $("#question"); let $ask = $("form"); $ask.on("submit", function(){event.preventDefault(); window.location.assign(`http://localhost:3000/magic/${$question.val()}`)});</script><style>html{text-align: center}')
  })

app.get('/magic/:question', (req, res)=>{
    res.send(`<h2>Your Question: ${req.params.question}?</h2>` + `<h1>Magic 8-Ball's Answer: ${eightBallAnswers[Math.floor(Math.random() * eightBallAnswers.length)]}</h1><a href=http://localhost:3000/magic>Back to 8-Ball App</a><style>html{text-align: center}</style>`)
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
  });