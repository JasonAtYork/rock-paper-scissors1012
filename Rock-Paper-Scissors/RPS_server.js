//Server for GamingPage
var express = require('express');
var app = express();
app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);
        if(z['diff'] == "whosyourdaddy"){
            var jsontext = JSON.stringify({
                'diff' : 'hack',
                'symbol': z['symbol'],
                'judge' : z['judge'],
                'number' : z['number'],
                'botcount': z['botcount'],
                'playercount': z['playercount'],
            });
        }
        else if(z['diff'] == "normal" || z['diff'] == "easy"|| z['diff'] == "hard"){
            var jsontext = JSON.stringify({
                'diff' : z['diff'],
                'symbol': z['symbol'],
                'judge' : z['judge'],
                'number' : z['number'],
                'botcount': z['botcount'],
                'playercount': z['playercount'], 
            });
        }
        else{
            var jsontext = JSON.stringify({
                'diff' : "normal",
                'symbol': z['symbol'],
                'judge' : z['judge'],
                'number' : z['number'],
                'botcount': z['botcount'],
                'playercount': z['playercount'],
            });
        }        
        console.log(jsontext);
        res.send(jsontext);

}).listen(3000);
console.log("Server is running!");