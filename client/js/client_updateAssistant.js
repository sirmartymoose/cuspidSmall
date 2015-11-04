if (Meteor.isClient) {
  
    Template.updateAssistant.rendered = function () {
        Meteor.subscribe("userDataAssistant");
         cLog("client_updateAssistant.js", "updateAssistant template rendered"); 
                 AutoForm.addHooks('updateAssistantForm', {onSuccess: function(){
                     cLog("client_updateAssistant.js", "updateAssistant form completed"); 
                     checkUserProfileStatus(); 
                     Router.go('dashboard'); 
                     cLog("client_updateAssistant.js", "Routing to dashboard"); 
                 }});

    $(document).ready(function(){
        cLog("client_updateAssistant.js", "Document Ready"); 
    })
    }
    
    Template.updateAssistant.helpers({
        selectedPersonDoc: function () {
            return assistants.findOne({assistantUserId: Meteor.userId()}); 
        }
    })
}