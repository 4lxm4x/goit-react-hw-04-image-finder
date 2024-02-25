import "../../styles.css";
import { useState } from "react";
import { ImSearch } from "react-icons/im";

export default function SearchBar({ onSubmit }) {

  const [input, setInput] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    onSubmit(input);
    setInput("");

    return; 
  };

  const onInput = (e) => {
  setInput(e.target.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onFormSubmit}>
        <button type="submit" className="SearchForm-button">
          <ImSearch className="SearchForm-button-label" />
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onInput}
        />
      </form>
    </header>
  );
}
