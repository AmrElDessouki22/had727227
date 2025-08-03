"use client";

import { useNotes } from '../contexts/NotesContext';
import NoteItem from './NoteItem';
import { useState } from 'react';

const NoteList = () => {
  const { notes } = useNotes();
  return (
    <div>
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} index={index} />
      ))}
    </div>
  );
};

export default NoteList;
