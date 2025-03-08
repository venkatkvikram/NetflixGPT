export const validateCredentials = (email, password) => {
    const isEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  
    if (!isEmail) return "Invalid Email";
    if (!isPassword) return "Invalid Password";
  
    return null;
  };
  