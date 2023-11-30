import { sectionAllWorkers } from "../changesScreen.js";
import { currentPageWorker, renderTableWorker, totalPagesWorker } from "./renderTableWorker.js";

let bodyTableWorker;
let nextBtnWorker;
let prevBtnWorker;

export const renderViewWorkerHTML = async( data ) => {
    await fetch('renderViewWorker.php')
            .then( response => response.text() )
            .then( html => {
                sectionAllWorkers.innerHTML = html
                bodyTableWorker = document.querySelector('#viewWorker-body');
                nextBtnWorker = document.querySelector('#nextButtonWork');
                prevBtnWorker = document.querySelector('#prevButtonWork');

                renderTableWorker( data, bodyTableWorker );

                nextBtnWorker.addEventListener('click', () => {
                    if (currentPageWorker.currentPage < totalPagesWorker - 1) {
                        currentPageWorker.currentPage++;
                        renderTableWorker( data, bodyTableWorker );
                    }
                });

                prevBtnWorker.addEventListener('click', () => {
                    if (currentPageWorker.currentPage > 0) {
                        currentPageWorker.currentPage--;
                    }
                    renderTableWorker( data, bodyTableWorker );
                })
            })
            .catch( err => console.error('Error al cargar el contenido HTML', err) );
}