if (Meteor.isClient) {
  
    Template.header.rendered = function () {
        cLog("client_header.js", "header template rendered")

        $(document).ready(function(){
            cLog("client_header.js", "Document Ready")
         })
    }
}