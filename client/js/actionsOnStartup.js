if (Meteor.isClient) {
  Meteor.startup(function () {
        
        Meteor.call('exchangeProcessor')
        
        uType = getUserType(Meteor.userId())
        if(uType === "dentist"){
            cLog("UTYPE IS DENTIST")
            uo = findUnratedOpportunities(1)
            if(uo.length > 0){
                $('#myModal').modal('show');
                cLog("MY MODAL SHOULD SHOW")
            }
            
        }
        if(uType ===  "assistant"){
             cLog("UTYPE IS DENTIST")
            uo = findUnratedOpportunities(0)
            if(uo.length > 0){
                $('#myModal').modal('show');
                cLog("MY MODAL SHOULD SHOW")
            }
        }
        
        $(document).ready(function(){
            
        })

  });
}