import './App.css';
import Home from './ui/components/pages/Home/Home';
import { NotFound } from './ui/components/pages/NotFound';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import FlowerDetail from './ui/components/pages/FlowerDetail/FlowerDetail';

function App() {

  return (
    <div className="App container">
      <Router>
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h1 className='App-title'>Dulces pétalos</h1>
        </header>
        <div className='App-body container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FlowerDetail/:id" element={<FlowerDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
