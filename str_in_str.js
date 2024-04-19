let str1 = "arms"
let str2 = "armstrong"
let isThere = true
for(let i=0 ; i<str2.length ; i++){
    if(str1[0] == str2[i]){
        let index = i;
        for(let x=0 ; x<str1.length ; x++){
            if(str1[x]!=str2[index]){
                isThere = false
            }
            index++
        }
    }
    if(isThere == false){
        console.log("false")
        break
    }
    else{
        console.log("true")
        break
    }
}

