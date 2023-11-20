import elemenstDOM from './index.js'

export const renderAuthLoan = () => {
    //Creando elementos HTML
   const createSection = document.createElement('section');
   const createFirstDiv = document.createElement('div');
   const createSecondDiv = document.createElement('div');

   //Elementos del primer div element
   const createParagraph = document.createElement('p');
   const createSpan = document.createElement('span');
   const createSelect = document.createElement('select');
   const createFirstOption = document.createElement('option');
   const createSecondOption = document.createElement('option');
   const createThreeOption = document.createElement('option');

   createSpan.textContent = 'Jesus Rosml';
   createFirstOption.textContent = 'Elija la persona que esta realizando el prestamo';
   createSecondOption.textContent = 'Angel Ricardo';
   createThreeOption.textContent = 'Addan Yerena';

   //Agreando atributos a los elementos que fueron creados anteriormente
   createSection.setAttribute('class', 'container-AuthLoan');
   createFirstDiv.setAttribute('class', 'container-firstDiv');
   createSecondDiv.setAttribute('class', 'container-secondDiv');


    //Añadiendo los elementos hijos dentro de los contenedores padre
   document.body.append( createSection );
   createSection.append( createFirstDiv, createSecondDiv )
   createFirstDiv.append(createSpan, createSelect );
   createSelect.append( createFirstOption, createSecondOption, createThreeOption );
}

export const renderProcessLoan = () => {
    console.log('renderSectionProcessLoan');
    console.log(elemenstDOM.sectionProcessLoan);
}

export const renderHistoryLoan = () => {
    console.log('renderSectionHistoryLoan');
    console.log(elemenstDOM.sectionHistoryLoan);
}

export const renderViewAllTools = () => {
    console.log('renderViewAllTools');
    console.log(elemenstDOM.sectionViewTools);
}

export const renderViewAllWorkers = () => {
    console.log('renderViewAllWorkers');
    console.log(elemenstDOM.sectionViewWorkers);
}