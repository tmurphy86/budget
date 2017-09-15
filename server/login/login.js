// //load bcrypt
// // var bCrypt = require('bcrypt-nodejs');

// // Requiring our models and passport as we've configured it
// var db = require("../server/models");
// var passport = require("../config/passport");

// module.exports = function(app) {
//   // Using the passport.authenticate middleware with our local strategy.
//   // If the user has valid login credentials, send them to the members page.
//   // Otherwise the user will be sent an error
//   app.post("/api/login", passport.authenticate("local"), function(req, res) {
//     // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
//     // So we're sending the user back the route to the members page because the redirect will happen on the front end
//     // They won't get this or even be able to access this page if they aren't authed
//     res.json("/members");
//   });

//   // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
//   // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
//   // otherwise send back an error
//   app.post("/api/signup", function(req, res) {
//     console.log(req.body);
//     db.User.create({
//       email: req.body.email,
//       password: req.body.password
//     }).then(function() {
//       res.redirect(307, "/api/login");
//     }).catch(function(err) {
//       console.log(err);
//       res.json(err);
//       // res.status(422).json(err.errors[0].message);
//     });
//   });

//   // Route for logging user out
//   app.get("/logout", function(req, res) {
//     req.logout();
//     res.redirect("/");
//   });

//   // Route for getting some data about our user to be used client side
//   app.get("/api/user_data", function(req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     }
//     else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });

// };
// module.exports = function(passport, user) {
 
 
//     var User = user;
 
//     var LocalStrategy = require('passport-local').Strategy;
 
 
//     passport.use('local-signup', new LocalStrategy(
 
//         {
 
//             usernameField: 'email',
 
//             passwordField: 'password',
 
//             passReqToCallback: true // allows us to pass back the entire request to the callback
 
//         },
 
 
 
//         function(req, email, password, done) {
 
//             var generateHash = function(password) {
 
//                 return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
 
//             };
 
 
 
//             User.findOne({
//                 where: {
//                     email: email
//                 }
//             }).then(function(user) {
 
//                 if (user)
 
//                 {
 
//                     return done(null, false, {
//                         message: 'That email is already taken'
//                     });
 
//                 } else
 
//                 {
 
//                     var userPassword = generateHash(password);
 
//                     var data =
 
//                         {
//                             email: email,
 
//                             password: userPassword,
 
//                             firstname: req.body.firstname,
 
//                             lastname: req.body.lastname
 
//                         };
 
//                     User.create(data).then(function(newUser, created) {
 
//                         if (!newUser) {
 
//                             return done(null, false);
 
//                         }
 
//                         if (newUser) {
 
//                             return done(null, newUser);
 
//                         }
 
//                     });
 
//                 }
 
//             });
 
//         }
 
//     ));
 
// }

//load bcrypt
// var bCrypt = require('bcrypt-nodejs');
 
 
// module.exports = function(passport, user) {
 
 
//     var User = user;
 
//     var LocalStrategy = require('passport-local').Strategy;
 
 
//     passport.use('local-signup', new LocalStrategy(
 
//         {
 
//             usernameField: 'email',
 
//             passwordField: 'password',
 
//             passReqToCallback: true // allows us to pass back the entire request to the callback
 
//         },
 
 
 
//         function(req, email, password, done) {
 
//             var generateHash = function(password) {
 
//                 return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
 
//             };
 
 
 
//             User.findOne({
//                 where: {
//                     email: email
//                 }
//             }).then(function(user) {
 
//                 if (user)
 
//                 {
 
//                     return done(null, false, {
//                         message: 'That email is already taken'
//                     });
 
//                 } else
 
//                 {
 
//                     var userPassword = generateHash(password);
 
//                     var data =
 
//                         {
//                             email: email,
 
//                             password: userPassword,
 
//                             firstname: req.body.firstname,
 
//                             lastname: req.body.lastname
 
//                         };
 
//                     User.create(data).then(function(newUser, created) {
 
//                         if (!newUser) {
 
//                             return done(null, false);
 
//                         }
 
//                         if (newUser) {
 
//                             return done(null, newUser);
 
//                         }
 
//                     });
 
//                 }
 
//             });
 
//         }
 
//     ));

//     //serialize
// passport.serializeUser(function(user, done) {
 
//     done(null, user.id);
 
// });

// // deserialize user 
// passport.deserializeUser(function(id, done) {
 
//     User.findById(id).then(function(user) {
 
//         if (user) {
 
//             done(null, user.get());
 
//         } else {
 
//             done(user.errors, null);
 
//         }
 
//     });
 
// });
 
// }






// var SamlStrategy = require('passport-saml').Strategy;
// [...]
 

