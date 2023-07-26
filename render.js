import { createActionButton, createActionHandlers, createTableHeaderRow, createTableRowWithButtons } from './tableUtils.js';
import { labels, tableHeaders, summaryCategories } from './dictionary.js';



export function renderNotesTable(notes) {
  const activeNotesTable = document.querySelector('#activeNotesTable');
  activeNotesTable.innerHTML = '';

  const otherHeaders = [tableHeaders.time, tableHeaders.content, tableHeaders.category, tableHeaders.dates];
  createTableHeaderRow(activeNotesTable, otherHeaders, 3);

  notes.forEach(note => {
    if (!note.archived) {
      const actionHandlers = createActionHandlers(notes, note, [renderNotesTable, renderArchivedNotesTable, renderSummaryTable]);

      const editButton = createActionButton(labels.edit, actionHandlers.onEdit);
      const removeButton = createActionButton(labels.remove, actionHandlers.onRemove);
      const archiveButton = createActionButton(labels.archive, actionHandlers.onArchive);

      createTableRowWithButtons(activeNotesTable, note, [editButton, removeButton, archiveButton]);
    }
  });
}

export function renderArchivedNotesTable(notes) {
  const archivedNotesTable = document.querySelector('#archivedNotesTable');
  archivedNotesTable.innerHTML = '';

  const otherHeaders = [tableHeaders.time, tableHeaders.content, tableHeaders.category, tableHeaders.dates];
  createTableHeaderRow(archivedNotesTable, otherHeaders, 3);

  notes.forEach(note => {
    if (note.archived) {
      const actionHandlers = createActionHandlers(notes, note, [renderNotesTable, renderArchivedNotesTable, renderSummaryTable]);

      const editButton = createActionButton(labels.edit, actionHandlers.onEdit);
      const removeButton = createActionButton(labels.remove, actionHandlers.onRemove);
      const unarchiveButton = createActionButton(labels.unarchive, actionHandlers.onUnarchive);

      createTableRowWithButtons(archivedNotesTable, note, [editButton, removeButton, unarchiveButton]);
    }
  });
}

export function renderSummaryTable(notes) {
  const summaryTable = document.querySelector('#summaryTable');
  summaryTable.innerHTML = '';

  const headerRow = summaryTable.insertRow();
  headerRow.insertCell().textContent = '';
  summaryCategories.forEach(category => {
    const headerCell = headerRow.insertCell();
    headerCell.textContent = category;
  });

  const activeNotesSummaryRow = summaryTable.insertRow();
  activeNotesSummaryRow.insertCell().textContent = labels.activeNotes;
  summaryCategories.forEach(category => {
    const count = notes.filter(note => note.category === category && !note.archived).length;
    const countCell = activeNotesSummaryRow.insertCell();
    countCell.textContent = count;
  });

  const archivedNotesSummaryRow = summaryTable.insertRow();
  archivedNotesSummaryRow.insertCell().textContent = labels.archivedNotes;
  summaryCategories.forEach(category => {
    const count = notes.filter(note => note.category === category && note.archived).length;
    const countCell = archivedNotesSummaryRow.insertCell();
    countCell.textContent = count;
  });
}
