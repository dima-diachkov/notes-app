import { createActionButton, createActionHandlers, createTableHeaderRow, createTableRowWithButtons } from './tableUtils.js';


export function renderNotesTable(notes) {
    const activeNotesTable = document.querySelector('#activeNotesTable');
    activeNotesTable.innerHTML = '';

    const otherHeaders = ['Time of Creation', 'Note Content', 'Note Category', 'Dates'];
    createTableHeaderRow(activeNotesTable, otherHeaders, 3);

    notes.forEach(note => {
        if (!note.archived) {
            const actionHandlers = createActionHandlers(notes, note, [renderNotesTable, renderArchivedNotesTable, renderSummaryTable]);

            const editButton = createActionButton('Edit', actionHandlers.onEdit);
            const removeButton = createActionButton('Remove', actionHandlers.onRemove);
            const archiveButton = createActionButton('Archive', actionHandlers.onArchive);

            createTableRowWithButtons(activeNotesTable, note, [editButton, removeButton, archiveButton]);
        }
    });
}

export function renderArchivedNotesTable(notes) {
    const archivedNotesTable = document.querySelector('#archivedNotesTable');
    archivedNotesTable.innerHTML = '';

    const otherHeaders = ['Time of Creation', 'Note Content', 'Note Category', 'Dates'];
    createTableHeaderRow(archivedNotesTable, otherHeaders, 3);

    notes.forEach(note => {
        if (note.archived) {
            const actionHandlers = createActionHandlers(notes, note, [renderNotesTable, renderArchivedNotesTable, renderSummaryTable]);

            const editButton = createActionButton('Edit', actionHandlers.onEdit);
            const removeButton = createActionButton('Remove', actionHandlers.onRemove);
            const unarchiveButton = createActionButton('Unarchive', actionHandlers.onUnarchive);

            createTableRowWithButtons(archivedNotesTable, note, [editButton, removeButton, unarchiveButton]);
        }
    });
}

export function renderSummaryTable(notes) {
    const summaryTable = document.querySelector('#summaryTable');
    summaryTable.innerHTML = '';

    const categories = ['Task', 'Random Thought', 'Idea'];

    const headerRow = summaryTable.insertRow();
    headerRow.insertCell().textContent = '';
    categories.forEach(category => {
        const headerCell = headerRow.insertCell();
        headerCell.textContent = category;
    });

    const activeNotesSummaryRow = summaryTable.insertRow();
    activeNotesSummaryRow.insertCell().textContent = 'Active Notes';
    categories.forEach(category => {
        const count = notes.filter(note => note.category === category && !note.archived).length;
        const countCell = activeNotesSummaryRow.insertCell();
        countCell.textContent = count;
    });

    const archivedNotesSummaryRow = summaryTable.insertRow();
    archivedNotesSummaryRow.insertCell().textContent = 'Archived Notes';
    categories.forEach(category => {
        const count = notes.filter(note => note.category === category && note.archived).length;
        const countCell = archivedNotesSummaryRow.insertCell();
        countCell.textContent = count;
    });
}
