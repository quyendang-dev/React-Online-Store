import React from "react";
import ButtonSearch from "../common/ButtonSearch";

const BookSearchForm = props => {
  const { onChange, onSubmit, search } = props;
  const { query } = search;

  return (
    <form className="books-search form-inline">
      <input
        className="form-control col mr-auto"
        type="text"
        placeholder="Search for books by title, author or description"
        aria-label="Search"
        name="query"
        value={query}
        onChange={onChange}
      />

      <ButtonSearch handleAction={onSubmit} className="col-auto" />
    </form>
  );
};

export default BookSearchForm;
