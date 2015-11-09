getOpportunityStatus = function(opportunityObject){
    cLog("GETOPPORTUNITYSTATUS RUN")
    //'booking.isBooked'
    //'booking.hasOccurred'
    //'booking.isBilled'
    //'booking.isPaid'
    // needDate
    // isActive
    
    o = opportunityObject
    
    status = "New"
    console.log(o)
    
    if(o['isActive'] == false){
        status = "Inactive"
    } 
    
    if(o['booking']['isBooked'] == true){
        status = "Booked"
    } 
    
    
    if(o['booking']['isPaid'] == true){
        status = "Paid"
    } 
    cLog("status is", status)
    return status


}