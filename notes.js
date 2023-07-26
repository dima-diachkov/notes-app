import { formatTime } from './utils.js'

export function addNote(notes, content, category) {
  const id = notes.length + 1;
  const time = formatTime(new Date());
  const newNote = { id, time, content, category, archived: false };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (notes.push(newNote)) {
        resolve(newNote);
      } else {
        reject(new Error('Failed to add note. Please try again.'));
      }
    }, 500);
  });
}


export function editNote(notes, id, content, category) {
  const note = notes.find(note => note.id === id);
  if (note) {
    note.content = content;
    note.category = category;
  }
}

export function removeNote(notes, id) {
  const index = notes.findIndex(note => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
  }
}

export function archiveNote(notes, id) {
  const note = notes.find(note => note.id === id);
  if (note) {
    note.archived = true;
  }
}

export function unarchiveNote(notes, id) {
  const note = notes.find(note => note.id === id);
  if (note) {
    note.archived = false;
  }
}
