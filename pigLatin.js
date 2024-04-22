function pigIt(str) {
    let arr = str.split(" ")
    let retArr = []
    for (let el of arr) {
        let alpha = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
        let isThere = false
        for (let al of alpha) {
            if (el[0] == al || el[0]==al.toUpperCase()) {
                isThere = true
            }
        }
        if (isThere == true) {
            el = el.split("")
            let el0 = el[0]
            el.splice(0, 1)
            el.push(el0 + "ay")
            let str = ""
            for (let ch of el) {
                str += ch
            }
            retArr.push(str)
        }
        else{
            retArr.push(el)
        }
    }
    let retStr = ""
    for (let w of retArr) {
        if (retArr.indexOf(w) == 0) {
            retStr += w
        } else {
            retStr += " " + w
        }
    }
    return retStr
}

console.log(pigIt('This siay ymay tringsay'))
