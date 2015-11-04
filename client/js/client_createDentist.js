if (Meteor.isClient) {
  
    Template.createDentist.rendered = function () {
        Meteor.subscribe("userDataDentist");
                AutoForm.addHooks('insertDentistForm', {onSuccess: function(){
                    cLog("client_createDentist.js", "Insert Dentist successfull")
                    Meteor.call('updateUserCollectionToReflectProfileCompletion', function(err,res){
                        cLog("client_createDentist.js", "updateUserCollectionToReflectProfileCompletion")
                    })
                    Router.go('dashboard')}});
                    cLog("client_createDentist.js", "Directing the user to the dashboard")
        
    $(document).ready(function(){
        cLog("client_createDentist.js", "Document Ready")
        $("#createDentistUser").val(atomic.currentUserId())
        cLog("client_createDentist.js", "Hidden form value assigned to the user")
    })
    }
}