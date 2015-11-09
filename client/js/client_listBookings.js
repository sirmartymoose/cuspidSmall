if (Meteor.isClient) {
    
    // Check the rendering templates with data section here http://iron-meteor.github.io/iron-router/
  

     Template.listBookings.onRendered(function () {
        cLog("client_listBookings.js", "listBookings template onRendered")
        


        $(document).ready(function(){
             myCurrentBookings = getRelevantOpportunities(1)
             renderOpportunityList(myCurrentBookings, 'listBookingsCurrentBookings', 1000)
        
        
         })
    })
}