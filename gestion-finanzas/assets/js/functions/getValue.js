export const getValue=()=>{
    let flag=true
    while (flag) {
        let value=+prompt("Ingrese el valor del gasto")
        if(value>0)return value
        else alert("El valor debe ser mayor a 0")
    }
}