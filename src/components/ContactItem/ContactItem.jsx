import React from 'react';
import css from './ContactItem.module.css';

export class ContactItem extends React.Component {
  render() {
    const { name, number, id, deleteContact } = this.props;
    return (
      <li className={css.itemContact}>
        <span className={css.nameContact}>{name}: </span>
        <span className={css.numberContact}>{number}</span>
        <button
          className={css.btnDelete}
          type="button"
          onClick={event => deleteContact(id, event)}
        >
          Delete
        </button>
      </li>
    );
  }
}
