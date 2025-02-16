import { useState, useEffect } from 'react'
import './styles/App.css'
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ChatWindow from './pages/chatwindow.jsx';
import Features from './pages/features.jsx';
import IdeaValidation from './pages/IdeaValidation.jsx';
import Contact from './pages/contact.jsx';
import Resource from './pages/resource.jsx';
import About from './pages/about.jsx';
import MarketAnalysis from './pages/market analysis.jsx';

const GEMINI_API_KEY = 'AIzaSyDYdbR-8HEDxMdFrExJ3X3-1Fas7xplkOo';

function App() {
  const [context, setContext] = useState("");

  useEffect(() => {
    fetch('/content.txt')
      .then(response => response.text())
      .then(data => setContext(data))
      .catch(error => console.error('Error loading content:', error));
  }, []);

  const generateAnswer = async (question) => {
    try {
      if (!GEMINI_API_KEY) {
        throw new Error("API key is undefined. Make sure to set VITE_GEMINI_API_KEY in your .env file");
      }

      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        method: "post",
        data: {
          "contents": [{
            "parts":[{"text": `Context: ${context}\n\nQuestion: ${question}`}]
          }]
        }
      });
      
      return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error("Error generating answer:", error);
      return "Sorry, there was an error processing your request.";
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/features" element={<Features />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/chatwindow" element={<ChatWindow generateAnswer={generateAnswer} />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/IdeaValidation" element={<IdeaValidation generateAnswer={generateAnswer} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/about" element={<About />} />
        <Route path="/market analysis" element={<MarketAnalysis generateAnswer={generateAnswer} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;