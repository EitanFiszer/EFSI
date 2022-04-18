const CartasPorPalo =["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
const PalosPoker = ["Corazón","Trebol","Pica","Diamante"];
let contadorNegrasPar=0;
let baraja=[];
let k=0;

for(let i=0; i<PalosPoker.length;i++){
    for(let j=0; j<CartasPorPalo.length;j++){
        k++;
        let carta={
            id:k,
            numero:CartasPorPalo[j],
            palo:PalosPoker[i]
        }
        baraja.push(carta);
        if((carta.palo=="Pica"||carta.palo=="Trebol") && (carta.numero%2==0)){
            contadorNegrasPar++;
        }
    }
}
let newBaraja=baraja;

for(y = 0; y<6; y++){
    let pos = getRandomInt(1, baraja.length-1)
        newBaraja=newBaraja.filter((item) => item.id !== pos);
        console.log(pos);
    }
    
    function getRandomInt(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

//console.log(contadorNegrasPar);
console.log(newBaraja);