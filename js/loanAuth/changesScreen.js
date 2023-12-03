import elemenstDOM from './index.js'
import { renderElementsHTML } from './renderProcessSection/createElementsHTML.js';
import { requestAllTools, requestAllWorkers } from './renderViewAllTools/requestAllTools.js';
import { renderViewHTML } from './renderViewAllTools/requestToolsHTML.js';
import { renderViewWorkerHTML } from './renderViewAllWorkers/requestWorkersHTML.js';
import { requestFileHTML } from './requestFileHTML.js';

const sectionAuth = document.createElement('section');
sectionAuth.setAttribute('class', 'container-AuthLoan');

export const sectionAllTools = document.createElement('section');
sectionAllTools.setAttribute('class', 'container-AllTools');

export const sectionAllWorkers = document.createElement('section');
sectionAllWorkers.setAttribute('class', 'container-AllWorkers');

export const sectionProcessTools = document.createElement( 'section' );
sectionProcessTools.setAttribute('class', 'container-processTools');

const displayNoneElements = ( elementsArray, elementVisible ) => {
    elementsArray.forEach(element => {
        if( element != elementVisible ) element.style.display = 'none';
        elementVisible.style.display = 'flex';
    });
}

export const renderAuthLoan = () => {
    const existsFirstDiv = document.querySelector('.container-firstDiv');
    displayNoneElements([sectionAllTools, sectionAllWorkers, sectionProcessTools ], sectionAuth);

    if( existsFirstDiv ) return;

    const createFirstDiv = document.createElement('div');
    const createSecondDiv = document.createElement('div');
    const createVideo = document.createElement('video');

    createFirstDiv.setAttribute('class', 'container-firstDiv');
    createSecondDiv.setAttribute('class', 'container-secondDiv');
    createVideo.setAttribute('id', 'video-scanCode');

    requestFileHTML( createVideo, createFirstDiv );

    elemenstDOM.selectMain.append( sectionAuth );
    createSecondDiv.append( createVideo );
    sectionAuth.append( createFirstDiv, createSecondDiv );
}

export const renderProcessSection = () => {
    renderElementsHTML( sectionProcessTools );

    displayNoneElements([sectionAuth, sectionAllWorkers, sectionAllTools], sectionProcessTools);
    elemenstDOM.selectMain.append( sectionProcessTools );
}

export const renderViewAllTools = async() => {
    const jsonAllTools = await requestAllTools(); //retorna un arreglo con objetos
    renderViewHTML( jsonAllTools );

    displayNoneElements([sectionAuth, sectionAllWorkers, sectionProcessTools], sectionAllTools);
    
    elemenstDOM.selectMain.append( sectionAllTools );
}

export const renderViewAllWorkers = async() => {
    const jsonAllWorkers = await requestAllWorkers(); //retorna un arreglo con objetos

    renderViewWorkerHTML( jsonAllWorkers );
    displayNoneElements([sectionAuth, sectionAllTools, sectionProcessTools ], sectionAllWorkers )
    
    elemenstDOM.selectMain.append( sectionAllWorkers );
}