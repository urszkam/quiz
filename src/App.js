import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Main from './pages/main';
import Instructions from './pages/instructions';
import Quiz from './pages/quiz';
import { Footer } from './Components/quiz/footer'
import { Logo } from './Components/quiz/logo'



function App() {
  return (
    <Router>
      <Logo />
    <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/instructions' element={<Instructions/>} />
        <Route path='/quiz' element={<Quiz/>} />
    </Routes>
      <Footer />
    </Router>
  );
}

export default App;
