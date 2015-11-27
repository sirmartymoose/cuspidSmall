
chooseRandomElement = function(myArray){
    v = myArray[Math.floor(Math.random() * myArray.length)];
    return v; 
}

randomMonth = function(){
    return Math.round(Math.random()*11) + 1
}
randomDateNumber = function(){
    return Math.round(Math.random()*27) + 1
}

constructTestDate = function(){
    var rm = randomMonth()
    var rd = randomDateNumber()
    var d = new Date(2016, rm, rd, 2,2,2,2)
    return d
}



sampleStartTimes = ['7','8', '9','10', '11'];
sampleEndTimes = ['14','15', '16','17', '18'];
sampleHourlyRates = [20, 25, 18, 19, 21, 22, 23, 30]
samplePositionNames = ['Dental Assistant', 'Dental Hygenist', 'Part Time Assistant', 'Part Time Resource', 'Great Resource', 'Temp Assistant']
sampleDescriptions = ['I need to fill this position. It is a part time position and I need a great resource to fill it.']

createTestOpportunity = function(){
    outJSON = {}
    //Date(year, month, day, hours, minutes, seconds, milliseconds);
    var udata = dentists.find({'dentistUserId': Meteor.userId()}).fetch()[0]
    outJSON['address1'] = udata['address1']
    outJSON['address2'] = udata['address2']
    outJSON['city'] = udata['city']
    outJSON['state'] = udata['state']
    outJSON['zipCode'] = udata['zipCode']
    
    outJSON['isActive'] = true
    outJSON['isNew'] = true
    outJSON['isPast'] = false
    outJSON['isPending'] = false
    outJSON['status'] = 'opportunity'
    outJSON['opportunityDentistId'] = udata['dentistUserId']
    outJSON['officeName'] = udata['officeName']
    outJSON['startTime'] = chooseRandomElement(sampleStartTimes)
    outJSON['endTime'] = chooseRandomElement(sampleEndTimes)
    outJSON['hourlyRate'] = chooseRandomElement(sampleHourlyRates)
    outJSON['description'] = chooseRandomElement(sampleDescriptions)
    outJSON['positionName'] = chooseRandomElement(samplePositionNames)
    outJSON['booking'] = {}
    outJSON['booking']['agreedAmount'] = 0
    outJSON['booking']['assistantId'] = ""
    outJSON['booking']['assistanRating'] = 0
    outJSON['booking']['billedAmount'] = 0
    outJSON['booking']['dentistRating'] = 0
    outJSON['booking']['hasAssistantRated'] = false
    outJSON['booking']['hasDentistRated'] = false
    outJSON['booking']['hasOccurred'] = false
    outJSON['booking']['isBilled'] = false
    outJSON['booking']['isBooked'] = false
    outJSON['booking']['isPaid'] = false
    outJSON['booking']['paidAmount'] = 0
    outJSON['needDate'] = constructTestDate()
    outJSON['isTestData'] = true
    return outJSON
}

Meteor.methods({
    
    changeOpportunityDates: function(opportunityId, numDaysToSubtract, password){
        if(password === "Dave1234"){
            currOpp = opportunities.findOne({_id: opportunityId})
            currOppDate = currOpp['needDate']
            newDate = timeFunctions.subtractDates(currOppDate, numDaysToSubtract)
            
            opportunities.update({_id: opportunityId },{$set: {'needDate': newDate}})
        }
        
        
    }, 
    
    createTestOpportunityMethod: function(){
        var d = createTestOpportunity()
        opportunities.insert(d)
        return d;
    }, 
    
    deleteTestOpportunities: function(){
        opportunities.remove({isTestData: true})
    }
    
    
})