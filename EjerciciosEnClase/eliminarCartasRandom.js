let numerosPoker=["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
let palosPoker=["Diamante","Corazon","Pica","Trebol"];
let coloresPoker=["Rojo","Negro"];
let baraja=[];
let eliminadas=[];

for(const palo of palosPoker){
    const color = palo==="Diamante" || palo === "Corazon" ? "Rojo":"Negro"
        for(const numero of numerosPoker){ 
            let carta={
                numero,
                palo,
                color
            }
            baraja.push(carta);
        }
}


for(let i=0;i<6;i++){
    let numRand=0;
    numRand=Math.floor(Math.random() * baraja.length);
    if(numRand!=0){
        eliminadas.push(baraja[numRand-1]);
        baraja.splice(numRand-1,1);
    }else{
        eliminadas.push(baraja[0]);
        baraja.splice(0,1);
    }
}
console.log(baraja);
console.log(eliminadas);

