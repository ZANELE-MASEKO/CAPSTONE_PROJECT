import { useState } from 'react'
import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './components/LandingPage'
import { TotalPage } from './components/TotalPage'
import { QuizPage } from './components/QuizPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/total" element={<TotalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
