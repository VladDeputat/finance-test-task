import { useDispatch } from "react-redux";
// import { filterContacts } from "../../../redux/contacts/contactsActions";
import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  const dispatch = useDispatch();

  //   const onFilterChange = (e) => {
  //     dispatch(filterContacts(e.target.value));
  //   };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          name="query"
          type="text"
          // value={this.state.query}
          autoComplete="off"
          placeholder="Search tickers"
          // onChange={onHandleChange}
        />
      </form>
    </header>
  );
}
