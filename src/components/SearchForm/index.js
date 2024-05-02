import React, { useState } from "react";

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navegar a otra ruta
    //pushLocation(`/search/${keyword}`);
    onSubmit({ keyword });
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input
        onChange={handleChange}
        type="text"
        value={keyword}
        placeholder="Search a gif here ..."
      />
    </form>
  );
}

export default React.memo(SearchForm)