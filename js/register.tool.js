import { addCodeImage } from "./registerModule/addCodeImage.js";

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

selectButtonDownload.addEventListener('click', () => addCodeImage( selectInputTool, selectImgCode, selectInputNameTool ));