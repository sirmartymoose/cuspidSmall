if (Meteor.isClient) {
  Meteor.startup(function () {
        
        Meteor.call('exchangeProcessor')
        

        
        $(document).ready(function(){
            
        })

  });
}