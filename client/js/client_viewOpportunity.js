if (Meteor.isClient) {
    // Check the rendering templates with data section here http://iron-meteor.github.io/iron-router/

    Template.viewOpportunity.rendered = function () {
        cLog("client_viewOpportunity.js", "viewOpportunity rendered")
        
        displayOpportunity = function(x){
            $("#opportunityTitle").html(x['positionName'])
            $("#opportunityTiming").html(x['needDate'])
            $("#opportunityTimingShort").html(x['needDate'])
            $("#opportunityTimeFrame").html(x['timeFrame'])
            $("#opportunityHourlyRate").html(x['hourlyRate'])
            $("#opportunityCostTotal").html(x['totalPay'])
            $("#opportunityJobDescription").html(x['description'])
            $("#opportunityOfficeName").html(x['officeName'])
            $("#opportunityAddress1").html(x['address1'])
            $("#opportunityAddress2").html(x['address2'])
            $("#opportunityCityState").html(x['cityState'])
            $("#opportunityZipCode").html(x['zipCode'])
            $("#gmap").attr('src',x['iframeMetaData']);
        }
        
        $(document).ready(function(){
            Meteor.call('getOpportunityDetails', Router.current().params._id, function(err,res){
                            displayOpportunity(res)
            })
        })
        

            
            

    }
    

}