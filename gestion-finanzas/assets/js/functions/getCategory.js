export const getCategory=()=>{
    let flag =true;
    const category=["Comida","Ocio","Transporte"]

    while (flag) {
        let categoryIndex=+prompt("Seleccione una categoria\n1.Comida\n2.Ocio\n3.Transporte")
        if(categoryIndex>0 && categoryIndex<=3)return category[categoryIndex-1]
        else alert("Seleccione una opcion valida")
        
    }
}