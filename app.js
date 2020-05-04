const express = require('express');
const app = express();

//app.set('view engine', 'ejs');
//app.set('views', 'views');

app.get('/ping', function (req, res) {
    res.send('pong'); //need to use send instead of render
});


app.get('/', function (req, res) {
    res.send(`Hello, World!`), {
    }; //need to use send instead of render

});

app.get('/cats', function (req, res) {
    res.send('Meow'), {
    }; //need to use send instead of render

});

app.get('/dogs', function (req, res) {
    res.send('Woof'), {
    }; //need to use send instead of render
});

app.get('/cats_and_dogs', function (req, res) {
    res.send('Living together'), {
    }; //need to use send instead of render
});

app.get('/greet/:user', function (req, res) {
    res.send(`Hello, ${req.query.user}!`), {
    }; //need to use send instead of render
});

app.get('/hello', function (req, res) {
    var name = req.params.name || 'world';
    res.send(`Hello my name is ` + name + `!`); //need to use send instead of render
    //Dif between params and query. Params brings back Hello my name is world and the other 
    //brings back Hello my name is "the name entered"
});
app.get('/hello1', function (req, res) {
    var name = req.query.name || 'to me';
    res.send(`Hello my name is ` + name + `!`);
});

app.listen('3000', function () {
    console.log('I know what I am doing!');
});