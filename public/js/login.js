$(document).ready(function() {
  console.log("document ready");
  // Getting references to our form and inputs
  var loginForm = $(".form-signin");
  var emailInput = $("input#inputEmail");
  var passwordInput = $("input#inputPassword");

  // When the form is submitted, we validate there's an email and password entered
  // $(document).on("submit", "#loginSub", );
  loginForm.on("submit", function(event) {


  //   console.log("login form hit")
  //   event.preventDefault();
  //   var userData = {
  //     email: emailInput.val().trim(),
  //     password: passwordInput.val().trim()
  //   };

  //   if (!userData.email || !userData.password) {
  //     return;
  //   }

  //   // If we have an email and password we run the loginUser function and clear the form
  //   loginUser(userData.email, userData.password);
  //   emailInput.val("");
  //   passwordInput.val("");
  // });


  //   function loginUser(email, password) {
  //   $.post("/login/post", {
  //     email: email,
  //     password: password
  //   }).then(function(data) {
  //     window.location.replace(data);
  //     // If there's an error, log the error
  //   }).catch(function(err) {
  //     console.log(err);
  //   });
  // }

  });
});