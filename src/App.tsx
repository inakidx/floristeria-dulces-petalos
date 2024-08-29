import './App.css';
import Home from './components/Home';
import { NotFound } from './components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <a href="/">
          <img src="./logo.svg" className="App-logo" alt="logo" />
        </a>
      </header>
      <body className='App-body'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </body>
    </div>
  );
}

export default App;
