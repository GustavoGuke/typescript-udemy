// array do tipo any
var arrayAny = ["27", 27, true, {}];
// array do tipo number
var arrayNumbers = [1, 2, 3];
arrayNumbers.push(4);
// array do tipo string
var arrayString = ["Gustavo", "kerolin"];
// sintaxe de interface para fazer um array
var arrayInterface = ["js", "node ts", "react ts"];
// iterarando os arrays
arrayNumbers.forEach(function (n) {
    console.log(n);
});
for (var _i = 0, arrayString_1 = arrayString; _i < arrayString_1.length; _i++) {
    var i = arrayString_1[_i];
    console.log(i);
}
for (var i = 0; i < arrayInterface.length; i++) {
    console.log(arrayInterface[i]);
}
arrayAny.forEach(function (element) {
    console.log(element);
});
