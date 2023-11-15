import { gettingDataInputs } from "./getting.data.js";
import { serverRequestData } from "./serverCommunication.js";

const elementsDOM = {
    emailUser: '#email',
    passwordUser: '#password',
    viewPassword: '#viewPassowrd',
    buttonValidate: '#validateButton',
}

const selectEmail = document.querySelector(elementsDOM.emailUser);
const selectPassword = document.querySelector(elementsDOM.passwordUser);
const selectViewPassword = document.querySelector(elementsDOM.viewPassword);
const selectButtonValidate = document.querySelector(elementsDOM.buttonValidate);

selectButtonValidate.addEventListener('click', ()=> {
    gettingDataInputs( selectEmail.value, selectPassword.value, serverRequestData );
});