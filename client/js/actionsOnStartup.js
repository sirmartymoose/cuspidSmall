if (Meteor.isClient) {
  Meteor.startup(function () {

        uType = getUserType(Meteor.userId())
        if(uType === "dentist"){
            findUnratedOpportunities(1)
        }
        if(uType ===  "assistant"){
            findUnratedOpportunities(0)
        }
        


  });
}