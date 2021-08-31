var express = require('express');
var router = express.Router();
const fs = require('fs');
const methodOverride = require('method-override');

//=====================Global Variables======================
const noblegases = fs.readFileSync('./models/noblegases.json')
const noblegasesData = JSON.parse(noblegases);

router.get('/', function(req, res) {
    res.render('noblegases/index', {myElements: noblegasesData});
  });

  router.post('/', function(req, res) {
      // add item to dinosaurs array
      let newNoblegas = JSON.parse(noblegases);
      newNoblegas.push(req.body);
  
      // save dinosaurs to the data.json file
      fs.writeFileSync('./models/noblegases.json', JSON.stringify(newNoblegas));
    
      //redirect to the GET /dinosaurs route (index)
      res.redirect('/noblegases');
    });
  
router.get('/new', function(req, res){
    res.render('noblegases/new');
});

router.get('/:idx', function(req, res) {
    //get array index from url parameter
  let noblegasesIndex = parseInt(req.params.idx);
  
    //render page with data of the specified animal
  res.render('noblegases/show', {myElements: noblegasesData[noblegasesIndex]});
  });


module.exports = router;