import React from 'react';
import NoteItem from './NoteItem';
import './notes.scss';

const notes = {
  notes: [
    {
      id: 582,
      title: 'Test Note 1',
      content: 'content goes here',
    },
    {
      id: 583,
      title: 'Test Note 2',
      content: 'Valar morghulis',
    },
    {
      id: 585,
      title: 'Test Note 3',
      content: '................................................................',
    },
    {
      id: 587,
      title: 'Test Note 2',
      content: 'Valar morghulis',
    },
  ],
};

const Notes = () => (
  <div className="main-area">
    {notes.notes.map(item => (
      <NoteItem note={item} />
    ))}
  </div>
);

export default Notes;
