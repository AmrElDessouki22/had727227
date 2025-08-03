"use client";

import { useState } from 'react';
import { useNotes } from '../context/NotesContext';

const AddNoteForm = () => {
  const { addNote } = useNotes();
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim() === '') return;
    addNote(noteText);
    setNoteText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Add a new note"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNoteForm;