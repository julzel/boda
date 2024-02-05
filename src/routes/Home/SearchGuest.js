import React from 'react';
import styles from './SearchGuest.module.scss';

const SearchGuest = ({ value, onChange }) => (
  <div className={styles.searchGuest}>
    <input
      type='text'
      placeholder='Tu nombre... o apodo'
      value={value}
      onChange={onChange}
      className={styles.searchInput}
    />
  </div>
);

export default SearchGuest;
