import { validateDate } from "./validateDate.js";

export const getDate=()=>{
    let flag=true;
    while (flag) {
        let date=prompt("Ingrese una fecha (YYYMMDD)")
        if(validateDate(date))return date
        else alert("Ingrese una fecha valida")
    }
}