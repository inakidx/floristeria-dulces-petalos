import React, { useState } from 'react'
import './Home.css'
import SearchBar from '../shared/SearchBar'
import FlowerStock from '../FlowerStock'

const Home = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="home-content">
      <label>Flower stock</label>
      <div className='float-right'>
        <SearchBar onSearchChange={setSearch} />
      </div>
      <div className='home-list-view'>
        <FlowerStock filter={search} />
      </div>
    </div>
  )
}

export default Home