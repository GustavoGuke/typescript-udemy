function passCoordenadas(coord: {x:number | string, y:number}){

    if(typeof coord.x === "string"){
        console.log("X string coord: "+coord.x)
        console.log("Y coord: "+coord.y)
    }else{
        console.log("X number coord: "+coord.x)
    }
}
const objCoord = {x:"500", y:349}
passCoordenadas(objCoord)

