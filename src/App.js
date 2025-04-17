import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Highlights />
      <Courses />
      <Contact />
      <Footer />
      <Chatbot open={chatbotOpen} onClose={() => setChatbotOpen(false)} />
      <button 
        className="chatbot-toggle"
        onClick={() => setChatbotOpen(!chatbotOpen)}
      >
        {chatbotOpen ? '✕' : '💬'}
      </button>
    </div>
  );
}

export default App;