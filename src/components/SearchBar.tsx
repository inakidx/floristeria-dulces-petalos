import React, { useState } from 'react'

interface SearchBarProps {
  onSearchChange: (search: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const searchChange = (search: string) => {
    onSearchChange(search);
  };
  return (
    <input placeholder='Search' onChange={e => searchChange(e.target.value)}></input>
  )
}

export default SearchBar