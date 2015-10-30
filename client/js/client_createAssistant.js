if (Meteor.isClient) {
  
    Template.createAssistant.rendered = function () {
        AutoForm.addHooks('insertAssistantForm', {onSuccess: function(){checkUserProfileStatus(); Router.go('dashboard'); }});

        
    $(document).ready(function(){
        cLog("create assistant rendered")
        $("#createAssistantUser").val(atomic.currentUserId())
    })
    
        
    }
    
    
}