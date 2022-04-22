const data=[2,3,5,12,54,5,-1,0,23,66,7];
let newArray=[];

for(let i=0;i<data.length;i++){
    if(i==0){
        newArray.push(0-data[i+1]);
    }
    else if(i==data.length-1){
        newArray.push(data[i]*data[i-1]);
    }else{
        newArray.push((data[i]*data[i-1])-data[i+1]);
    }
}
console.log(newArray);