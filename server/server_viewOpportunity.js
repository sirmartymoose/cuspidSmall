Meteor.methods({
    getOpportunityDetails: function(oId){
      var outData = opportunities.findOne({_id: oId})
      outObj = {}
      outObj['positionName'] = outData['positionName'] + " Needed"
      outObj['needDate'] = outData['needDate']
      outObj['officeName'] = outData['officeName']
      
      var startTime = timeFunctions.convertMilitaryToDisplay(outData['startTime'])
      var endTime = timeFunctions.convertMilitaryToDisplay(outData['endTime'])
      if(timeFunctions.isDateToday(outData['needDate']) == true){
        outObj['needDate'] = "Today (" + timeFunctions.displayDateMMDDYYYY(outData['needDate']) + ")"
      } 
      if(timeFunctions.isDateTomorrow(outData['needDate']) == true){
        outObj['needDate'] = "Tomorrow (" + timeFunctions.displayDateMMDDYYYY(outData['needDate']) + ")"
      } 
      
      else {
        outObj['needDate'] = timeFunctions.displayDateMMDDYYYY(outData['needDate'])
      }
      outObj['timeFrame'] = startTime + " - " + endTime
      outObj['hourlyRate'] = currencyFunctions.convertIntegerToDisplayDollars(outData['hourlyRate']) + " hour"
      outObj['description'] = outData['description']
      outObj['address1'] = outData['address1']
      outObj['address2'] = outData['address2']
      outObj['city'] = outData['city']
      outObj['state'] = outData['state']
      outObj['cityState'] = outData['city'] + "," + outData['state']
      outObj['zipCode'] = outData['zipCode']
      var rawPay = (parseInt(outData['endTime']) - parseInt(outData['startTime'])) * outData['hourlyRate']  
      outObj['totalPay'] = currencyFunctions.convertIntegerToDisplayDollars(rawPay) + " Total"
      
      outObj['iframeMetaData'] = "https://maps.google.com/maps?hl=en&q=" + outData['address1'] + " " + outData['city'] + outData['state'] + "&ie=UTF8&t=roadmap&z=14&iwloc=B&output=embed"
      
      //https://maps.google.com/maps?hl=en&q=7948 Caruth Ct Dallas Tx&ie=UTF8&t=roadmap&z=14&iwloc=B&output=embed"
      


      return outObj
    }
    
})
