import React from "react";

import "./SearchFieldStyle.css";

const SearchFieldComponent = ({placeholder, handleSearch}) => {

    
    return <input
        className="search"  
        type="search" 
        placeholder={placeholder} 
        onChange={handleSearch} 
    />
}

export default SearchFieldComponent;