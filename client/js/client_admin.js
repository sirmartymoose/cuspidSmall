if (Meteor.isClient) {
     Template.admin.onRendered(function () {
        cLog("client_pastOpportunities.js", "PastOpportunities template onRendered")

        $(document).ready(function(){
            cLog("client_pastOpportunities.js", "pastOpportunities documentReady")
            $('.adminMarkAsPast').click(function(){
                thisOppId = $(this).attr("id");
                Meteor.call('changeOpportunityDates',thisOppId, 600, "Dave1234")
            })
         })
    })
    
Template.admin.helpers({
      pendingOpps: function () {
        oppsData = getOpportunities(0,0,1,0)
        
        $(oppsData).each(function(x,y){
            y['formattedDate'] = timeFunctions.displayDateMMDDYYYY(y['needDate'])
        })
        return oppsData
      }
      
});
}
