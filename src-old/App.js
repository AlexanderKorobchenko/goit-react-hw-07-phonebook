import Container from './components/Container';
import Title from './components/Title';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

function App() {
  return (
    <Container>
      <Title content="My phonebook" />
      {/* <ContactForm onSubmit="_" /> */}
      <Filter
      // filter="_" onChangeFilter="_"
      />
      <ContactList />
    </Container>
  );
}

export default App;
