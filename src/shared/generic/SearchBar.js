import SearchBarContent from './SearchBarContent'
import { SearchResultsList } from "./SearchResultsList";
import { useState } from "react";
import './SearchBar.css'

function SearchBar(props) {
    const [results, setResults] = useState([]);
    return (
        <div
            className="search-bar-container"
            id={props.DarkMode === true ? 'searchbardark':''} 
        >
          <SearchBarContent 
              setResults={setResults} 
          />
          {results && results.length > 0 && <SearchResultsList results={results} />}
        </div> //Displays results if string >0
    );
}

export default SearchBar;