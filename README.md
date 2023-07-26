# Notes App

The Notes App is a simple web application built using JavaScript that allows users to add, edit, and remove notes. The app also supports archiving notes, and users can view and unarchive archived notes. Notes are organized into categories: "Task," "Random Thought," and "Idea."

## Features

- Add a new note with a title, content, and category.
- Edit an existing note's content and category.
- Remove a note from the list.
- Archive notes to keep them separate from the active notes.
- View and unarchive previously archived notes.
- Display a summary table that counts notes by categories (separately for active and archived notes).

## Installation

1. Clone the repository to your local machine:


2. Navigate to the project directory:


3. Open the `index.html` file in your web browser to use the app.

## Usage

1. To add a new note, enter the note content in the input field and select a category from the dropdown. Click the "Add Note" button to add the note to the list.

2. To edit an existing note, click the "Edit" button in the respective note's row. A prompt will appear allowing you to modify the note content and category. Click "OK" to save the changes.

3. To remove a note, click the "Remove" button in the respective note's row. A confirmation dialog will appear to confirm the deletion. Click "OK" to remove the note from the list.

4. To archive a note, click the "Archive" button in the respective note's row. The note will be moved to the archived notes list. Archived notes are not shown in the active notes list.

5. To view archived notes, click the "Archived Notes" button at the top of the page. Archived notes will be displayed in a separate table.

6. To unarchive a note, click the "Unarchive" button in the respective note's row in the archived notes table. The note will be moved back to the active notes list.

7. The summary table at the bottom of the page shows the count of notes by category (separately for active and archived notes).

## Technology Used

- JavaScript
- HTML
- CSS

## Notes

- The app does not have data storage and is intended for demo purposes only. Any changes made will be lost when the page is reloaded.

## Credits

The app was created by Dima Diachkov.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.