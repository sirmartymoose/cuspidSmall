
Meteor.publish("allOpportunities", function () {
    if(getUserType(this.userId) === 'dentist'){
        return opportunities.find({'booking.isBooked':false, opportunityDentistId: this.userId})
    }
    if(getUserType(this.userId) === 'assistant'){
        assistantRecord = assistants.find({'assistantUserId': this.userId}).fetch()
        assistantRecordState = assistantRecord[0]['state']
        return opportunities.find({'booking.isBooked':false, state: assistantRecordState, isNew: true})
    }
    else {
        //return opportunities.find({})
    }
});
    
Meteor.publish("allBookings", function () {
    if(getUserType(this.userId) === 'dentist'){
        return opportunities.find({'booking.isBooked':true, opportunityDentistId: this.userId})
    }
    if(getUserType(this.userId) === 'assistant'){
        return opportunities.find({'booking.isBooked':true, 'booking.assistantId': this.userId})
    }
    else {
        //return opportunities.find({})
    }
});

Meteor.publish("userDataDentist", function(){
    return dentists.find({dentistUserId: this.userId})
})
  
 
Meteor.publish("userDataAssistant", function(){
    return assistants.find({assistantUserId: this.userId})
})  
    
