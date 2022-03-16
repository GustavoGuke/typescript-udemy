// function first<T>(arr: T[]): T {
//     return arr[0]
// }

// console.log(first(["1",3,true]))

//=====================================================================
// function biggesNumber<T extends number | string>(a: T, b: T): T{
//     let biggest: T

//     if(a > b){
//         biggest = a
//     }else {
//         biggest = b
//     }

//     return biggest
// }

// console.log(biggesNumber(5,4))
//=====================================================================

function mergeArray<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(mergeArray<number | string>([1,2,3], ["1"]))