const express = require('express');
const app = express();
const greet = express.Router();
const bye = express.Router();

app.set('view engine', 'ejs');
app.use('/greet', greet);
app.use('/bye', bye);

greet.get('/hi', (req, res, next) => {
    res.render('ui/hi');
});

bye.get('/seeyou', (req, res, next) => {
    res.render('ui/seeyou');
});

app.get('/', (req, res) => {
    let numip = req.ip;
    res.send(`<h1>node express js ${numip} this is</h1>`);
});

app.get('/page', (req, res) => {
    res.render('home');
});


app.listen(6100, function(err){
    if(err) console.log(err);
});

