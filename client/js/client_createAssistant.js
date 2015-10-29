if (Meteor.isClient) {
  
    Template.createAssistant.rendered = function () {
        
        
    $(document).ready(function(){
        cLog("create assistant rendered")
        $("#createAssistantUser").val(atomic.currentUserId())
    })
    
        
    }
    
    
}