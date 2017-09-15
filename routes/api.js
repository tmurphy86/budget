// // *********************************************************************************
// // api.js - this file offers a set of routes for displaying and saving data to the db
// // *********************************************************************************

// // Dependencies
// // =============================================================

// var db = require("../server/models");
// var express = require('express');
// var router = express.Router();
// // Routes
// // =============================================================
// module.exports = function(app) {

//   // GET route for getting all of the line items
//   app.get("/api/line", function(req, res) {
//     console.log("Hitting line");
//     db.line_items.findAll({}).then(function(line) {
//       res.json(line);    
//     });
//   });


//   app.post("/api/line", function(req, res) {
//     db.line_items.create(req.body).then(function(line) {
//       res.json(line);
//     });
//   });

//   // PUT route for updating posts
//   app.put("/api/line", function(req, res) {
//     var post = {
//       title: req.body.title,
//       body: req.body.body,
//       category: req.body.category
//     }
//     db.Post.update(post,
//       {
//         where: {
//           id: req.body.id
//         }
//       })
//     .then(function(line) {
//       res.json(line);
//     });
//   });


//   app.delete("/api/line/:id", function(req, res) {
//     db.line_items.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(line) {
//       res.json(line);
//     });
//   });

// //Categories Routes

//    // GET route for getting all categories
//   app.get("/api/category", function(req, res) {
//     console.log("Hitting cat");
//     db.category.findAll({}).then(function(results) {
//       res.json(results);    
//     });
//   });

//   app.post("/api/category", function(req, res) {
//     db.category.create(req.body).then(function(results) {
//       res.json(results);
//     });
//   });

// // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Post
//   app.get("/api/category/:id", function(req, res) {
    
//     db.category.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.category]
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   app.delete("/api/category/:id", function(req, res) {
//     db.category.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(results) {
//       res.json(results);
//     });
//   });


// //re

// };

 

// //   // Get route for returning posts of a specific category
// //   app.get("/api/posts/category/:category", function(req, res) {
// //     db.Post.findAll({
// //       where: {
// //         category: req.params.category
// //       }
// //     })
// //     .then(function(dbPost) {
// //       res.json(dbPost);
// //     });
// //   });

// //   // Get rotue for retrieving a single post
// //   app.get("/api/posts/:id", function(req, res) {
// //     db.Post.findOne({
// //       where: {
// //         id: req.params.id
// //       }
// //     })
// //     .then(function(dbPost) {
// //       res.json(dbPost);
// //     });
// //   });

// //   // POST route for saving a new post
// //   app.post("/api/posts", function(req, res) {
// //     console.log(req.body);
// //     db.Post.create({
// //       title: req.body.title,
// //       body: req.body.body,
// //       category: req.body.category
// //     })
// //     .then(function(dbPost) {
// //       res.json(dbPost);
// //     });
// //   });

// //   // DELETE route for deleting posts
// //   app.delete("/api/posts/:id", function(req, res) {
// //     db.Post.destroy({
// //       where: {
// //         id: req.params.id
// //       }
// //     })
// //     .then(function(dbPost) {
// //       res.json(dbPost);
// //     });
// //   });

// //   // PUT route for updating posts
// //   app.put("/api/posts", function(req, res) {
// //     var post = {
// //       title: req.body.title,
// //       body: req.body.body,
// //       category: req.body.category
// //     }
// //     db.Post.update(post,
// //       {
// //         where: {
// //           id: req.body.id
// //         }
// //       })
// //     .then(function(dbPost) {
// //       res.json(dbPost);
// //     });
// //   });
// // };





