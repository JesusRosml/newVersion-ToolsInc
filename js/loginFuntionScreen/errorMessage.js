export const errorMessageInputs = () => {
    const createElementDiv = document.createElement('div');
    const createElementParagraph = document.createElement('p');
    const message = 'Rellene todos los campos e ingrese credenciales validas.';

    createElementDiv.setAttribute('class', 'container-message');
    createElementDiv.append(createElementParagraph);
    createElementParagraph.textContent = message;

    document.body.append(createElementDiv);

    setTimeout(()=> {
        createElementDiv.style.display = 'none';
    }, 5000);
}