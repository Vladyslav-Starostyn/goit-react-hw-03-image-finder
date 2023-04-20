import { Formik } from "formik";
import PropTypes from "prop-types";
import {FaSistrix} from "react-icons/fa"
// import {
//   Header,
//   SearchForm,
//   SearchFormButton,
//   SearchFormButtonLabel,
//   SearchFormInput,
// } from "components/Searchbar/SearchbarStyled";
import css from "components/Searchbar/Searchbar.module.css"

export const Searchbar = ({ onSubmit }) => {

  const handleSubmit = (values, {resetForm}) => {
    if (values.query.trym() === '') {
      return alert('Please enter valid query:)')
    }
      onSubmit(values.query.trim());
    resetForm();
  }

    return (
    // <Header>
    //   <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
    //     <SearchForm>
    //       <SearchFormButton type="submit">
    //         <FaSistrix />
    //         <SearchFormButtonLabel>Search</SearchFormButtonLabel>
    //       </SearchFormButton>

    //       <SearchFormInput
    //         type="text"
    //         name="query"
    //         autoComplete="off"
    //         autoFocus
    //         placeholder="Search images and photos"
    //       />
    //     </SearchForm>
    //   </Formik>
    //   </Header>
      
    <header className={css.searchbar}>
        <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}></Formik>
      <form className={css.searchForm}>
        <button type="submit" className={css.searchFormButton}>
            <FaSistrix/>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
      </form>
    </header>
  );
  
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func//.isRequired,
};

