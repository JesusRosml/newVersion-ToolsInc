import { editInformationTools } from "./windowEditTools.js";

export let currentPageTools = { currentPage: 0 };
export let rowsPerPageTools = { perPage: 5 };
export let totalPages;

const editDataTools = ( button, workerArray ) => {
    const elementID = button.parentNode;
    const workerEditID = elementID.getAttribute('id');
    let index = workerArray.findIndex( element => element.id_tool == workerEditID );
    let newArray = [];

    newArray.push( workerArray[index] );
    console.log(newArray);
    editInformationTools( newArray );
}

export const renderTableAllTools = ( toolsArray, bodyTableTools ) => {
    let tr;

    totalPages = Math.ceil(toolsArray.length / rowsPerPageTools.perPage);

    let start = currentPageTools.currentPage * rowsPerPageTools.perPage;
    let end = start + rowsPerPageTools.perPage;
    let pageData = toolsArray.slice(start, end);
    
    bodyTableTools.innerHTML = '';

    for( let row of pageData ) {
        tr = document.createElement('tr');

        const createButtonEdit = document.createElement('button');
        const btnTd = document.createElement('td');

        createButtonEdit.innerText = 'Editar';
        createButtonEdit.setAttribute('id', 'tool-btnEdit');
        btnTd.append(createButtonEdit);

        for( let column in row ) {
            if( column == 'id_tool' ) {
                btnTd.setAttribute('id', row[column]);
            }

            if( column == 'id_registration' || column == 'id_warehouseman') {
                continue;
            };
         
            let td = document.createElement('td');
            td.textContent = row[column];
            tr.appendChild(td);
        }
        
        tr.appendChild(btnTd);
        bodyTableTools.appendChild(tr);
        
        createButtonEdit.addEventListener('click', () => {
            editDataTools( createButtonEdit, toolsArray );
        })
    }
}