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
      },
        isThereAnOppToDisplay: function(){
          var myOpp = Template.listPending.__helpers.get('opps').call()
          if (myOpp.length > 0){
              return true
          } else {
              return false
          }
      }
});
}

