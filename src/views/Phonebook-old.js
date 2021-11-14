// import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '../Components/Container';
import Section from '../Components/Phonebook/Section';
import ContactForm from '../Components/Phonebook/ContactForm';
import Filter from '../Components/Phonebook/Filter';
import ContactList from '../Components/Phonebook/ContactList';
// import * as actions from '../redux/phonebook/phonebook-actions';

function App({ items, filter, addContact, deleteContact, changeFilter }) {
  const applyFilter = value => {
    return items.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(value);
    });
  };

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact}></ContactForm>
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChangeFilter={changeFilter} />
        {filter === '' ? (
          <ContactList contacts={items} deleteContact={deleteContact} />
        ) : (
          <ContactList
            contacts={applyFilter(filter)}
            deleteContact={deleteContact}
          />
        )}
      </Section>
    </Container>
  );
}

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter,
});

// const mapDispatchToProps = dispatch => ({
//   addContact: value => dispatch(actions.addContact(value)),
//   deleteContact: value => dispatch(actions.deleteContact(value)),
//   changeFilter: value => dispatch(actions.changeFilter(value.target.value)),
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(App);
