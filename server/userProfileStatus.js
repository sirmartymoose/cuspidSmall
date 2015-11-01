Meteor.methods({
    hasUserProfileBeenFilledOut: function(a_or_d){
        var requestingUser = this.userId
        if(a_or_d == 'assistant'){
            var result = assistants.find({assistantUserId: requestingUser}).fetch()
            if(result.length > 0){
                return true; 
            } else {
                return false
            }
        }
        if(a_or_d == 'dentist'){
            var result = dentists.find({dentistUserId: requestingUser}).fetch()
            if(result.length > 0){
                return true; 
            } else {
                return false
            }
        }
    }, 
    updateUserCollectionToReflectProfileCompletion: function(){
        var requestingUser = this.userId
        Meteor.users.update({_id: requestingUser }, {$set: {'profile.profileCreated': true}})
        
    }
    
})