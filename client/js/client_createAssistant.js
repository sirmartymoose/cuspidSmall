if (Meteor.isClient) {
  
    Template.createAssistant.rendered = function () {
        AutoForm.addHooks('insertAssistantForm', {onSuccess: function(){

            Meteor.call('updateUserCollectionToReflectProfileCompletion', function(err,res){console.log(res)})
            Router.go('dashboard'); 
            
        }});

        
    $(document).ready(function(){
        cLog("create assistant rendered")
        $("#createAssistantUser").val(atomic.currentUserId())
    })
    
        
    }
    
    
}