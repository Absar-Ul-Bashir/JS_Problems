function inArray(array1,array2){
    let newArr = []
    let isThere = true
    for(let el1 of array1){
        for(let el2 of array2){
            let index = 0
            for(let i=0 ; i<el1.length ; i++){
                if(el1[0] == el2[i]){
                    index = i
                    for(let x=0;x<el1.length;x++){
                        if(el1[x]!=el2[index]){
                            isThere = false
                        }
                        else{index++}
                        
                    }
                    if(isThere == true){
                        let isAlThere = false
                        for(let el of newArr){
                            if(el==el1){
                                isAlThere = true
                            }
                        }
                        if(!isAlThere){
                            newArr.push(el1)
                        }
                        
                    }else{
                        isThere = true
                    }
                }
            }
        }
    }
    console.log(newArr)

}

let a1 = ["arp", "live", "strong"]

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

inArray(a1,a2)