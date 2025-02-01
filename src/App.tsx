import './App.css';
import Home from './components/pages/Home/Home';
import { NotFound } from './components/pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './assets/logo.svg';
import FlowerDetail from './components/pages/FlowerDetail/FlowerDetail';

function App() {

  return (
    <div className="App container">
      <header className="App-header">
        <a href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <h1 className='App-title'>Dulces pétalos</h1>
      </header>
      <div className='App-body container'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FlowerDetail/:id" element={<FlowerDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
