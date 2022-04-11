const CartasPorPalo =["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
const PalosPoker = ["Corazón","Trebol","Pica","Diamante"];
let contadorNegrasPar=0;
let baraja=[];

for(let i=0; i<PalosPoker.length;i++){
    for(let j=0; j<CartasPorPalo.length;j++){
        let carta={
            numero:CartasPorPalo[j],
            palo:PalosPoker[i]
        }
        baraja.push(carta);
        if((carta.palo=="Pica"||carta.palo=="Trebol") && (carta.numero%2==0)){
            contadorNegrasPar++;
        }
    }
}
console.log(contadorNegrasPar);