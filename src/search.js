import React, { useState } from 'react';


function Search({ filterUser }) {
    const [query, setQuery] = useState('Initial Value');

    function showSearch(event) {
        setQuery(event.target.value);
        filterUser(event.target.value);
        // console.log(event.target.value);
    }

    return(
        <>
            <input onInput={showSearch} /> 
            {
                query ? <p>Search result for <strong>{query}</strong></p> : null
            }
            
        </>
    );
}
export default Search;