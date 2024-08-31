import React from 'react'

interface SearchBarProps {
  onSearchChange: (search: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const searchChange = (search: string) => {
    onSearchChange(search);
  };
  return (
    <input placeholder='Buscar' onChange={e => searchChange(e.target.value)} type='text'></input>
  )
}

export default SearchBar