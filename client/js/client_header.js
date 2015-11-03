if (Meteor.isClient) {
    
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