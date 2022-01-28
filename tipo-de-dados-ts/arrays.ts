// array do tipo any
let arrayAny: any = ["27", 27, true, {}]

// array do tipo number
let arrayNumbers:number[] = [1,2,3]
arrayNumbers.push(4)

// array do tipo string
let arrayString:string[] = ["Gustavo", "kerolin"]

// sintaxe de interface para fazer um array
let arrayInterface: Array<string> = ["js","node ts","react ts"]

// iterarando os arrays
arrayNumbers.forEach(n => {
    console.log(n)
})
for(let i of arrayString){
    console.log(i)
}
for(let i =0; i < arrayInterface.length; i++){
    console.log(arrayInterface[i])
}
arrayAny.forEach(element => {
    console.log(element)
});