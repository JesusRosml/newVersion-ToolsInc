import { getFileName } from "./registerModule/triggerFileName.js";

const elementsDOM = {
    inputTools: '#input-tools',
    buttonDownload: '#downloadImage',
    containingImgCode: '#containingImage',
    inputNameTool: '#input-nameTool',
}

const selectButtonDownload = document.querySelector(elementsDOM.buttonDownload);
const selectInputTool = document.querySelector(elementsDOM.inputTools);
const selectImgCode = document.querySelector( elementsDOM.containingImgCode );
const selectInputNameTool = document.querySelector( elementsDOM.inputNameTool );

const addCodeImage = ( elementInputID, elementImg, elementInputName ) => {
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

selectButtonDownload.addEventListener('click', () => addCodeImage( selectInputTool, selectImgCode, selectInputNameTool ));