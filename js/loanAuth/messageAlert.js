export const windowMessageScan = ( message ) => {
    const createDiv = document.createElement('div');
    const createParagraph = document.createElement('p');
    const createSecondDiv = document.createElement('div');
    const createAcceptBtn = document.createElement('button');

    createDiv.setAttribute('class', 'container-message');
    createParagraph.textContent = message;
    createSecondDiv.setAttribute('class', 'container-accept');
    createAcceptBtn.textContent = 'Aceptar';

    createAcceptBtn.addEventListener('click', () => {
        createDiv.style.display = 'none';
    });

    document.body.append(createDiv);
    createDiv.append( createParagraph, createSecondDiv );
    createSecondDiv.append( createAcceptBtn )
}