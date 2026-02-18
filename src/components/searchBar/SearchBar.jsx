import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();

    if (!value) {
      toast.error("Please Enter A Search Term!...");
      return;
    }

    onSubmit(value);
    e.target.reset();
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <button type="submit" className={styles.iconButton}>
            <FaSearch />
          </button>

          <input
            className={styles.input}
            name="search"
            type="text"
            placeholder="Search images and photos"
          />
        </div>
      </form>
    </header>
  );
}