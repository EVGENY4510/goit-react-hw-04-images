import { useState } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';
import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [name, setName] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setName(value.toLowerCase());
  };
  const reset = () => {
    setName('');
  };
  const onSubmitForm = e => {
    e.preventDefault();
    if (name.trim() === '') {
      toast.error('Please enter a request!');

      return;
    }

    onSubmit(name);

    reset();
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={onSubmitForm}>
        <button type="submit" className={css.button}>
          <AiOutlineSearch size={25} />
        </button>

        <input
          className={css.input}
          onChange={handleChange}
          value={name}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
