import { renderAuthLoan, renderProcessSection, renderViewAllTools, renderViewAllWorkers } from "./changesScreen.js";

const elementsDOM = {
    containerOne: '#section-one',
    containerTwo: '#section-two',
    containerFour: '#section-four',
    containerFive: '#section-five',

}

const sectionAuthLoan = document.querySelector( elementsDOM.containerOne );
const sectionProcess = document.querySelector( elementsDOM.containerTwo ); 
const sectionViewTools = document.querySelector( elementsDOM.containerFour );
const sectionViewWorkers = document.querySelector( elementsDOM.containerFive );
const selectMain = document.querySelector('main');

document.addEventListener('DOMContentLoaded', renderAuthLoan);
sectionAuthLoan.addEventListener('click', renderAuthLoan );

sectionProcess.addEventListener('click', renderProcessSection );
sectionViewTools.addEventListener('click', renderViewAllTools);
sectionViewWorkers.addEventListener('click', renderViewAllWorkers);

export default {
    sectionAuthLoan,
    sectionViewTools,
    sectionViewWorkers,
    selectMain,
}