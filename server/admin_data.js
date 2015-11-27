Meteor.methods({
    
    listAllUsers: function(password){
        if(password === "Dave1234"){
            return Meteor.users.find().fetch()
        }
        
        
    }
    
})