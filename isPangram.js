function isPangram(string){
    string = string.toLowerCase()
    let str = string.split("")
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let contains = []
    for(let al of alpha){
        for(let c of str){
            if(c==al){
                let isThere = false
                for(let cont of contains){
                    if(cont==c){
                        isThere = true
                    }
                }
                if(isThere == false){
                    contains.push(c);
                }

            }
        }
    }
    if(contains.length == 26){
        return true
    }
    else{
        return false
    }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))