// passport.use(new SamlStrategy(
//   {
//     path: '/login/callback',
//     entryPoint: 'https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php',
//     issuer: 'passport-saml'
//   },
//   function(profile, done) {
//     findByEmail(profile.email, function(err, user) {
//       if (err) {
//         return done(err);
//       }
//       return done(null, user);
//     });
//   })
// );

// // Use the OIDCStrategy within Passport (section 2)
// //
// //   Strategies in Passport require a `validate` function. The function accepts
// //   credentials (in this case, an OpenID identifier), and invokes a callback
// //   with a user object.
// passport.use( new OIDCStrategy({
//   callbackURL: config.creds.returnURL,
//   realm: config.creds.realm,
//   clientID: config.creds.clientID,
//   clientSecret: config.creds.clientSecret,
//   oidcIssuer: config.creds.issuer,
//   identityMetadata: config.creds.identityMetadata,
//   responseType: config.creds.responseType,
//   responseMode: config.creds.responseMode,
//   skipUserProfile: config.creds.skipUserProfile
//   scope: config.creds.scope
// },
// function(iss, sub, profile, accessToken, refreshToken, done) {
//   log.info('Example: Email address we received was: ', profile.email);
//   // Asynchronous verification, for effect...
//   process.nextTick(function () {
//     findByEmail(profile.email, function(err, user) {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         // "Auto-registration"
//         users.push(profile);
//         return done(null, profile);
//       }
//       return done(null, user);
//     });
//   });
// }
// ));

// // Passport session setup (section 2)

// //   To support persistent login sessions, Passport needs to be able to
// //   serialize users into, and deserialize users out of, the session. Typically,
// //   this is as simple as storing the user ID when serializing, and finding
// //   the user by ID when deserializing.
// passport.serializeUser(function(user, done) {
// done(null, user.email);
// });

// passport.deserializeUser(function(id, done) {
// findByEmail(id, function (err, user) {
//   done(err, user);
// });
// });

// // Array to hold signed-in users
// var users = [];

// var findByEmail = function(email, fn) {
// for (var i = 0, len = users.length; i < len; i++) {
//   var user = users[i];
//   log.info('we are using user: ', user);
//   if (user.email === email) {
//     return fn(null, user);
//   }
// }
// return fn(null, null);
// };



// $( document ).ready(function() {
//     // DOM ready

//     // Test data
//     /*
//      * To test the script you should discomment the function
//      * testLocalStorageData and refresh the page. The function
//      * will load some test data and the loadProfile
//      * will do the changes in the UI
//      */
//     // testLocalStorageData();
//     // Load profile if it exits
//     loadProfile();
// });

// /**
//  * Function that gets the data of the profile in case
//  * thar it has already saved in localstorage. Only the
//  * UI will be update in case that all data is available
//  *
//  * A not existing key in localstorage return null
//  *
//  */
// function getLocalProfile(callback){
//     var profileImgSrc      = localStorage.getItem("PROFILE_IMG_SRC");
//     var profileName        = localStorage.getItem("PROFILE_NAME");
//     var profileReAuthEmail = localStorage.getItem("PROFILE_REAUTH_EMAIL");

//     if(profileName !== null
//             && profileReAuthEmail !== null
//             && profileImgSrc !== null) {
//         callback(profileImgSrc, profileName, profileReAuthEmail);
//     }
// }

// /**
//  * Main function that load the profile if exists
//  * in localstorage
//  */
// function loadProfile() {
//     if(!supportsHTML5Storage()) { return false; }
//     // we have to provide to the callback the basic
//     // information to set the profile
//     getLocalProfile(function(profileImgSrc, profileName, profileReAuthEmail) {
//         //changes in the UI
//         $("#profile-img").attr("src",profileImgSrc);
//         $("#profile-name").html(profileName);
//         $("#reauth-email").html(profileReAuthEmail);
//         $("#inputEmail").hide();
//         $("#remember").hide();
//     });
// }

// /**
//  * function that checks if the browser supports HTML5
//  * local storage
//  *
//  * @returns {boolean}
//  */
// function supportsHTML5Storage() {
//     try {
//         return 'localStorage' in window && window['localStorage'] !== null;
//     } catch (e) {
//         return false;
//     }
// }

// /**
//  * Test data. This data will be safe by the web app
//  * in the first successful login of a auth user.
//  * To Test the scripts, delete the localstorage data
//  * and comment this call.
//  *
//  * @returns {boolean}
//  */
// function testLocalStorageData() {
//     if(!supportsHTML5Storage()) { return false; }
//     localStorage.setItem("PROFILE_IMG_SRC", "//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" );
//     localStorage.setItem("PROFILE_NAME", "César Izquierdo Tello");
//     localStorage.setItem("PROFILE_REAUTH_EMAIL", "oneaccount@gmail.com");
// }

