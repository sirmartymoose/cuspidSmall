if (Meteor.isClient) {
     Template.pastOpportunities.onRendered(function () {
        cLog("client_pastOpportunities.js", "PastOpportunities template onRendered")

        $(document).ready(function(){
            cLog("client_pastOpportunities.js", "pastOpportunities documentReady")
         })
    })
    
Template.pastOpportunities.helpers({
      opps: function () {
        oppsData = getOpportunities(0,0,0,1)
        
        $(oppsData).each(function(x,y){
            y['formattedDate'] = timeFunctions.displayDateMMDDYYYY(y['needDate'])
        })
        
        return oppsData
      }
});
}

