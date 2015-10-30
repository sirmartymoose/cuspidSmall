if (Meteor.isClient) {
  
    Template.updateDentist.rendered = function () {
         cLog("client_updateDentist.js", "updateDentist template rendered"); 
                 AutoForm.addHooks('updateDentistForm', {onSuccess: function(){
                     cLog("client_updateAssistant.js", "form updated succesfully"); 
                     checkUserProfileStatus(); 
                     Router.go('dashboard'); }});
                     cLog("client_updateAssistant.js", "routing to dashboard"); 

        
    $(document).ready(function(){
        cLog("client_updateAssistant.js", "document ready"); 
        
    })
    }
    
    
    Template.updateDentist.helpers({
        selectedPersonDoc: function () {
            return dentists.findOne({dentistUserId: Meteor.userId()}); 
        }
        
    })
    
}