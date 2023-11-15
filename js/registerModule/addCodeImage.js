import { getFileName } from '../registerModule/triggerFileName.js'

export const addCodeImage = ( elementInputID, elementImg, elementInputName ) => {
    console.log('Si funciona');
    if( !elementInputID.value) return;
    elementImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${elementInputID.value}`;
    
    elementImg.addEventListener('load', ()=> {
        let pathImg = elementImg.getAttribute('src');
        let fileName = getFileName( elementInputName );

        fetch(pathImg)
        .then( response => response.blob())
        .then(blob => saveAs( blob, fileName + '.png' ));
    });

    let pathImg = elementImg.getAttribute('src');
    let fileName = getFileName( elementInputName );

    fetch(pathImg)
    .then( response => response.blob())
    .then(blob => saveAs( blob, fileName + '.png' ));
}