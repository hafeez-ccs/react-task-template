import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value);
  };

  return (
    <div >
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search by name or father's name"
        
      />
    </div>
  );
};

export default SearchBar;
