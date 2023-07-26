import { renderNotesTable, renderArchivedNotesTable, renderSummaryTable } from './render.js';
import { addNote } from './notes.js';
import notesData from './notesData.js';

const notes = [...notesData];

renderNotesTable(notes);
renderArchivedNotesTable(notes);
renderSummaryTable(notes);

const addNoteButton = document.getElementById('addNoteButton');
const noteContentInput = document.getElementById('noteContentInput');
const noteCategorySelect = document.getElementById('noteCategorySelect');

addNoteButton.addEventListener('click', async () => {
    const content = noteContentInput.value.trim();
    const category = noteCategorySelect.value;

    if (content && category) {
        try {
            await addNote(notes, content, category);
            renderNotesTable(notes);
            renderSummaryTable(notes);
            noteContentInput.value = '';
            noteCategorySelect.value = '';
        } catch (error) {
            console.error('Error adding note:', error.message);
        }
    }
});
