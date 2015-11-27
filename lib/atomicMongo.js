atomicMongo = {
    logAll: function(tablename){
        tName = tablename
        var res = [tablename][0].find().fetch()
        console.log(res)
    }
    
}