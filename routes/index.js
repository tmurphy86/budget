var express = require('express');
var router = express.Router();
var db = require("../server/models");

// render the home page
router.get('/', function(req, res, next) {
  console.log("Index page hit");
  res.render('index', { title: 'Prosperity Now Budgeting' });
});

router.get('/create/:object', function(req, res, next) {
  console.log("create page hit");
  var object = req.params.object;
  res.render("create"+object, { title: 'Add ' + object});
});

router.get('/display/:object', function(req, res, next) {
	var object = req.params.object;
  res.render(object, { title: 'View ' + object});
});


router.post('/create/post/:object', function(req, res, next) {
  var object = req.params.object;
  db[object].create(req.body).then(function(object) {
      res.json(object);
    });
});



//APIs

router.get('/api/:object', function(req, res, next) {
  var object = req.params.object;
  db[object].findAll({}).then(function(object){
  	res.json(object);
  });
});

// router.get('/api/category', function(req, res, next) {
//   db.category.findAll({}).then(function(object){
//     res.json(object);
//   });
// });

router.get('/api/lineitem/:categoryId', function(req, res, next) {
  db.lineitem.sum('cost', {
    where: { 
      categoryId: req.params.categoryId
    }
  }).then(sum=>{
    res.json(sum);
  });
});

// router.get('/api/lineitem/:category', function(req, res, next) {
//   db.lineitem.findAll({
//     where:{

//     }


//   }).then(function(object){
//     res.json(object);
//   });
// });


// console.log("display page hit");
//   var object = req.params.object;
//   db.category.findAll({}).then(function(object){
//   	res.json(object);
//   });



// router.post('/create/post/category', function(req, res, next) {
//   console.log("Posting category route hit");
//   db.category.create(req.body).then(function(res) {
//       res.json(line);
//     });
// });

// router.get('/lineitem/create', function(req, res, next) {
//   console.log("create page hit");
//   res.render('createlineitem', { title: 'Add Line Item' });
// });

// router.get('/category/create', function(req, res, next) {
//   console.log("create cat page hit");
//   res.render('createcat', { title: 'Add Category' });
// });

// router.post('/category/', function(req, res, next) {
//   console.log("create cat page hit");
//   res.render('createcat', { title: 'Add Category' });
// });

// router.post('/category/create', function(req, res, next) {
//   console.log("create cat page hit");
//   res.render('createcat', { title: 'Add Category' });
// });

// router.post('/add/:field', function(req, res) {


// 	where: {
// 		: req.body.category
// 	}
// }

// app.get("/api/line", function(req, res) {
//     console.log("Hitting line");
//     db.line_items.findAll({}).then(function(line) {
//       res.json(line);    
//     });
//   });

module.exports = router;