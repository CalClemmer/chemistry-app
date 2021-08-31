const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
// const fs = require('fs');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// we'll use this... now?
app.use('/noblegases', require('./controllers/noblegases'));

//body-parser middleware



app.get('/', function(req, res) {
  res.render('home');
});

app.listen(PORT, () => {
    console.log('Server listening on PORT', PORT);
  });
  