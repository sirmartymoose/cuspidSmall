if (Meteor.isClient) {
    
    // Check the rendering templates with data section here http://iron-meteor.github.io/iron-router/
  

     Template.listOpportunities.onRendered(function () {
        cLog("client_listOpportunities.js", "listOpportunties template onRendered")
        


        $(document).ready(function(){
             myCurrentOpportunities = getRelevantOpportunities(0)
             renderOpportunityList(myCurrentOpportunities, 'listOpportunitiesCurrentOpportunities', 1000)
        
        
         })
    })
}