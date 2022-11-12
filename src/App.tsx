import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './comonents/Navbar';
import { AboutPage } from './pages/AboutPage';
import { TodoPage } from './pages/TodoPages';


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Router>
          <Routes>
            <Route path='/' element={<TodoPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;