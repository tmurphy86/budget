var express = require('express');
var router = express.Router();
const fs = require('fs');
const aad = require('azure-ad-jwt');
const passport = require('../config/authentication.js');

// var isAuthenticated = function (req, res, next) {
//   // if user is authenticated in the session, call the next() to call the next request handler
//   // Passport adds this method to request object. A middleware is allowed to add properties to
//   // request and response objects
//   if (req.isAuthenticated())
//     return next();
//   // if the user is not authenticated then redirect him to the login page
//   res.redirect('/');
// }



/* GET Login Page */
router.get('/', function(req, res, next) {
  console.log("Login Screen");
  res.render('login', {layout: 'login.hbs'});
});

// router.post("/post", passport.authenticate("local"), function(req, res) {
//   console.log(req);
//   console.log(res);
//     // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
//     // So we're sending the user back the route to the members page because the redirect will happen on the front end
//     // They won't get this or even be able to access this page if they aren't authed
//     res.json("posting");
//   });


// //* GET Home Page */
// router.get('/index', isAuthenticated, function(req, res){
//   res.render('index', { user: req.user });
// });

// //* Handle Logout */
// router.get('/signout', function(req, res) {
//   req.logout();
//   res.redirect('/');
// });




  /* GET login page. */
  // router.get('/', passport.authenticate('bearer', { session: false }), function(req, res) {
  //   // Display the Login page with any flash message, if any
  //   res.render('login', {layout: 'login.hbs'});
  //   res.json(req.user);


  // });
// router.get('/', 
//   passport.authenticate('local'),
//   function(req, res) {
//     res.render('login', {layout: 'login.hbs'});
//     // log.info('Login was called in the Sample');
//     // res.redirect('/index');
// });

//   route.post("/login", passport.authenticate("local"), function(req, res) {
//     // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
//     // So we're sending the user back the route to the members page because the redirect will happen on the front end
//     // They won't get this or even be able to access this page if they aren't authed
//     res.json("/members");
//   });

// // POST /auth/openid/return
// //   Use passport.authenticate() as route middleware to authenticate the
// //   request.  If authentication fails, the user will be redirected back to the
// //   home page.  Otherwise, the primary route function function will be called,
// //   which, in this example, will redirect the user to the home page.
// // router.post('/auth/openid/return',
// //   passport.authenticate('azuread-openidconnect', { failureRedirect: '/' }),
// //   function(req, res) { 
// //     res.redirect('/');(req,res,next);
// //   });

// router.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });

// function authenticate() {
//   return function(req, res, next) {
//     var username = req.body.email;
//     var password = req.body.password;
//     console.log(username);

//     passport.authenticate('password-grant', {
//       username: username,
//       password: password
//     })(req, res, next);
//   };
// }

//   router.post('/user', authenticate(), function(req, res) {
//   res.redirect('/');
// });

//   router.post("/user", passport.authenticate("oauth-bearer"), function(req, res) {
// //     // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
// //     // So we're sending the user back the route to the members page because the redirect will happen on the front end
// //     // They won't get this or even be able to access this page if they aren't authed
//     // res.json();

//     console.log('in the post' + res);
//      var claims = req.authInfo;
//         console.log('User info: ', req.user);
//         console.log('Validated claims: ', claims);
        
//         res.status(200).json();
//   });




  /* Handle Login POST  error 500 */
  // router.post('/user', passport.authenticate('login', {
  //   successRedirect: '/index',
  //   failureRedirect: '/login', 
  //   failureFlash : true
  // }));

  // /* GET Registration Page */
  // router.get('/signup', function(req, res){
  //   res.render('register',{message: req.flash('message')});
  // });

  //  Handle Registration POST 
  // router.post('/signup', passport.authenticate('signup', {
  //   successRedirect: '/home',
  //   failureRedirect: '/signup',
  //   failureFlash : true
  // }));












// router.get('/login', function(req, res) {
// console.log("Login Screen: url login");
//   var audience = 'https://budgetpn.herokuapp.com'
//   var authorization = req.headers['authorization']
//   if (authorization) {
//     var bearer = authorization.split(" ");
//     var jwtToken = bearer[1];
  
//     if (jwtToken) {  
//       aad.verify(jwtToken, { audience: audience}, function(err, result) {
//         if (result) {
//         	console.log(result);
//           fs.readFile(__dirname + "/" + "_data.json", 'utf8', function(err, data) {
//             res.status(200).send(data)
//           });
//         } else {
//           res.status(401).send('no valid token') 
//         }
//       })  
//     } else {
//       res.status(401).send('no token in header')  
//     }  
//   } else {
//     res.status(401).send('no auth attr in header')
//   }
// })

// router.post('/login/user', function(req,res) {
// console.log('User path');
// console.log(req);


// })


// var authController = require('../controllers/authcontroller.js');
 
 
// module.exports = function(app, passport) {
 
 
//     app.get('/signup', authController.signup);
 
 
//     app.get('/signin', authController.signin);
 
 
//     app.post('/signup', passport.authenticate('local-signup', {
//             successRedirect: '/dashboard',
 
//             failureRedirect: '/signup'
//         }
 
//     ))
 
 
//     app.get('/dashboard', isLoggedIn, authController.dashboard);
 
 
 
//     app.get('/logout', authController.logout);
 
 
//     app.post('/signin', passport.authenticate('local-signin', {
//             successRedirect: '/dashboard',
 
//             failureRedirect: '/signin'
//         }
 
//     ));
 
 
//     function isLoggedIn(req, res, next) {
 
//         if (req.isAuthenticated())
 
//             return next();
 
//         res.redirect('/signin');
 
//     }
 
// }

module.exports = router;