import { getWaste } from "./functions/getWaste.js";
import { showWastes } from "./functions/showWastes.js";

const topeMax=+prompt("Ingrese el tope maximo de sus gastos este mes");
const topPercent=topeMax*0.9;
let total=0;
let flag=true;
const wasteMonth=[]
while (flag) {
    let response=+prompt("Seleccione una opcion:\n1.Añadir gasto\n2.Salir")
    if(response==1){
        const waste=getWaste();
        wasteMonth.push(waste)
        total=total+waste.value;
        if(total>=topPercent){
            alert("Ha superado el tope de gastos")
            alert(`Total gastos: ${total}\nRestante: ${topeMax-total}\n${showWastes(wasteMonth)}`)
            flag=false
        }
    }else if(response==2){flag=false
        alert(`Total gastos: ${total}$ \nRestante: ${topeMax-total}$ \n${showWastes(wasteMonth)}`)}
}



