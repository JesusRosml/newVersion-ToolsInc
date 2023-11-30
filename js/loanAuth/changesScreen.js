import elemenstDOM from './index.js'
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

const displayNoneElements = ( elementsArray, elementVisible ) => {
    elementsArray.forEach(element => {
        if( element != elementVisible ) element.style.display = 'none';
        elementVisible.style.display = 'flex';
    });
}

export const renderAuthLoan = () => {
    const existsFirstDiv = document.querySelector('.container-firstDiv');
    displayNoneElements([sectionAllTools, sectionAllWorkers], sectionAuth);

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

export const renderProcessLoan = () => {
    console.log('renderSectionProcessLoan');
    console.log(elemenstDOM.sectionProcessLoan);
}

export const renderHistoryLoan = () => {
    console.log('renderSectionHistoryLoan');
    console.log(elemenstDOM.sectionHistoryLoan);
}

export const renderViewAllTools = async() => {
    const jsonAllTools = await requestAllTools(); //retorna un arreglo con objetos
    renderViewHTML( jsonAllTools );

    displayNoneElements([sectionAuth, sectionAllWorkers], sectionAllTools);
    
    elemenstDOM.selectMain.append( sectionAllTools );
}

export const renderViewAllWorkers = async() => {
    const jsonAllWorkers = await requestAllWorkers(); //retorna un arreglo con objetos

    renderViewWorkerHTML( jsonAllWorkers );
    displayNoneElements([sectionAuth, sectionAllTools], sectionAllWorkers )
    
    elemenstDOM.selectMain.append( sectionAllWorkers );
}