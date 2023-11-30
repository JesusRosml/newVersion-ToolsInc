import cameraScanCode from "./cameraScanCode.js"

export const clearElementsDOM = ( worker, bodyTable, observation ) => {
    //Restableciendo los arrays a su estado actual
    cameraScanCode.codeIDs.length = 0;
    cameraScanCode.typeTools.length = 0;
    cameraScanCode.brandTools.length = 0;
    cameraScanCode.modelTools.length = 0;
    cameraScanCode.stateTools.length = 0;

    worker.removeAttribute('selected');
    worker.setAttribute('selected', 'selected');
    bodyTable.textContent = '';
    observation.value = '';

}