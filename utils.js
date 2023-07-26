export function formatTime(date) {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit', // Use 2-digit format for hours (24-hour format)
      minute: '2-digit',
      hour12: false, // Use 24-hour format
    };
    return date.toLocaleString('en-US', options).replace(',', '');
  }
  
  export function getDatesFromNoteContent(content) {
    const regex = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
    const matches = content.match(regex);
    return matches ? matches : [];
  }