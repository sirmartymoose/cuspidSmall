if (Meteor.isClient) {
  
    Template.register.rendered = function () {
        cLog("client_welcome.js", "Template.welcome.rendered")

        $(document).ready(function(){
              cLog("client_welcome.js", "Document Ready Fired")

              

              
              

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
        } 
        
        if (userType == 'dentist'){
            var assistant = false
            var dentist = true
        }
        



        // Trim and validate the input

      Accounts.createUser({email: email, password : password, profile: {isAdmin: false, userType: userType, isDentist: dentist, isAssistant: assistant, profileCreated: false, isApproved: false}}, function(err){
          if (err) {
            // Inform the user that account creation failed
          } else {
            // Success. Account has been created and the user
            // has logged in successfully. 
          }

        });

      return false;
    }
  });
}