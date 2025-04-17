import React from 'react';
import './Chatbot.css';

const ChatMessage = ({ text, sender }) => {
  return (
    <div className={`chat-message ${sender}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
