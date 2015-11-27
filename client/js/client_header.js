if (Meteor.isClient) {
    
    /// Load Fo
    
    
    Template.header.events({
        'click #signOut': function (event) {
            cLog("SIGNOUT CLICKED")
            Meteor.logout(function(){
                Router.go('welcome')
            })
            
        }
        
    })
  
  
    Template.header.rendered = function () {
        cLog("client_header.js", "header template rendered")

        $(document).ready(function(){
            cLog("client_header.js", "Document Ready")

            
         })
    }
}

Template.header.helpers({
    hasUnrated: function(){
        uType = getUserType(Meteor.userId())
        
        if(uType === "dentist"){
            //cLog("UTYPE IS DENTIST")
            uo = findUnratedOpportunities(1)
            if(uo.length > 0){
                return true
            }
            
        }
        if(uType ===  "assistant"){
             //cLog("UTYPE IS DENTIST")
            uo = findUnratedOpportunities(0)
            if(uo.length > 0){
                return true
            }
        }
        
        return false
    }
    
})