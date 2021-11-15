import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../redux/phonebook/contactsSlice';
import { connect } from 'react-redux';
import Title from '../Components/Phonebook/Title';
import ContactList from '../Components/Phonebook/ContactList';
import ContactForm from '../Components/Phonebook/ContactForm';
import Filter from '../Components/Phonebook/Filter';
import * as actions from '../redux/phonebook/filter/filter-actions.js';

function ContactsPage({ filter, changeFilter }) {
  const { data, error, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  function filtration(value) {
    if (value === '') {
      return data;
    } else {
      return data.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(value);
      });
    }
  }

  return (
    <>
      <Title content="My phonebook" />
      <ContactForm contacts={data} />
      <Filter filter={filter} onChangeFilter={changeFilter} />
      {isFetching && <h4>Loading...</h4>}
      {data && (
        <ContactList
          contacts={filtration(filter)}
          deleteContact={deleteContact}
        />
      )}
      {error && <h4>{error}</h4>}
    </>
  );
}

const mapStateToProps = state => ({
  filter: state.filter.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: value => dispatch(actions.changeFilter(value.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
