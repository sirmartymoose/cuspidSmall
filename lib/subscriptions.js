if(Meteor.isClient){
        cLog("client_listOpportunities.js", "subscribing to allOpportunities")
        Meteor.subscribe("allOpportunities");
        cLog("client_listOpportunities.js", "subscribing to allBookings")
        Meteor.subscribe("allBookings");
        cLog("client_listOpportunities.js", "subscribing to userDataAssistant")
        Meteor.subscribe("userDataAssistant");
        cLog("client_listOpportunities.js", "subscribing to userDataDentist")
        Meteor.subscribe("userDataDentist");
}