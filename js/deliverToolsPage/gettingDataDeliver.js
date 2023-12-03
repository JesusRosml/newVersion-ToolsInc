import { windowMessageScan } from "../loanAuth/messageAlert.js";

export const valueDataDeliver = ( arrayIDs, lender, worker, observation ) => {
    if( arrayIDs.length === 0 ) return;
    if( !worker.value ) return;

    return {
        arrayIDs, //Ids de las herramientas
        lender: lender.textContent,
        worker: worker.value,
        observation: observation.value,
    }
}

export const sendDataDeliver = ( arrayIDs, lender, worker, observation ) => {
    const dataDeliver = valueDataDeliver( arrayIDs, lender, worker, observation );

    if( typeof dataDeliver === 'undefined' ) return;
    
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'server/deliverToolsFinish.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    const dataJSON = JSON.stringify(dataDeliver);

    xhr.onload = ()=> {
        if(xhr.status === 200) {
            try {
                let responseObject = JSON.parse(xhr.responseText);
                alert( responseObject.data )
                console.log(responseObject);
            } catch (error) {
                console.error('Error parsing JSON:', error);
                console.log('Response:', xhr.responseText);
            }
        } else {
            console.log(xhr.responseText);
            console.log("Error al enviar la solicitud");
        }
    }

    xhr.send(dataJSON);
    window.location.reload(true);
}