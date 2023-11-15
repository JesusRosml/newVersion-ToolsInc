export const serverRequestData = ( dataSent ) => {
    const validData = dataSent;

    if(typeof validData == 'undefined') return;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', './php/undefined', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    const dataJSON = JSON.stringify(validData);

    xhr.onload = ()=> {
        if(xhr.status === 200) {
            let responseObject = JSON.parse(xhr.responseText);
            console.log(responseObject);
        } else {
            console.log(xhr.responseText);
            console.log("Error al enviar la solicitud");
        }
    }

    xhr.send(dataJSON);
}