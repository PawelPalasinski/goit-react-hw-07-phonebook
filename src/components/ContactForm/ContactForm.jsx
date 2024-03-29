import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../features/api/apiSlice';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;

    if (contacts.find(cont => cont.name === name)) {
      alert(`${name} is already your friend...`);
    } else {
      addContact({
        id: nanoid(),
        name,
        phone,
      });
      form.reset();
    }
  };

  return (
    <div className={styles.phonebook}>
      <svg
        className={styles.phonebookSvg}
        id="phone"
        width="60px"
        height="60px"
        viewBox="0 0 299.995 299.995"
      >
        <g>
          <g>
            <g>
              <path
                d="M149.992,0.001C67.156,0.001,0,67.159,0,149.998c0,82.837,67.156,149.997,149.992,149.997
				c82.842,0,150.003-67.161,150.003-149.997C299.995,67.159,232.834,0.001,149.992,0.001z M210.947,217.132v10.374
				c0,5.729-4.645,10.374-10.374,10.374h-10.374h-57.256H96.829c-11.458,0-20.749-9.29-20.749-20.749V86.592
				c0-11.458,9.29-20.749,20.749-20.749h36.113h57.256h10.374c5.729,0,10.374,4.645,10.374,10.374v10.375h0.001V217.132z
				 M231.695,86.592v130.54v10.374c0,5.729-4.645,10.374-10.374,10.374h-2.806c1.774-3.055,2.806-6.593,2.806-10.374v-10.374V86.592
				V76.219c0-3.781-1.032-7.319-2.806-10.374h2.806c5.729,0,10.374,4.645,10.374,10.374V86.592z"
              />
              <path
                d="M175.591,165.517c0,0-3.909-4.692-8.237-1.455c-3.226,2.412-9.023,7.776-10.416,9.078c0,0-9.69-5.166-15.424-9.884
				c-8.494-6.985-14.174-15.608-17.151-20.513l-2.223-4.191c0.775-0.835,6.71-7.189,9.277-10.639
				c3.232-4.326-1.452-8.235-1.452-8.235s-13.183-13.183-16.184-15.798c-3.003-2.622-6.461-1.167-6.461-1.167
				c-6.315,4.082-12.859,7.628-13.248,24.686c-0.013,15.969,12.109,32.438,25.215,45.188c13.131,14.402,31.162,28.833,48.588,28.817
				c17.055-0.384,20.598-6.93,24.678-13.245c0,0,1.46-3.455-1.159-6.458C188.774,178.693,175.591,165.517,175.591,165.517z"
              />
            </g>
          </g>
        </g>
      </svg>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <br />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
        <br />
      </form>
    </div>
  );
};

export default ContactForm;
