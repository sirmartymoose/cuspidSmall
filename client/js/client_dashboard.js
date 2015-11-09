if (Meteor.isClient) {
    

     
     Template.dashboard.onRendered(function () {
        cLog("client_dashboard.js","Template Dashboard onRendered")
        
        displayAccountStatus = function(){
            var accountStatus = getUserProfileStatus()
            if(accountStatus == 1){
                $("#accountStatus").html("Your application has been approved and your account is active.")
            }            
            if(accountStatus == 2){
                $("#accountStatus").html("You have submitted your application and it is pending review by our team. You will receive an email when the status changes.")
            }
            if(accountStatus == 3){
                $("#accountStatus").html("You will need to create a profile and submit for review before we can find opportunities for you.")
            }
            
        }
         
         $(document).ready(function(){
             cLog("client_dashboard.js","Template Dashboard Docuement Ready")
             myDashboardOpportunities = getRelevantOpportunities(0)
             renderOpportunityList(myDashboardOpportunities, 'dashboardCurrentOpportunities', 2)
             myDashboardBookings = getRelevantOpportunities(1)
             renderOpportunityList(myDashboardBookings, 'dashboardCurrentBookings', 2)
             displayAccountStatus()
             
             
         })
         
     })
    
}