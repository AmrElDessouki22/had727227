'use client';

import React, { useState } from 'react';
import { useNotes } from '../../contexts/NotesContext';
import Input from '../ui/Input';
import Button from '../ui/Button';

const NoteForm: React.FC = () => {
  const [content, setContent] = useState('');
  const { addNote } = useNotes();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNote(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Input value={content} onChange={(e) => setContent(e.target.value)} />
      <Button onClick={handleSubmit}>Add Note</Button>
    </form>
  );
};

export default NoteForm;