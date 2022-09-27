import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/slices/contacts';
import styles from './ContactList.module.css';

const ContactList = () => {
  const filtersContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const contactsList = filtersContacts(contacts, filter);

  const deleteItem = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      <ul>
        {contactsList.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              <span>{name} : </span>
              {number}
            </p>
            <button type="button" onClick={() => deleteItem(id)}>
              ⛌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
