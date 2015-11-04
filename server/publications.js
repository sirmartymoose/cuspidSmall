

Meteor.publish("test", function () {
  return opportunities.find({})
});

Meteor.publish("allOpportunities", function () {
    if(getUserType(this.userId) === 'dentist'){
        return opportunities.find({'booking.isBooked':false, dentistUserId: this.userId})
    }
    if(getUserType(this.userId) === 'assistant'){
        assistantRecord = assistants.find({'assistantUserId': this.userId}).fetch()
        assistantRecordState = assistantRecord[0]['state']
        return opportunities.find({'booking.isBooked':false, state: assistantRecordState})
    }
    else {
        //return opportunities.find({})
        
    }
});