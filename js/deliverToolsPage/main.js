import { requestFileHTMLDeliver } from "./requestDeliver.js";

const elementsDOM = {
    selectMain: 'main',
}

const main = document.querySelector(elementsDOM.selectMain);

export const sectionDeliverTools = document.createElement('section');
sectionDeliverTools.setAttribute('class', 'container-deliverTools')

export const renderDeliverTools = (() => {
    const firstDivElement = document.createElement('div');
    const secondDivElement = document.createElement('div');
    const createVideoElement = document.createElement('video');

    firstDivElement.setAttribute('class', 'firstDivElement-deliver');
    secondDivElement.setAttribute('class', 'secondDivElement-deliver');
    createVideoElement.setAttribute('id', 'videoCode-deliverTools');

    requestFileHTMLDeliver( createVideoElement, firstDivElement );

    secondDivElement.append( createVideoElement );
    sectionDeliverTools.append( firstDivElement, secondDivElement );
    main.append( sectionDeliverTools );
})();