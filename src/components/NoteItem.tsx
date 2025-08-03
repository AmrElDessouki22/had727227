"use client";

import { useState } from 'react';
import { useNotes } from '../contexts/NotesContext';

const NoteItem = ({ note, index }) => {
  const { editNote } = useNotes();
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editNote(index, editedNote);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={editedNote}
          onChange={(e) => setEditedNote(e.target.value)}
        />
      ) : (
        <span>{note}</span>
      )}
      <button onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default NoteItem;
