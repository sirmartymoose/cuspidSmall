if (Meteor.isClient) {
  
    Template.updateAssistant.rendered = function () {
         cLog("update assistants rendered")
                 AutoForm.addHooks('updateAssistantForm', {onSuccess: function(){checkUserProfileStatus(); Router.go('dashboard'); }});

    $(document).ready(function(){

        
    })
    
        
    }
    
    
    Template.updateAssistant.helpers({
        selectedPersonDoc: function () {
            return assistants.findOne({assistantUserId: Meteor.userId()}); 
        }
        
    })
    
}