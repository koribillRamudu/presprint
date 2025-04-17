import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import ChatMessage from './ChatMessage';

const Chatbot = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "👋 Hello! I'm the PrepSprint assistant. How can I help you today?", sender: 'bot' },
    { text: "📋 You can ask me about:", sender: 'bot', type: 'index' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showCourseOptions, setShowCourseOptions] = useState(false);
  const messagesEndRef = useRef(null);

  const courseList = [
    "GitHub – Version Control Mastery",
    "Programming for Problem Solving",
    "Data Structures & Algorithms",
    "HTML, CSS & JavaScript",
    "React JS + MERN Stack",
    "Placement Preparation & Mock Interviews"
  ];

  const courseDetails = {
    "GitHub – Version Control Mastery": "🛠 Learn Git, GitHub, branches, merge, and versioning best practices.",
    "Programming for Problem Solving": "💡 Focuses on C/C++ fundamentals, logic building, and coding basics.",
    "Data Structures & Algorithms": "📚 Covers arrays, linked lists, stacks, queues, trees, and more.",
    "HTML, CSS & JavaScript": "🎨 Build beautiful, responsive websites with HTML, CSS, and JS.",
    "React JS + MERN Stack": "⚛️ Dive deep into MongoDB, Express, React, and Node.js to build full-stack apps.",
    "Placement Preparation & Mock Interviews": "🎯 Get ready with mock interviews, aptitude, and HR/Tech rounds."
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const question = inputValue.toLowerCase();
    setMessages(prev => [...prev, { text: inputValue, sender: 'user' }]);

    handleBotResponse(question);
    setInputValue('');
  };

  const handleBotResponse = (question) => {
    let response = "😕 Sorry, I didn't understand that. Try asking about the program, highlights, courses, duration, fee, or contact.";

    if (question.includes('about') || question.includes('program')) {
      response = "📘 PrepSprint is a 6-month immersive training program designed to bridge academic knowledge and industry readiness.";
    } else if (question.includes('highlight') || question.includes('feature')) {
      response = "✅ 100% Placement Guarantee\n🟡 Trained by IIITH Grads\n🟢 Project-Based Learning\n🟣 Online/Offline Exams\n🟩 FREE Soft Skills Training";
    } else if (question.includes('course') || question.includes('subject')) {
      response = "📚 We offer the following courses. Please select one to know more.";
      setShowCourseOptions(true);
    } else if (question.includes('duration') || question.includes('long')) {
      response = "⏳ The program runs for 6 months, designed for deep skill development.";
    } else if (question.includes('fee') || question.includes('price') || question.includes('cost')) {
      response = "💰 The total fee is ₹2.5 Lakhs, including training, evaluation, projects, and placement support.";
    } else if (question.includes('contact') || question.includes('phone') || question.includes('reach')) {
      response = "📞 Contact Mr. Phani Babu at +91 91777 26263 for more information.";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    }, 500);
  };

  const handleIndexClick = (label) => {
    setMessages(prev => [...prev, { text: label, sender: 'user' }]);
    handleBotResponse(label.toLowerCase());
  };

  const handleCourseSelect = (course) => {
    const detail = courseDetails[course];
    setMessages(prev => [
      ...prev,
      { text: `📘 ${course}`, sender: 'user' },
      { text: detail, sender: 'bot' }
    ]);
    setShowCourseOptions(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!open) return null;

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h3>PrepSprint Assistant</h3>
        <button onClick={onClose} className="close-btn">✕</button>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, idx) => (
          <React.Fragment key={idx}>
            <ChatMessage text={msg.text} sender={msg.sender} />
            {msg.type === 'index' && (
              <div className="index-options">
                {['About Program', 'Highlights', 'Courses', 'Duration', 'Fee', 'Contact'].map((option, i) => (
                  <button key={i} onClick={() => handleIndexClick(option)}>
                    {option}
                  </button>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
        {showCourseOptions && (
          <div className="course-options">
            {courseList.map((course, index) => (
              <button key={index} onClick={() => handleCourseSelect(course)}>
                {course}
              </button>
            ))}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="chatbot-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your question here..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
