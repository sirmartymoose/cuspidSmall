        renderOpportunityList = function(inputObjects, destination, limitCount){
            cLog("renderOpportunity.js","RenderOpportunityList function called")
            i = 0 
            htmlString = ""
            destination = "#" + destination
        

            $(inputObjects).each(function(x,y){
                if(i < limitCount){
                posStatus = getOpportunityStatus(y)
                var htmlStub = ""; 
                htmlStub = htmlStub + "<li class='list-group-item'><div class='row'><div class='col-xs-10'><div class='row'><div class='col-xs-12 listing_positionTitle'><a href='/viewOpportunity/" + y['_id'] +"'>" + y['positionName'] + "</a></div></div><div class='row'><div class='col-xs-12 listing_positionTiming'>"+ timeFunctions.displayDateMMDDYYYY(y['needDate'])    +"</div></div></div><div class='col-xs-2'><div class='row'><div class='col-xs-12 listing_positionStatus'> " + posStatus + "</div></div></div></div></li>"
                htmlString = htmlString + htmlStub
                i = i + 1
                } else {}
                
                
            })
            
            
            
            $(destination).html(htmlString)
            
            
        }



        getRelevantOpportunities = function(isBooked){
                if(isBooked == 0){
                    return opportunities.find({'booking.isBooked':false}).fetch()
                } else {
                    return opportunities.find({'booking.isBooked':true}).fetch()
                }
        

            
            
        }