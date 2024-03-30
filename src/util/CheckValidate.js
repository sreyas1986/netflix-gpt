export const CheckValidate = (email,password) => {

    const isValidemail = /^(?:[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassWord= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%^&?]).{8,}$/.test(password);

    if(!isValidemail)    return  "Not a valid email";
    if(!isValidPassWord) return  "Not a valid password";
    
    return null;
    
} ;
