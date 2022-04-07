const data = [2,3,5,12,54,5,-1,0,23,66,7]; 
let arrayDuplicada = data.concat(data);
let arrayObj=[];

for(let i=0;i<arrayDuplicada.length;i++){
    let obj={
        orig:arrayDuplicada[i],
        mod: Math.sqrt(arrayDuplicada[i])
    }
    arrayObj.push(obj);
}
console.log(arrayObj);
