import css from './Button.module.css';

export default function Button({ changePageNumber }) {
  const handleClick = () => {
    changePageNumber();
  };
  return (
    <button type="click" className={css.loadButton} onClick={handleClick}>
      <span className="button-label">Load more</span>
    </button>
  );
}
