spaceElementText = function(elementId, maxLen,  txt){
        og_text = txt
        short_text = txt   
        elem = "#" + elementId        
        if(og_text.length > maxLen){
        	short_text = short_text.substr(0,maxLen) + "..."
        } else {
        	short_text = og_text 
        }
        $(elem).prop('title', og_text);
        $(elem).text(short_text)
        $('[data-toggle="tooltip"]').tooltip();
    }
