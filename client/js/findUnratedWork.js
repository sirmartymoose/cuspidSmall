findUnratedOpportunities = function(isDentist){
    if(isDentist == 1){
        unratedOpportunities = opportunities.find({'booking.hasDentistRated': false, isPast: true, 'booking.isBooked': true }).fetch()
        alert("UNRATED OPPS FOUDN")
        return unratedOpportunities        
    } else {
        unratedOpportunities = opportunities.find({'booking.hasAssistantRated': false, isPast: true, 'booking.isBooked': true }).fetch()
        alert("UNRATED OPPS FOUDN")
        return unratedOpportunities   
    }
}