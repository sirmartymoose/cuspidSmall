if (Meteor.isClient) {
  
    Template.login.rendered = function () {
        cLog("client_login.js", "Login template rendered")

        $(document).ready(function(){
              cLog("client_login.js", "Document ready")
         })
    }
    
    
Template.login.events({

    'submit #login-form' : function(e, t){
      e.preventDefault();

      var email = t.find('#login-email').value
        , password = t.find('#login-password').value;
        Meteor.loginWithPassword(email, password, function(err){
        if (err) {
            cLog("client_login.js", "Error Loggin in ")
        }
        else {
          cLog("client_login.js", "Login successfull")
          window.location.href = "/dashboard";
          cLog("client_login.js", "redirecting user to dashboard")
        }
      });
         return false; 
      }
  });
}