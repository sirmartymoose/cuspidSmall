Meteor.methods({
    
    makeUserAdmin: function(userId, password){
        if(password === "Dave1234"){
            Meteor.users.update({_id: userId},{$set: {'profile.isAdmin': true}})
        }
        
        
    }
    
})