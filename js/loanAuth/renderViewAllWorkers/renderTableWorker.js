import { editInformationWorker } from "./windowWorkerEdit.js";

export let currentPageWorker = { currentPage: 0 };
export let rowsPerPageWorker = { perPage: 5 };
export let totalPagesWorker;

const editDataWorker = ( button, workerArray ) => {
    const elementID = button.parentNode;
    const workerEditID = elementID.getAttribute('id');
    let index = workerArray.findIndex( element => element.id_worker == workerEditID );
    let newArray = [];

    newArray.push( workerArray[index] );
    editInformationWorker( newArray );
}

export const renderTableWorker = ( workerArray, bodyTableWorker ) => {
    let tr;

    totalPagesWorker = Math.ceil(workerArray.length / rowsPerPageWorker.perPage);

    let start = currentPageWorker.currentPage * rowsPerPageWorker.perPage;
    let end = start + rowsPerPageWorker.perPage;
    let pageData = workerArray.slice(start, end);

    bodyTableWorker.innerHTML = '';

    for( let row of pageData ) {
        tr = document.createElement('tr');

        const createButtonEdit = document.createElement('button');
        const btnTd = document.createElement('td');

        createButtonEdit.innerText = 'Editar';
        btnTd.append(createButtonEdit);

        for( let column in row ) {
            if( column == 'state' ) {
                continue;
            };

            if( column == 'id_worker' ) {
                tr.setAttribute('id', row[column]);
            }
         
            let td = document.createElement('td');
            td.textContent = row[column];
            tr.appendChild(td);
        }
        
        tr.appendChild(btnTd);
        bodyTableWorker.appendChild(tr);

        btnTd.addEventListener('click', () => editDataWorker( btnTd, workerArray ));
    }
}