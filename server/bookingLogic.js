//"FvDP4dPbeS8aqoEBf"

Meteor.methods({
    
    markOpportunityAsBooked: function(oId){
        var outData = opportunities.find({_id: oId}).fetch()
        //var rawPay = (parseInt(outData['endTime']) - parseInt(outData['startTime'])) * outData['hourlyRate']
        //rawPay = parseInt(rawPay)
        //console.log(rawPay)
        var contractedDate = new Date()
        
        
        opportunities.update({_id: oId},{$set: {'booking.isBooked': true}})
        opportunities.update({_id: oId},{$set: {'booking.assistantId': this.userId}})
        opportunities.update({_id: oId},{$set: {'status': 'booking'}})
        opportunities.update({_id: oId},{$set: {'booking.hasOccurred': true}})
        opportunities.update({_id: oId},{$set: {'booking.contractedDate': contractedDate}})
        //opportunities.update({_id: oId},{$set: {'booking.agreedAmount': rawPay}})
        
        // Mark the opportunity as pending
        
        
        markOpportunityAsPending(oId)
        
        return opportunities.find({_id: oId}).fetch()
        
    }
    
})

// Server only

markOpportunityAsNew = function(oId){
    var outData = opportunities.find({_id: oId}).fetch()
     opportunities.update({_id: oId},{$set: {'isNew': true}})
     opportunities.update({_id: oId},{$set: {'isPending': false}})
     opportunities.update({_id: oId},{$set: {'isPast': false}})
}


markOpportunityAsPending = function(oId){
    var outData = opportunities.find({_id: oId}).fetch()
     opportunities.update({_id: oId},{$set: {'isNew': false}})
     opportunities.update({_id: oId},{$set: {'isPending': true}})
     //opportunities.update({_id: oId},{$set: {'isPast': true}})
     
}

markOpportunityAsPast = function(oId){
    var outData = opportunities.find({_id: oId}).fetch()
     opportunities.update({_id: oId},{$set: {'isNew': false}})
     opportunities.update({_id: oId},{$set: {'isPending': false}})
     opportunities.update({_id: oId},{$set: {'isPast': true}})
}

findPastOpportunities = function(){
    outArray = []
    var currDate = new Date()
    var allOpps = opportunities.find().fetch()
    
    for(i=0; i < allOpps.length; i++){
        if(allOpps[i]['needDate'] < currDate){
            outArray.push(allOpps[i]['_id'])
        }
        
    }
    return outArray
}

markOpportunitiesAsPast = function(inArray){
    for(i=0; i < inArray.length; i++){
        markOpportunityAsPast(inArray[i])
    }
    
}


