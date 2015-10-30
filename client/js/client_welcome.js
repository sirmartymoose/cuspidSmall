if (Meteor.isClient) {
  
    Template.welcome.rendered = function () {
        cLog("client_welcome.js", "Template.welcome.rendered")

        $(document).ready(function(){
              cLog("client_welcome.js", "Document Ready Fired")
         })
    }
    
    

}