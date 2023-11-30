import { sectionAllTools } from "../changesScreen.js";
import { currentPageTools, renderTableAllTools, totalPages } from "./renderTableTools.js";

let bodyTableTools;
let nextBtn;
let prevBtn;

export const renderViewHTML = async( data ) => {
    await fetch('renderViewHTML.php')
            .then( response => response.text() )
            .then( html => {
                sectionAllTools.innerHTML = html;
                bodyTableTools = document.querySelector('#viewTools-body');
                nextBtn = document.querySelector('#nextButton');
                prevBtn = document.querySelector('#prevButton');

                renderTableAllTools( data, bodyTableTools );

                nextBtn.addEventListener('click', () => {
                    if (currentPageTools.currentPage < totalPages - 1) {
                        currentPageTools.currentPage++;
                        renderTableAllTools( data, bodyTableTools );
                    }
                });

                prevBtn.addEventListener('click', () => {
                    if (currentPageTools.currentPage > 0) {
                        currentPageTools.currentPage--;
                    }
                    renderTableAllTools( data, bodyTableTools );
                })
            })
            .catch( err => console.error('Error al cargar el contenido HTML', err) );
}