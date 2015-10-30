if (Meteor.isClient) {
  
    Template.createAssistant.rendered = function () {
        AutoForm.addHooks('insertAssistantForm', {onSuccess: function(){
            cLog("client_createAssistant.js", "Insert Assistant successfull")
            Meteor.call('updateUserCollectionToReflectProfileCompletion', function(err,res){
                cLog("client_createAssistant.js", "updateUserCollectionToReflectProfileCompletion operation has run")
            })
            Router.go('dashboard'); 
            cLog("client_createAssistant.js", "redirecting user to the dashboard")
        }});

    $(document).ready(function(){
        cLog("client_createAssistant.js", "Document ready")
        $("#createAssistantUser").val(atomic.currentUserId())
        cLog("client_createAssistant.js", "updated hidden form value to reflect the users id")
    })
    }
}