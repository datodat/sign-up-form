export const validateFirstName = (firstName) => {
  if(firstName === ''){
    return false;
  }else{
    return true;
  }
}

export const validateLastName = (lastName) => {
  if(lastName === ''){
    return false;
  }else{
    return true;
  }
}

export const validateEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(email === ''){
    return false;
  }else if(email.match(regex)){
    return true;
  }else{
    return false;
  }
}

export const validatePassword = (password) => {
  if(password === ''){
    return false;
  }else{
    return true;
  }
}