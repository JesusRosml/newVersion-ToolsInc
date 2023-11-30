import elementsDOM from '../index.js'

const gettingValueWorker = () => {
    const selectInput = document.querySelectorAll('.inputsData-Workers');
    
    console.log(selectInput)

    const [ inputOne, inputTwo, inputThree, inputFour, inputFive, inputSix, inputSeven ] = selectInput;
    
    return {
        worker_id: inputOne.value,
        name_worker: inputTwo.value,
        phone_worker: inputThree.value,
        email_worker: inputFour.value,
        discharge_date: inputFive.value,
        area_worker: inputSix.value,
        state_worker: inputSeven.value,
    }
}

const createInput = ( arr, container ) => {
    const createForm = document.createElement('form');
    const buttonUpdate = document.createElement('button');
    buttonUpdate.textContent = 'Actualizar datos';
    buttonUpdate.setAttribute('type', 'button');

    for( let element of arr ) {
        for( let item in element ) {
            let createInput = document.createElement('input');

            if( element[item] === '' ) element[item] = 'Activo';
            if( item == 'id_worker' ) createInput.setAttribute('disabled', 'disabled');

            createInput.setAttribute('class', 'inputsData-Workers')
            createInput.value = element[item];
            createForm.appendChild(createInput);
        }
    }
    createForm.appendChild(buttonUpdate);
    container.append(createForm);

    buttonUpdate.addEventListener('click', () => {
        const valueInput = gettingValueWorker();
        console.log(valueInput)
        if( typeof valueInput === 'undefined' ) return;
    
        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'server/updateWorker.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        const dataJSON = JSON.stringify(valueInput);

        xhr.onload = ()=> {
            if(xhr.status === 200) {
                try {
                    let responseObject = JSON.parse(xhr.responseText);
                    console.log(responseObject);
                    window.location.reload();
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
    })
}

export const editInformationWorker = ( arrayData ) => {
    const container = document.createElement('div');
    const containerTitle = document.createElement('div');
    let h4 = document.createElement('h4');
    const buttonClose = document.createElement('button');

    container.setAttribute('class', 'container-informationEdit');
    containerTitle.setAttribute('class', 'container-titleEditWorker');
    h4.textContent = 'Editar información del trabajador';
    buttonClose.textContent = 'Cerrar';

    containerTitle.append( h4, buttonClose );
    container.append( containerTitle );

    createInput( arrayData, container )

    buttonClose.addEventListener('click', () => {
        container.remove();
    })

    elementsDOM.selectMain.append(container);
}