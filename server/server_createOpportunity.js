Meteor.methods({
    getDentistLocationForCreatingOpportunity: function(){
        var user = this.userId
        var res = dentists.find({dentistUserId: user}).fetch()
        return res
    }

})
