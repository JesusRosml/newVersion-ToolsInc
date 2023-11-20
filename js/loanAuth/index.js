import { renderAuthLoan, renderHistoryLoan, renderProcessLoan, renderViewAllTools, renderViewAllWorkers } from "./changesScreen.js";

const elementsDOM = {
    containerOne: '#section-one',
    containerTwo: '#section-two',
    containerThree: '#section-three',
    containerFour: '#section-four',
    containerFive: '#section-five',
}

const sectionAuthLoan = document.querySelector( elementsDOM.containerOne );
const sectionProcessLoan = document.querySelector( elementsDOM.containerTwo );
const sectionHistoryLoan = document.querySelector( elementsDOM.containerThree );
const sectionViewTools = document.querySelector( elementsDOM.containerFour );
const sectionViewWorkers = document.querySelector( elementsDOM.containerFive );

document.addEventListener('DOMContentLoaded', renderAuthLoan);
sectionAuthLoan.addEventListener('click', renderAuthLoan);
sectionProcessLoan.addEventListener('click', renderProcessLoan);
sectionHistoryLoan.addEventListener('click', renderHistoryLoan);
sectionViewTools.addEventListener('click', renderViewAllTools);
sectionViewWorkers.addEventListener('click', renderViewAllWorkers);


export default {
    sectionAuthLoan,
    sectionProcessLoan,
    sectionHistoryLoan,
    sectionViewTools,
    sectionViewWorkers,
}