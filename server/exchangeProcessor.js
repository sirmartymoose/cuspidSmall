Meteor.methods({
  exchangeProcessor: function(){
      console.log("Exchange Processor Run")
      pastOpps = findPastOpportunities()
      console.log("Here Are the Past Opportunities:")
      console.log(pastOpps)
      markOpportunitiesAsPast(pastOpps)
  }  
    
})