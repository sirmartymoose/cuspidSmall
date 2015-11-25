Meteor.methods({
    
    changeOpportunityDates: function(opportunityId, numDaysToSubtract, password){
        if(password === "Dave1234"){
            currOpp = opportunities.findOne({_id: opportunityId})
            currOppDate = currOpp['needDate']
            newDate = timeFunctions.subtractDates(currOppDate, numDaysToSubtract)
            
            opportunities.update({_id: opportunityId },{$set: {'needDate': newDate}})
        }
        
        
    }
    
})