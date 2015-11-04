
getUserType = function(uId){
    

    userType = Meteor.users.find({_id: uId}).fetch()

                isDentist = userType[0]['profile']['isDentist']
                isAssistant = userType[0]['profile']['isAssistant']
                if(isDentist == true){
                    console.log("dentist")
                    return "dentist"
                }
                if(isAssistant == true){
                    console.log("assistant")
                    return "assistant"
                }
                else {
                    console.log("notUser")
                    return "notUser"
                }
        
    }