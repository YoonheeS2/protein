import React from "react";
import SearchComponent from "./SearchComponent";

const SearchPopup = ({ setResult }) => {
  return (
    <div>
      <SearchComponent setResult={setResult}></SearchComponent>
    </div>
  );
};
export default SearchPopup;
