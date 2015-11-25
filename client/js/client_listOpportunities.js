if (Meteor.isClient) {
     Template.listOpportunities.onRendered(function () {
        cLog("client_listOpportunities.js", "listOpportunities template onRendered")

        $(document).ready(function(){
            cLog("client_listOpportunities.js", "listOpportunities documentReady")
         })
    })
    
Template.listOpportunities.helpers({
      opps: function () {
        oppsData = getOpportunities(0,1,0,0)
        
        $(oppsData).each(function(x,y){
            y['formattedDate'] = timeFunctions.displayDateMMDDYYYY(y['needDate'])
        })
        
        return oppsData
      }, 
      
      isThereAnOppToDisplay: function(){
          var myOpp = Template.listOpportunities.__helpers.get('opps').call()
          if (myOpp.length > 0){
              return true
          } else {
              return false
          }
      }
});
}

