Template.ratings.onRendered(function () {
    
    
    rateOpportunity = function(id, rtg, userType){
        if(userType === 'assistant' ){
            opportunities.update(id, {$set: {'booking.hasAssistantRated': true}})
            opportunities.update(id, {$set: {'booking.assistantRating': rtg}})
        }
        if(userType === 'dentist' ){
            opportunities.update(id, {$set: {'booking.hasDentistRated': true}})
            opportunities.update(id, {$set: {'booking.dentistRating': rtg}})
        }
        
        
    }

    $(document).ready(function(){
        $('#myModal').modal('show');

            $(".ratingButton").click(function () {
                rt = $("input:radio[name='inlineRadioOptions']:checked", this.form).val()
                rtId = $("input[name='ratingId']", this.form).val()
                rateOpportunity(rtId, rt, uType)
            
            })



    })
    


})

    Template.ratings.helpers({
        
        unrated: function(){
            cLog("UNRATED CALLED")
           uType =  getUserType(Meteor.userId())
    
        if(uType === "dentist"){
            uopps = opportunities.find({'booking.hasDentistRated': false, isPast: true, 'booking.isBooked': true })
            return uopps
        }
        if(uType === "assistant"){
            uopps = opportunities.find({'booking.hasAssistantRated': false, isPast: true, 'booking.isBooked': true })
            return uopps
        }

        }
        
    })