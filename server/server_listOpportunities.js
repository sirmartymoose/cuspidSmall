Meteor.methods({
    listOpportunties: function(){
        var o = opportunities.find().fetch(); 
        return o
    }

})
