import { getCategory } from "./getCategory.js";
import { getDate } from "./getDate.js"
import { getValue } from "./getValue.js";

export const getWaste=()=>{
    const date=getDate();
    const value=getValue();
    const category=getCategory();
    return{
        date,
        value,
        category
    }
    

}