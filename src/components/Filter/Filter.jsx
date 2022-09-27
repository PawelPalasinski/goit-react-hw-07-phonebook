import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/slices/filter';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(filterContacts(value));
  };

  return (
    <input
      className={styles.filter}
      type="text"
      name="filter"
      onChange={changeFilter}
      placeholder="Enter name for Search"
    />
  );
};

export default Filter;