function arrayDiff(a, b) {
    console.log(a)
    for(let val=0;val<a.length;val++){
        for(let el=0;el<b.length;el++){
            if(a[val]==b[el]){
                console.log(a.splice(val,1))
                val=val-1
            }
        }
    }
    return a;
}

console.log(arrayDiff([1,2,2,3,3,3],[2]))  


