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
        
    }
    
})