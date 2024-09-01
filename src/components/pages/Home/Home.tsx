import React, { useState } from 'react'
import './Home.css'
import SearchBar from '../../shared/SearchBar'
import FlowerStock from '../../FlowerStock'

const Home = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="home-content">
      <div className='component-top'>
        <h2>Catálogo de flores</h2>
        <div className='float-right'>
          <SearchBar onSearchChange={setSearch} />
        </div>
      </div>
      <div className='home-list-view'>
        <FlowerStock filter={search} />
      </div>
    </div>
  )
}

export default Home