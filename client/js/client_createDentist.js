if (Meteor.isClient) {
  
    Template.createDentist.rendered = function () {
                AutoForm.addHooks('insertDentistForm', {onSuccess: function(){checkUserProfileStatus(); Router.go('dashboard')}});
        
        
    $(document).ready(function(){
        cLog("create dentist rendered")
        $("#createDentistUser").val(atomic.currentUserId())
    })
    
        
    }
    
    
}