if (Meteor.isClient) {
  
    Template.updateDentist.rendered = function () {
         cLog("update dentist rendered")
                 AutoForm.addHooks('updateDentistForm', {onSuccess: function(){checkUserProfileStatus(); Router.go('dashboard'); }});

        
    $(document).ready(function(){
        cLog("create dentist rendered")
        
    })
    
        
    }
    
    
    Template.updateDentist.helpers({
        selectedPersonDoc: function () {
            return dentists.findOne({dentistUserId: Meteor.userId()}); 
        }
        
    })
    
}