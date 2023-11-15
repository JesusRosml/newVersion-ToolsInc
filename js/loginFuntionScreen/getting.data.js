export const gettingDataInputs = ( email, password, serverRequest ) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegexm = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if( !email || !password || !emailRegex.test(email) || !passwordRegexm.test(password)) return;
    
    const validatedData = {
        email,
        password,
    }
    
    serverRequest( validatedData );
}