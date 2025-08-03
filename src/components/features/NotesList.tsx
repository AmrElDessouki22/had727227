'use client';

import React from 'react';
import { useNotes } from '../../contexts/NotesContext';
import Button from '../ui/Button';

const NotesList: React.FC = () => {
  const { notes, deleteNote } = useNotes();

  return (
    <ul className="space-y-4">
      {notes.map((note) => (
        <li key={note.id} className="p-4 bg-white rounded shadow">
          <p>{note.content}</p>
          <Button onClick={() => deleteNote(note.id)}>Delete</Button>
        </li>
      ))}
    </ul>
  );
};

export default NotesList;