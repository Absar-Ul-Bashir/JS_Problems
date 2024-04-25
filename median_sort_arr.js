/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = []
    arr = arr.concat(nums1 , nums2)
    if(arr.length % 2 !=0){
        arr = arr.sort((a,b)=>{
            return a-b
        })
        let el = ((arr.length+1)/2)-1
        return(arr[el])
    }
    else{
        arr.sort((a,b)=>{
            return a-b
        })

        let n1 = arr[(arr.length/2)-1]
        let n2 = arr[arr.length/2]

        return((n1+n2)/2)
    }
};

console.log(findMedianSortedArrays([1,3,4],[2,5,6]))