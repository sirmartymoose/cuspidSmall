var dayNames = new Array(
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
);


timeFunctions = {
    convertMilitaryToDisplay: function(x){
        // inputs a numerical time and outputs a formatted time (i.e 13 = 1:00PM)
        if(x < 13){
            var outString = x + ":00 AM"
            return outString
        }
 
        if(x > 12){
            newX = x - 12
            var outString = newX + ":00 PM"
            return outString
        }
    } ,
    displayDateMMDDYYYY: function(dateString){
        ds = dateString; 
        var month = ds.getMonth() + 1
        var day = ds.getDate() 
        var year = ds.getFullYear()
        ds = month + "/" + day + "/" + year
        return ds
    }, 
    isDateToday: function(dateString){
        uds = dateString; 
        var userMonth = uds.getMonth()
        var userDay = uds.getDate()
        var userYear = uds.getFullYear()
        uds = userMonth + "/" + userDay + "/" + userYear
        
        cds = new Date()
        var currentMonth = cds.getMonth()
        var currentDay = cds.getDate(); 
        var currentYear = cds.getFullYear()
        cds = currentMonth + "/" + currentDay + "/" + currentYear
        
        if(uds == cds){
            return true
        } else {
            return false
        }
        
    },    
    isDateTomorrow: function(dateString){
        uds = dateString; 
        var userMonth = uds.getMonth()
        var userDay = uds.getDate()
        var userYear = uds.getFullYear()
        uds = userMonth + "/" + userDay + "/" + userYear
        
        cds = new Date()
        var currentMonth = cds.getMonth()
        var currentDay = cds.getDate() + 1 
        var currentYear = cds.getFullYear()
        cds = currentMonth + "/" + currentDay + "/" + currentYear
        
        if(uds == cds){
            return true
        } else {
            return false
        }
        
    }, 
    subtractDates: function(dateString, numDays){
        d = dateString
        x = numDays
        d.setDate(d.getDate() - x);
        return d
    }, 
    displayDateWithHelpers: function(dateString){
        var ds = timeFunctions.displayDateMMDDYYYY(dateString); 
        needDow = true
        if(timeFunctions.isDateTomorrow(dateString)){
            ds = ds + " (Tomorrow)"
            needDow = false
        }
        
        if(timeFunctions.isDateToday(dateString)){
            ds = ds + " (Today)"
            needDow = false
        }
        
        if(needDow === true){
            myDow = timeFunctions.getDayOfWeek(dateString)
            ds = ds + " - " + myDow
        }
        return ds
    }, 
    getDayOfWeek: function(dateString){
        down = dateString.getDay()
        dow = dayNames[down]
        return dow
    }
        
}