const users=[
    {
        email:"santiago@email.com",
        password:"123"
    },
    {
        email:"diana@email.com",
        password:"123456"
    },
]
export const authUser=()=>{
    let flag=true;
    while (flag) {
        let email=prompt("Ingrese su email")
        let password=prompt("Ingrese su contraseña")
        for (let index = 0; index < users.length; index++) {
            if(email==users[index].email && password==users[index].password ){
                alert("Bienvenido")
                return true}
            
        }
        alert("Credenciales incorrectas")
    }
}