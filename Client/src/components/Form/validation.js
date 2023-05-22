const validation = (userData) => {

  // Username
  let errors = {};

  if(!userData.username) errors.username = "Por favor completa este campo";

  if (userData.username.length > 35) errors.username = "Debe tener menos de 35 caracteres";

  if(!/\S+@\S+\.\S+/.test(userData.username)) errors.username = "Debe ingresar un email valido";

  // Password

  if(userData.password.length < 6 || userData.password.length > 10) errors.password = "Debe tener entre 6 y 10 caracteres";

  if (!userData.password.match(/\d/)) errors.password =  "Debe tener al menos un numero";

  return errors;

}

export default validation;