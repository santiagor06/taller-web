export const showWastes=(wastes)=>{
    let total=""
   for (let index = 0; index < wastes.length; index++) {
        let waste=wastes[index];
        total+=`\n------------\nValor: ${waste.value}$\nCategoria: ${waste.category}\nFecha: ${waste.date}`
        
    }
    return total

}