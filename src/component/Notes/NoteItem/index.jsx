import React from 'react';
import PropTypes from 'prop-types';
import './note-item.scss';

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="note-item" key={note.id}>
      <div className="note-item__header">
        <div />
        <div className="note-item__title">{note.title}</div>
        <button className="note-item__delete-btn" type="button" />
      </div>
      <div className="note-item__content">{note.content}</div>
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
