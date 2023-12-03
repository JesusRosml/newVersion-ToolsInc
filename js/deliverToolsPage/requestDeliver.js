import { scanCodeDeliver } from "./cameraDeliver.js";
import { sendDataDeliver } from "./gettingDataDeliver.js";
import cameraDeliver from "./cameraDeliver.js";

export const requestFileHTMLDeliver = ( createVideo, createFirstDiv ) => {
    fetch('renderDeliverTools.php')
        .then( response => response.text() )
        .then( html => {
            createFirstDiv.innerHTML = html;
            const bodyTable = document.querySelector('#deliverTools-bodyTable');
            const confirmData = document.querySelector('#deliverTools-confirmAuth');
            const lender = document.querySelector('#deliverTools-nameWarehouseman');
            const worker = document.querySelector('#deliverTools-workerName');
            const observation = document.querySelector('#observationDeliverTools');

            scanCodeDeliver( createVideo, bodyTable )
            confirmData.addEventListener('click', () => {
                sendDataDeliver( cameraDeliver.deliverCodeIDs, lender, worker, observation );   
            })
            
        })
        .catch( err => console.error('Error al cargar el contenido HTML', err) );
}