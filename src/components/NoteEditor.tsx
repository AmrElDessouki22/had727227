"use client";

import React, { useState } from 'react';

const NoteEditor = ({ note, onSave, onCancel }) => {
  const [content, setContent] = useState(note.content);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSave = () => {
    onSave({ ...note, content });
  };

  return (
    <div>
      <textarea value={content} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default NoteEditor;
