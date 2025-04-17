import React from 'react';
import './Highlights.css';

const Highlights = () => {
  const highlights = [
    {
      icon: '✅',
      title: '100% Placement Guarantee',
      description: 'Assured placement assistance backed by real projects and mock interview training.'
    },
    {
      icon: '🟡',
      title: 'Trained by IIITH Master\'s Graduates & Industry Experts',
      description: ''
    },
    {
      icon: '🟢',
      title: 'Project-Based Learning',
      description: 'Gain hands-on experience with real-world case studies and applications.'
    },
    {
      icon: '🟣',
      title: 'Online Training with Offline & Online Exams',
      description: ''
    },
    {
      icon: '🟩',
      title: 'FREE Soft Skills & Communication Training',
      description: 'Stand out in interviews with professional communication, etiquette, and confidence.'
    }
  ];

  return (
    <section id="highlights" className="section highlights-section">
      <div className="container">
        <h2 className="section-title">Highlights of the Program</h2>
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{highlight.icon}</div>
              <h3>{highlight.title}</h3>
              {highlight.description && <p>{highlight.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;