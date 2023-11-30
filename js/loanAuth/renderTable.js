import { buttonDeleteTools } from "./deleteTools.js";

export const renderTableInformation = ( elementDOM, arrayID, type, brand, model, state ) => {
    elementDOM.textContent = '';

    const createTableCell = ( text ) => {
        const td = document.createElement('td');
        td.textContent = text;
        td.setAttribute('class', 'element-table');

        return td;
    }

    arrayID.forEach( (item, idx) => {
        const createTableRow = document.createElement('tr');
        createTableRow.setAttribute('id', `${item}`);
        const createButton = document.createElement('button');
        createButton.setAttribute('id', 'btn-delete');
        createButton.textContent = 'Eliminar';
        createButton.addEventListener('click', () => buttonDeleteTools( createButton ));

        const typeCell = createTableCell(type[idx]);
        const brandCell = createTableCell(brand[idx]);
        const modelCell = createTableCell(model[idx]);
        const stateCell = createTableCell(state[idx]);

        const createAccionTD = document.createElement('td');
        createAccionTD.setAttribute('class', 'element-table');
        createAccionTD.setAttribute('id', `${item}`);
        createAccionTD.append(createButton);

        createTableRow.append( typeCell, brandCell, modelCell, stateCell, createAccionTD );
        elementDOM.appendChild(createTableRow);
    });
}