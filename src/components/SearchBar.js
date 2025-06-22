import React from 'react';

function SearchBar({value, onChange}) {
    return (
        <div>
            <input value={value} onChange={onChange} placeholder="Enter A Song, Album, or Artist"/>
        </div>
    );
}

export default SearchBar;