if (Meteor.isClient) {
     Template.listPending.onRendered(function () {
        cLog("client_listPending.js", "listPending template onRendered")

        $(document).ready(function(){
            cLog("client_listPending.js", "listPending documentReady")
         })
    })
    
Template.listPending.helpers({
      opps: function () {
        oppsData = getOpportunities(0,0,1,0)
        
        $(oppsData).each(function(x,y){
            y['formattedDate'] = timeFunctions.displayDateMMDDYYYY(y['needDate'])
        })
        
        return oppsData
      }
});
}

