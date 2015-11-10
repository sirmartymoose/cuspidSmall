if (Meteor.isClient) {
    // Check the rendering templates with data section here http://iron-meteor.github.io/iron-router/
    Template.viewOpportunity.helpers({
        opportunityData: function () {
            
            oo = {}
            io =  opportunities.findOne({_id: Router.current().params._id})

            numHours = io['endTime'] - io['startTime']
            totalCost = numHours * io['hourlyRate']

            oo['status'] = getOpportunityStatus(io)
            oo['positionName'] = io['positionName'] + "Needed"
            oo['timing'] = timeFunctions.convertMilitaryToDisplay(io['startTime']) + " - " +  timeFunctions.convertMilitaryToDisplay(io['endTime'])
            oo['totalCost'] = currencyFunctions.convertIntegerToDisplayDollars(totalCost)
            oo['hourlyString'] = currencyFunctions.convertIntegerToDisplayDollars(io['hourlyRate']) + " per hour"
            oo['description'] = io['description']
            oo['address1'] = io['address1']
            oo['address2'] = io['address2']
            oo['cityState'] = io['city'] + ", " + io['state']
            oo['zipCode'] = io['zipCode']
            
            return oo
            
    }
    
        
    });


    Template.viewOpportunity.rendered = function () {
        Meteor.subscribe("allOpportunities");
        Meteor.subscribe("userDataAssistant");
        Meteor.subscribe("userDataDentist");

        cLog("client_viewOpportunity.js", "viewOpportunity rendered")
        

        
        $(document).ready(function(){

            
            if(getUserType(Meteor.userId()) === 'dentist'){
                $("#assistantActionContainer").html("THIS IS A DENTIST")
            } 
        
            $("#acceptPositionButton").click(function(){
                Meteor.call('markOpportunityAsBooked',Router.current().params._id, function(err,res){console.log(err); console.log(res)})
            })
            
            
        })
        

            
            

    }
    

}