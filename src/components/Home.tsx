import React from 'react'
import './Home.css'
import SearchBar from './SearchBar'
import FlowerStock from './FlowerStock'

const Home = () => {
  return (
    <div className="home-content container">
      <label>Flower stock</label>
      <div className='float-right'>
        <SearchBar />
      </div>
      <div className='home-list-view'>
        <FlowerStock />
      </div>
    </div>
  )
}

export default Home