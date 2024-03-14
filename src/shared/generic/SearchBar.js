import SearchBarContent from './SearchBarContent'
import { SearchResultsList } from "./SearchResultsList";
import { useState } from "react";
import './SearchBar.css'


/**
 * @description                                     A searchbar 
 * 
 * @param {object}  props 
 * @param {boolean} isDarkMode  props.isDarkMode    Either true or false 
 * @param {string}  customWidth props.customWidth   Another width than the default 31.25rem one
 *  
 * @returns                                         The SearchBar component
 */

function SearchBar(props) {
    const [results, setResults] = useState([]);
    return (
        <div
            className="search-bar-container"
            style={{width:props.customWidth || '31.25rem'}}
            id={props.isDarkMode === true ? 'searchbardark':''} 
        >
          <SearchBarContent 
              setResults={setResults} 
          />
          {results && results.length > 0 && <SearchResultsList results={results} />}
        </div> //Displays results if string > 0
    );
}

export default SearchBar;