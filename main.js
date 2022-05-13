//-------------importes------------
const express = require('express')
const bodyParser = require('body-parser');
const session = require('express-session')
const path = require('path');

//------------Configs--------------
const app = express();



require('dotenv').config()


app.use(session({
  secret: 'dawdwadawdwa',
  resave: false,
  saveUninitialized: true,
}))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

//------------definindo estaticos------------
app.use(express.static('views'));
app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');






app.get('/', function (req, res) {
    res.render('index')
})












const port = parseInt(process.env.PORT) || 80
app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}` );
});