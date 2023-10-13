import { authUser } from "./functions/authUser.js";
const task=[]

const addTask=(newTask)=>{
    task.push(newTask)
}
 const showTask=()=>{
    task.forEach(element => {
        console.log(element)
    });
 }
let flag=true;
while (flag) {
    let response=+prompt("Seleccione una opcion:\n1.Iniciar Sesion\n2.Salir")
    if(response==1){
        authUser();
        let flagTwo=true
        while (flagTwo) {
            let responseTwo=+prompt("Seleccione una opcion:\n1.Añadir tareas\n2.Mostrar Tareas\n3.Salir")
            if (responseTwo==1) {
                let description=prompt("Ingrese la descripcion de la tarea")
                addTask(description)
            }
            else if(responseTwo==2)showTask()
            else if(responseTwo==3)flagTwo=false
        }


    }else if(response==2)flag=false;
}