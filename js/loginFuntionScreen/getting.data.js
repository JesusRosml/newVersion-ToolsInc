import { errorMessageInputs } from "./errorMessage.js";

export const gettingDataInputs = ( elementEmail, elementPassword, serverRequest ) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegexm = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const email = elementEmail.value;
    const password = elementPassword.value;
    console.log(email, password);
    
    if( !email || !password || !emailRegex.test(email) || !passwordRegexm.test(password)) {
        errorMessageInputs();
        return
    };
    
    const validatedData = {
        email,
        password,
    }
    
    serverRequest( validatedData );
    
    elementEmail.value = '';
    elementPassword.value = '';
}