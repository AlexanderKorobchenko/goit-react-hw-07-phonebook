import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../redux/phonebook/contactsSlice';
import ContactList from '../Components/Phonebook/ContactList';
import ContactForm from '../Components/Phonebook/ContactForm';
import Filter from '../Components/Phonebook/Filter';

const ContactsPage = () => {
  const { data, error, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      <ContactForm />
      <Filter />
      {isFetching && <h4>Loading...</h4>}
      {data && <ContactList contacts={data} deleteContact={deleteContact} />}
      {error && <h4>{error}</h4>}
    </>
  );
};

export default ContactsPage;
