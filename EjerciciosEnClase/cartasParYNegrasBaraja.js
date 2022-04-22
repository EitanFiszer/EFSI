let numerosPoker=["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
let palosPoker=["Diamante","Corazon","Pica","Trebol"];
let coloresPoker=["Rojo","Negro"];
let baraja=[];
let contadorNegrasPar=0;

for(let i=0;i<palosPoker.length;i++){
    for(j=0;j<numerosPoker.length;j++){ 
        let carta={
            numero:numerosPoker[j],
            palo:palosPoker[i]
            
        }
        baraja.push(carta);
        if((carta.palo=="Pica"||carta.palo=="Trebol") && (carta.numero%2==0)){
            contadorNegrasPar++;
        }
    }
}
console.log(contadorNegrasPar);
 