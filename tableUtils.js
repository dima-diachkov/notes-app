import { labels, messages } from './dictionary.js';
import { editNote, removeNote, archiveNote, unarchiveNote } from './notes.js';
import { getDatesFromNoteContent } from './utils.js';

export function createActionButton(label, onClickHandler) {
  const button = document.createElement('button');
  button.textContent = label;
  button.addEventListener('click', onClickHandler);
  return button;
}

export function createActionHandlers(notes, note, renderFunctions) {
  const onEdit = () => {
    const newContent = prompt(messages.editPrompt, note.content);
    if (newContent !== null) {
      editNote(notes, note.id, newContent.trim(), note.category);
      renderFunctions.forEach(renderFunc => renderFunc(notes));
    }
  };

  const onRemove = () => {
    const confirmation = confirm(messages.removeConfirmation);
    if (confirmation) {
      removeNote(notes, note.id);
      renderFunctions.forEach(renderFunc => renderFunc(notes));
    }
  };

  const onArchive = () => {
    archiveNote(notes, note.id);
    renderFunctions.forEach(renderFunc => renderFunc(notes));
  };

  const onUnarchive = () => {
    unarchiveNote(notes, note.id);
    renderFunctions.forEach(renderFunc => renderFunc(notes));
  };

  return {
    onEdit,
    onRemove,
    onArchive,
    onUnarchive,
  };
}

export function createTableHeaderRow(table, headers, actionsHeaderColSpan) {
  const headerRow = table.insertRow();
  headers.forEach(headerText => {
    const headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });
  const actionsHeaderCell = document.createElement('th');
  actionsHeaderCell.textContent = labels.edit;
  actionsHeaderCell.colSpan = actionsHeaderColSpan;
  headerRow.appendChild(actionsHeaderCell);
}

export function createTableRowWithButtons(table, note, buttons) {
  const row = table.insertRow();
  row.insertCell().textContent = note.time;
  row.insertCell().textContent = note.content;
  row.insertCell().textContent = note.category;
  row.insertCell().textContent = getDatesFromNoteContent(note.content).join(', ');

  buttons.forEach(button => {
    const buttonCell = row.insertCell();
    buttonCell.appendChild(button);
  });
}
