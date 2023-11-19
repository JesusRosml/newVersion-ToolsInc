export const viewPasswordInput = ( elementPassword, elementChecked ) => {
    return elementChecked.checked ? elementPassword.type = 'text' : elementPassword.type = 'password';
}