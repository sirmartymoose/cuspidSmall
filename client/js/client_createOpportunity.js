if (Meteor.isClient) {
    Template.createOpportunity.rendered = function () {
        cLog("client_createOpportunity.js", "create opportunity rendered")
    $(document).ready(function(){
        cLog("client_createOpportunity.js", "document ready")
        
        $("#createOpportunityDentist").val(atomic.currentUserId())
        cLog("client_createOpportunity.js", "assigned user id to the hidden element")

        Meteor.call('getDentistLocationForCreatingOpportunity', function(err,res){
            cLog("client_createOpportunity.js", "calling getDentistLocationForCreatingOpportunity")
            cLog("client_createOpportunity.js", err)
            cLog("client_createOpportunity.js", res)
            result = res
            $("#opportunityFirstName").val(res[0]['firstName'])
            $("#opportunityLastName").val(res[0]['lastName'])
            $("#opportunityAddress1").val(res[0]['address1'])
            $("#opportunityAddress2").val(res[0]['address2'])
            $("#opportunityCity").val(res[0]['city'])
            $("#opportunityState").val(res[0]['state'])
            $("#opportunityZipCode").val(res[0]['zipCode'])
        })


    })
    }
}