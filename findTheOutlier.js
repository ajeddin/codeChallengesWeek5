/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

Examples:


[160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)
*/
num = [2, 4, 0, 100, 4, 11, 2602, 36] //Should return: 11 (the only odd number)
num =[160, 3, 1719, 19, 11, 13, -21]
console.log(typeof num); 
const outLier = arr => {
    odd = []
    even= []
for (i=0;i<arr.length;i++){
    if(arr[i]%2 === 0 ){
        even.push(arr[i])
    }else{
        odd.push(arr[i])
}
}if (even.length >1){
    return odd
}else{ return even}}

console.log(outLier(num))
const noLoops = arr => {
    odd = []
    even = []
    console.log(typeof arr); 
    arr.map((el)=> el%2===0 ? even.push(el) : odd.push(el))
    if (even.length >1){
        return odd
    }else{ return even}
}
console.log(noLoops(num))

