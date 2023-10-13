
    
const fechaRegex = /^\d{4}\/\d{2}\/\d{2}$/;


export const validateDate=(fecha)=> {
  if (fechaRegex.test(fecha)) {
    const partes = fecha.split('/');
    const año = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const dia = parseInt(partes[2], 10);

    if (año >= 1000 && año <= 9999 && mes >= 1 && mes <= 12 && dia >= 1 && dia <= 31) {
      return true; 
    }
  }
  return false; 
}


