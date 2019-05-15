import React from 'react';
import PropTypes from 'prop-types';
import './note-item.scss';

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="note-item" key={note.id}>
      <div>{note.title}</div>
      <div>{note.content}</div>
    </div>
  );
};

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoteItem;
