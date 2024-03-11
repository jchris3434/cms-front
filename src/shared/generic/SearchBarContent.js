import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';

const SearchBarContent = (props) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users") //Fake data until we have a true database to fetch
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                return (
                    value &&
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value)
                );
        });
            props.setResults(results);
        });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <form>
            <div 
                class="input-group rounded-pill"
            >
                <button type="button" class="btn">
                    <i class="bi-search"/>
                </button>
                <input
                    placeholder="Chercher un projet"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                  />
            </div>
        </form> 
    );
};

export default SearchBarContent;