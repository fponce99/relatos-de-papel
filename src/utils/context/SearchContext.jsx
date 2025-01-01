import { createContext, useState } from "react";
import PropTypes from "prop-types";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SearchContext, SearchProvider };
