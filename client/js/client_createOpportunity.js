if (Meteor.isClient) {
    Template.createOpportunity.rendered = function () {
        cLog("client_createOpportunity.js", "create opportunity rendered")
    $(document).ready(function(){
        cLog("client_createOpportunity.js", "document ready")
        
        $("#createOpportunityDentist").val(atomic.currentUserId())
        cLog("client_createOpportunity.js", "assigned user id to the hidden element")
    })
    }
}