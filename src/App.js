import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import WordpressLogin from './Component/WordpressLogin';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<WordpressLogin />} />
        {/* Add more routes here if needed */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
