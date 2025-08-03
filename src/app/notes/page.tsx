"use client";

import { useState } from 'react';
import NoteList from '../../components/NoteList';
import NoteEditor from '../../components/NoteEditor';

const NotesPage = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: 'First Note' },
    { id: 2, content: 'Second Note' },
  ]);
  const [editingNote, setEditingNote] = useState(null);

  const handleEdit = (noteId) => {
    const noteToEdit = notes.find(note => note.id === noteId);
    setEditingNote(noteToEdit);
  };

  const handleSave = (updatedNote) => {
    setNotes(prevNotes => 
      prevNotes.map(note => 
        note.id === updatedNote.id ? updatedNote : note
      )
    );
    setEditingNote(null);
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={notes} onEdit={handleEdit} />
      {editingNote && 
        <NoteEditor note={editingNote} onSave={handleSave} onCancel={() => setEditingNote(null)} />
      }
    </div>
  );
};

export default NotesPage;
