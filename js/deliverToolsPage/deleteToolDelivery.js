import cameraDeliver from "./cameraDeliver.js";
import { renderTableDelivery } from "./renderTableDeliver.js";

export const buttonDeleteDelivery = ( btn, elementDOM ) => {
    const elementFather = btn.parentNode.parentNode; 
    const valueElementID = elementFather.getAttribute('id');
    const elementDeleteIDX = cameraDeliver.deliverCodeIDs.indexOf( valueElementID );

    if( elementDeleteIDX !== -1 ) {
        cameraDeliver.deliverCodeIDs.splice( elementDeleteIDX, 1 );
        cameraDeliver.deliverTypeTools.splice( elementDeleteIDX, 1 );
        cameraDeliver.deliverBrandTools.splice( elementDeleteIDX, 1 );
        cameraDeliver.deliverModelTools.splice( elementDeleteIDX, 1 );
        cameraDeliver.deliverStateTools.splice( elementDeleteIDX, 1 );
    }
    
    renderTableDelivery( elementDOM,  cameraDeliver.deliverCodeIDs, cameraDeliver.deliverTypeTools, cameraDeliver.deliverBrandTools, cameraDeliver.deliverModelTools, cameraDeliver.deliverStateTools );
}       