import React, { useState,useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';

const SearchBarContent = (props) => {
    const [input, setInput] = useState("");
    const [clientsList, setClientsList] = useState([]);
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users") //Fake data until we have a true database to fetch
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                return (
                    user
                );
        });
        setClientsList(results);
        });
    }, [])

    const handleChange = (value) => {
        setInput(value);
        const data_filter = clientsList.filter( client => client.username.includes(value))
        props.setResults(data_filter)
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
                    placeholder={props.placeholder}
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                  />
            </div>
        </form> 
    );
};

export default SearchBarContent;