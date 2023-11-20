import { disableWindowSection, enableWindowSection} from "./pop-up.window.js";

const elementsDOM = {
    sectionWarehouseman: '.container-warehouseman',
    buttonEnableSection: '#registerStorer',
    buttonCloseSection: '#closeWarehouseman',
}

const containerWarehouseman = document.querySelector( elementsDOM.sectionWarehouseman );
const buttonEnableSection = document.querySelector( elementsDOM.buttonEnableSection );
const buttonCloseSection = document.querySelector( elementsDOM.buttonCloseSection );

buttonEnableSection.addEventListener('click', () => enableWindowSection(containerWarehouseman));
buttonCloseSection.addEventListener('click', () => disableWindowSection( containerWarehouseman ));