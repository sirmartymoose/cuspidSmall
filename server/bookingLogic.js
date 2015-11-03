//"FvDP4dPbeS8aqoEBf"

Meteor.methods({
    
    markOpportunityAsBooked: function(oId){
        opportunities.update({_id: oId},{$set: {'booking.isBooked': true}})
    }
    
})