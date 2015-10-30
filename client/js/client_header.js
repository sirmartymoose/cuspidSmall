if (Meteor.isClient) {
  
    Template.header.rendered = function () {


        $(document).ready(function(){
            cLog("Header rendered")
            
            checkUserProfileStatus = function(){
                Meteor.call('hasUserProfileBeenFilledOut', Meteor.user().profile.userType, function(err, res){
                    if(res == false){
                        if(Meteor.user().profile.userType == 'assistant'){
                            $("#createAssistantLink").html('<a href="createAssistant">create Profile Now</a>')
                        }
                        if(Meteor.user().profile.userType == 'dentist'){
                            $("#createDentistLink").html('<a href="createDentist">create Profile Now</a>')
                        }
                    }
                    if(res == true){
                        if(Meteor.user().profile.userType == 'assistant'){
                            $("#createAssistantLink").html('<a href="updateAssistant">Manage your profile</a>')
                        }
                        if(Meteor.user().profile.userType == 'dentist'){
                            $("#createDentistLink").html('<a href="updateDentist">Manage your profile</a>')
                        }
                    }
                    
                })
                
            }
            
            checkUserProfileStatus()
            
            


              

              
              

         })
    }
    
}