// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import Game from './Tictac';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State for dark mode and notification message
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Functions for text transformations
  const toUpperCase = () => {
    setText(text.toUpperCase());
    showMessage('Text has been capitalized');
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
    showMessage('Text has been lowercased');
  };

  const removeSpaces = () => {
    setText(text.replace(/\s+/g, ''));
    showMessage('Spaces have been removed');
  };

  const capitalizeWords = () => {
    setText(text.replace(/\b\w/g, char => char.toUpperCase()));
    showMessage('Text has been capitalized');
  };

  const countCharactersAndWords = () => {
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const charCount = text.length;
    showMessage(`Characters: ${charCount}, Words: ${wordCount}`);
  };

  // Display message temporarily
  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <Router>
      <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">MyApp</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/tictac">Tic-Tac</Link>
              </li> */}
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeSwitch"
                onChange={toggleDarkMode}
                checked={darkMode}
              />
              <label className="form-check-label" htmlFor="darkModeSwitch">Dark Mode</label>
            </div>
          </div>
        </nav>

        {/* Notification Message */}
        {message && <div className="alert alert-info text-center">{message}</div>}

        {/* Routes for Text Transformer and Game components */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="container my-5">
                <h1 className="text-center">Text Transformer</h1>
                <textarea
                  className="form-control my-3"
                  rows="4"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your text here"
                ></textarea>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary mx-2" onClick={toUpperCase}>Uppercase</button>
                  <button className="btn btn-primary mx-2" onClick={toLowerCase}>Lowercase</button>
                  <button className="btn btn-primary mx-2" onClick={removeSpaces}>Remove Spaces</button>
                  <button className="btn btn-primary mx-2" onClick={capitalizeWords}>Capitalize</button>
                  <button className="btn btn-primary mx-2" onClick={countCharactersAndWords}>Count Characters & Words</button>
                </div>
              </div>
            }
          />
          {/* <Route path="/tictac" element={<Game />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
