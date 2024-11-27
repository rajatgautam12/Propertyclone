import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    onSearch(searchText); // Call the search function from parent component
  };

  return (
    
    <div className="search-bar">
       <div className='text'><h1>Propertypistol - Your Home Buying Journey, Simplified</h1> </div> 
      <select className="select-city">
        <option value="">Select City</option>
        <option value="mumbai">Mumbai</option>
        <option value="bangalore">Bangalore</option>
        {/* Add more options as needed */}
      </select>
      <input
        type="text"
        placeholder="Search a Locality, Property or Developer"
        value={searchText}
        onChange={handleSearch} />
      <button className="find-property">Find Property</button>
    </div>
  );
};

export default SearchBar;