export const renderElementsHTML = (container) => {
    if (container.hasChildNodes()) return;

    const createElement = (tag, text, attributes = {}) => {
        const element = document.createElement(tag);
        if (text) element.textContent = text;
        Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
        return element;
    };

    const appendChildren = (parent, children) => {
        children.forEach(child => parent.append(child));
    };

    const createTh = (text) => createElement('th', text);

    const h1 = createElement('h1', 'Prestamo de herramientas en procesos');
    const formSearch = createElement('form');
    const inputSearch = createElement('input', null, { placeholder: 'Ingrese el numero de folio del prestamo' });
    const buttonSearch = createElement('button', 'Realizar busqueda', { type: 'button' });
    const h2 = createElement('h2', 'Prestamos en proceso');
    const table = createElement('table', null, { class: 'table-processSection' });
    const thead = createElement('thead');
    const tr1 = createElement('tr');
    const ths = ['Modelo', 'Marca', 'Fecha', 'Data', 'Data', 'Data', 'Data'].map(createTh);
    const tbody = createElement('tbody', null, { id: 'tbody-processSection' });

    appendChildren(tr1, ths);
    appendChildren(thead, [tr1]);
    appendChildren(table, [thead]);
    appendChildren(formSearch, [inputSearch, buttonSearch]);
    appendChildren(container, [h1, formSearch, h2, table]);
};