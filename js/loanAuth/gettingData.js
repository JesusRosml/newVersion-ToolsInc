export const gettingDataAuth = ( arrayIDs, lender, worker, observation, ) => {
    if( arrayIDs.length === 0 ) return;
    if( !worker.value ) return;

    return {
        arrayIDs, //Ids de las herramientas
        lender: lender.textContent,
        worker: worker.value,
        observation: observation.value,
    }
}

export const sendDataServer = ( arrayIDs, lender, worker, observation ) => {
    const objectData = gettingDataAuth( arrayIDs, lender, worker, observation );
    
    if( typeof objectData === 'undefined' ) return;
    
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'server/getData2.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    const dataJSON = JSON.stringify(objectData);
    console.log(dataJSON);

    xhr.onload = ()=> {
        if(xhr.status === 200) {
            try {
                let responseObject = JSON.parse(xhr.responseText);
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
}