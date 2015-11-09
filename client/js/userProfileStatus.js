getUserProfileStatus = function(){
    
    userData = Meteor.users.findOne()
    cLog(userData)
    
    //isApproved, profileCreated
    // 1 = Profile Complete and Approved
    // 2 = Profile Complete pending approval
    // 3 = Profile not complete
    
    if(userData['profile']['isApproved'] == true){
        cLog("evaluated to profile approved true")
        return 1
    }
    
    if(userData['profile']['profileCreated'] == true){
        cLog("evaluated to profile created true")
        return 2
    }
    
    else {
        return 3
    }
    
    
}