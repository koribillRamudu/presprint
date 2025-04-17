import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Image Section */}
        <div className="about-image">
          <img
            src="https://img.freepik.com/free-vector/coworking-concept-illustration_114360-5921.jpg?ga=GA1.1.2034555587.1732518228&semt=ais_hybrid&w=740"
            alt="Training Program"
          />
        </div>

        {/* Text Content Section */}
        <div className="about-content">
          <h2>About The Program</h2>
          <p>
            <strong>PrepSprint</strong> is a specially designed 6-month intensive training program aimed at <strong>equipping aspiring students and job seekers with in-demand technical and professional skills</strong>. Our goal is to <strong>bridge the gap between academic knowledge and industry requirements</strong>, ensuring every student and job seeker is <strong>job-ready and confident</strong>.
          </p>
          <p>
            This program offers <strong>comprehensive online training</strong>, offline examinations, hands-on projects, expert mentorship, and mock interview sessions — all bundled into a single, career-launching journey.
          </p>
          <div className="duration">
            <h3>Duration: <span>6 Months</span></h3>
            <p>A balanced schedule with ample time for in-depth learning and practice.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
