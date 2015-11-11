Meteor.methods({
    
    approveUserProfile: function(userId, password){
        if(password === "Dave1234"){
            Meteor.users.update({_id: userId},{$set: {'profile.isApproved': true}})
        }
        
        
    }
    
})