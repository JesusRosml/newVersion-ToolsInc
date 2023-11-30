import { scanCodeCamera } from './cameraScanCode.js';
import cameraScanCode from './cameraScanCode.js';
import { clearElementsDOM } from './cleanDOM.js';
import { sendDataServer } from './gettingData.js';

let elementBodyTable;
let spanWarehouseman;
let optionNameWorker;
let textareaObservation;
let confirmAuthButton;
let clearFieldsDOM;
let optionFirstElement;

export const requestFileHTML = ( createVideo, createFirstDiv ) => {
    fetch('loanDataUsers.php')
        .then( response => response.text() )
        .then( html => {
            createFirstDiv.innerHTML = html;
            
            elementBodyTable = document.querySelector('#bodyTable');
            spanWarehouseman = document.querySelector('#nameWarehouseman');
            optionNameWorker = document.querySelector('#workerName');
            textareaObservation = document.querySelector('#observationAuth');
            confirmAuthButton = document.querySelector('#confirmAuth');
            clearFieldsDOM = document.querySelector('#clearFields');
            optionFirstElement = document.querySelector('#one-elements');
            
            confirmAuthButton.addEventListener('click', () =>  sendDataServer( cameraScanCode.codeIDs, spanWarehouseman, optionNameWorker, textareaObservation ));
            clearFieldsDOM.addEventListener('click', () => clearElementsDOM( optionFirstElement, elementBodyTable, textareaObservation ))

            scanCodeCamera( createVideo, elementBodyTable );
        })
        .catch( err => console.error('Error al cargar el contenido HTML', err) );
}

export { elementBodyTable, spanWarehouseman, optionNameWorker, textareaObservation, confirmAuthButton, clearFieldsDOM, optionFirstElement };