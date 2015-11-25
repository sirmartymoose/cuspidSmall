if (Meteor.isClient) {
  
    Template.register.rendered = function () {
        cLog("client_register.js", "Register template rendered"); 

        $(document).ready(function(){
              cLog("client_register.js", "Document Ready"); 
         })
    }
    
    
  Template.register.events({
    'submit #register-form' : function(e, t) {
      e.preventDefault();
      var email = t.find('#account-email').value
        , password = t.find('#account-password').value;
        
        var userType = $('input[name=userTypeRadio]:checked', '#register-form').val()
        
        if(userType == 'assistant'){
            var assistant = true
            var dentist = false
            cLog("client_register.js", "Usertype is assistant"); 
        } 
        
        if (userType == 'dentist'){
            var assistant = false
            var dentist = true
            cLog("client_register.js", "Usertype is dentist"); 
        }

      Accounts.createUser({email: email, password : password, profile: {isAdmin: false, userType: userType, isDentist: dentist, isAssistant: assistant, profileCreated: false, isApproved: false}}, function(err){
          if (err) {
            cLog("client_register.js", "User Creation Failed"); 
          } else {
            cLog("client_register.js", "Register template Success"); 
            Router.go('dashboard')
          }
        });

      return false;
    }
  });
}