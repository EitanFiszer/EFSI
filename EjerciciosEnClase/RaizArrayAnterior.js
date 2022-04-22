let arrayOriginal=[2,3,5,12,54,5,-1,0,23,66,7];
let arrayDuplicado=arrayOriginal.concat(arrayOriginal);
let arrayFinal=[];

for(let i=0;i<arrayDuplicado.length;i++){
    let obj={
        orig:arrayDuplicado[i],
        raiz:parseFloat(Math.sqrt(arrayDuplicado[i]).toFixed(2))
        
    }
        if(!isNaN(obj.raiz)){
            arrayFinal.push(obj);
        }
}
console.log(arrayFinal);