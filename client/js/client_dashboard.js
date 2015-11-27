if (Meteor.isClient) {
    
    Template.dashboard.onRendered(function () {
        cLog("client_dashboard.js", "Template Dashboard onRendered")

        displayAccountStatus = function () {
            var accountStatus = getUserProfileStatus()
            if (accountStatus == 1) {
                $("#accountStatus").html("Your application has been approved and your account is active.")
            }
            if (accountStatus == 2) {
                $("#accountStatus").html("You have submitted your application and it is pending review by our team. You will receive an email when the status changes.")
            }
            if (accountStatus == 3) {
                $("#accountStatus").html("You will need to create a profile and submit for review before we can find opportunities for you.")
            }

        }

        $(document).ready(function () {
            cLog("client_dashboard.js", "Template Dashboard Docuement Ready")

            displayAccountStatus()

        })

    })


    Template.dashboard.helpers({
        pastOpps: function () {
            oppsData = getOpportunities(0, 0, 0, 1)

            $(oppsData).each(function (x, y) {
                y['formattedDate'] = timeFunctions.displayDateWithHelpers(y['needDate'])
            })

            return oppsData
        },
        
        isTherePastOppToDisplay: function(){
          var myOpp = Template.dashboard.__helpers.get('pastOpps').call()
          if (myOpp.length > 0){
              return true
          } else {
              return false
          }
      },
        
        pendingOpps: function () {
            oppsData = getOpportunities(0, 0, 1, 0)

            $(oppsData).each(function (x, y) {
                y['formattedDate'] = timeFunctions.displayDateWithHelpers(y['needDate'])
            })

            return oppsData
        },
        isTherePendingOppToDisplay: function(){
          var myOpp = Template.dashboard.__helpers.get('pendingOpps').call()
          if (myOpp.length > 0){
              return true
          } else {
              return false
          }
      },
        
        
        newOpps: function () {
            oppsData = getOpportunities(0, 1, 0, 0)

            $(oppsData).each(function (x, y) {
                y['formattedDate'] = timeFunctions.displayDateWithHelpers(y['needDate'])
            })

            return oppsData
        },
        
        isThereNewOppToDisplay: function(){
          var myOpp = Template.dashboard.__helpers.get('newOpps').call()
          if (myOpp.length > 0){
              return true
          } else {
              return false
          }
      },
        
        
        isApproved: function () {
            var userProfile = Meteor.users.find().fetch()[0]['profile']['isApproved']
            return userProfile
        }
        
        
    });

}