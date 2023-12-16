import { ContactItem } from 'components/ContactItem/ContactItem';
import React from 'react';

export class ContactList extends React.Component {
  render() {
    const { contacts, getFilteredData, children, deleteContact } = this.props;
    const filteredContacts = getFilteredData(contacts);
    return (
      <div>
        {children}
        {filteredContacts.length === 0 ? (
          <p>No such contact exists</p>
        ) : (
          <ul>
            {filteredContacts.map(({ id, name, number }) => (
              <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                deleteContact={deleteContact}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
