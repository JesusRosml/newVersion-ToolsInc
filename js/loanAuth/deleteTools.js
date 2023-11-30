import cameraScanCode from "./cameraScanCode.js";
import { renderTableInformation } from "./renderTable.js";
import { elementBodyTable } from "./requestFileHTML.js";

export const buttonDeleteTools = ( btn ) => {
    const elementFather = btn.parentNode.parentNode; 
    const valueElementID = elementFather.getAttribute('id');
    const elementDeleteIDX = cameraScanCode.codeIDs.indexOf( valueElementID );

    if( elementDeleteIDX !== -1 ) {
        cameraScanCode.codeIDs.splice( elementDeleteIDX, 1 );
        cameraScanCode.typeTools.splice( elementDeleteIDX, 1 );
        cameraScanCode.brandTools.splice( elementDeleteIDX, 1 );
        cameraScanCode.modelTools.splice( elementDeleteIDX, 1 );
        cameraScanCode.stateTools.splice( elementDeleteIDX, 1 );
    }
    
    renderTableInformation( elementBodyTable, cameraScanCode.codeIDs, cameraScanCode.typeTools, cameraScanCode.brandTools, cameraScanCode.modelTools, cameraScanCode.stateTools );
}       