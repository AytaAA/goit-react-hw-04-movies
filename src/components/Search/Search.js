import React from "react";
import { withRouter } from "react-router-dom";
import style from "../../components/Search/Search.module.css";

const Search = ({ onFormSubmit, onChangeSearch, query }) => {
  return (
    <form onSubmit={onFormSubmit} className={style.search_form}>
      <input
        className={"style.search_form_input"}
        onChange={onChangeSearch}
        name="query"
        value={query}
        type="text"
      />
      <button type="submit" className={style.search_form_button}>
        <span className={"style.search_form_buttonLabel"}>Search</span>
      </button>
    </form>
  );
};

export default withRouter(Search);
