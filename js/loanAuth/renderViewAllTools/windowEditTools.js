import elementsDOM from '../index.js';

const gettingValueTools = () => {
    const selectInput = document.querySelectorAll('.inputsData-Tools');
    const [ inputOne, inputTwo, inputThree, inputFour, inputFive, inputSix, inputSeven ] = selectInput;
    
    return {
        discharge_date: inputOne.value,
        state_tool: inputTwo.value,
        availability_tools: inputThree.value,
        id_tool: inputFour.value,
        type_tool: inputFive.value,
        brand_tool: inputSix.value,
        model_tool: inputSeven.value,
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

            if( item == 'id_tool' ) createInput.setAttribute('disabled', 'disabled');
            if( item == 'id_warehouseman' || item == 'id_registration' ) continue;

            createInput.setAttribute('class', 'inputsData-Tools')
            createInput.value = element[item];
            createForm.appendChild(createInput);
        }
    }
    createForm.appendChild(buttonUpdate);
    container.append(createForm);

    buttonUpdate.addEventListener('click', () => {
        const valueInput = gettingValueTools();

        if( typeof valueInput === 'undefined' ) return;
    
        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'server/updateTools.php', true);
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

export const editInformationTools = ( arrayData ) => {
    const container = document.createElement('div');
    const containerTitle = document.createElement('div');
    let h4 = document.createElement('h4');
    const buttonClose = document.createElement('button');

    container.setAttribute('class', 'container-informationEdit');
    containerTitle.setAttribute('class', 'container-titleEditWorker');
    h4.textContent = 'Editar información de la herramienta';
    buttonClose.textContent = 'Cerrar';

    containerTitle.append( h4, buttonClose );
    container.append( containerTitle );

    createInput( arrayData, container )
    buttonClose.addEventListener('click', () => {
        container.remove();
    })

    elementsDOM.selectMain.append(container);
}