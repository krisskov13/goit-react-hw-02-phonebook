import React from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleValueChange = (field, event) => {
    this.setState({ [field]: event.target.value });
  };

  createContact = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const newContact = { name, number, id: nanoid(5) };

    if (this.props.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.props.updateContactState(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.createContact}>
        <label>
          Name
          <input
            className={css.inputForm}
            type="text"
            name="name"
            value={this.state.name}
            onChange={event => this.handleValueChange('name', event)}
            required
          />
        </label>
        <label>
          Number
          <input
            className={css.inputForm}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={event => this.handleValueChange('number', event)}
            required
          />
        </label>
        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
