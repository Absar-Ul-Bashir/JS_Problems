function duplicateEncode(word) {
    word = word.toLowerCase()
    let str = word.split("")
    let newStr = ""
    let match = false
    let count =0
    
    for(let c of str){
        for(let ec of str){
            if(ec == c){
                count++
                if(count>1){
                    match=true
                }
            }
        }
        if(match==true){
            newStr+=")"
        }
        else{
            newStr+="("
        }
        match=false
        count=0
    }

    return newStr

}

console.log(duplicateEncode("din"))

