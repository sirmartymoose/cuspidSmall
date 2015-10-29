if (Meteor.isClient) {
  
    Template.createDentist.rendered = function () {
        
        
    $(document).ready(function(){
        cLog("create dentist rendered")
        $("#createDentistUser").val(atomic.currentUserId())
    })
    
        
    }
    
    
}