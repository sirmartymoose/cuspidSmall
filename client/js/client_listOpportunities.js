if (Meteor.isClient) {
    
    // Check the rendering templates with data section here http://iron-meteor.github.io/iron-router/
  
    Template.listOpportunities.rendered = function () {
        cLog("client_listOpportunities.js", "subscribing to test")
        Meteor.subscribe("allOpportunities");

        cLog("client_listOpportunities.js", "listOpportunties template rendered")
        
        renderOpportunities = function(inputObjects){
            htmlString = ""
            $(inputObjects).each(function(x,y){
                var htmlStub = ""; 
                htmlStub = htmlStub +     "<div class='row appDivider'><div class='row'><div class='col-xs-12'><div id='opportunityTitle'>"
                htmlStub = htmlStub + "<a href='viewOpportunity/" + y['_id'] + "'>"+ y['positionName'] + "</a>"
                htmlStub = htmlStub + "</div></div></div><div class='row'><div class='col-xs-8'><div id='tertiaryText'>"
                htmlStub = htmlStub + y['needDate']
                htmlStub = htmlStub + "</div></div><div class='col-xs-4'></div></div></div>"
                htmlString = htmlString + htmlStub
            })
            
            $("#opportunityListings").html(htmlString)
            
            
        }

        $(document).ready(function(){
            cLog("client_listOpportunities.js", "document ready")
            Meteor.call('listOpportunties', function(err, res){
                cLog("client_listOpportunities.js", "listOpportunties method called")
                cLog("client_listOpportunities.js", err)
                cLog("client_listOpportunities.js", res)
                renderOpportunities(res)
            })
        
        
         })
    }
}