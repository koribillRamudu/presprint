import React from 'react';
import './Courses.css';
import dataStructureImage from './data-structure.png';
import image from './image.png';
const Courses = () => {
  const courses = [
    {
      title: 'GitHub – Version Control Mastery',
      domain: 'Software Engineering',
      objective: 'Learn version control, branching, merging, and collaborative coding.',
      outcome: 'Ability to manage real-world software projects and collaborate within development teams.',
      image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
    },
    {
      title: 'Programming for Problem Solving',
      domain: 'Software Engineering',
      objective: 'Develop strong programming fundamentals using structured logic.',
      outcome: 'Capable of solving algorithmic problems and writing efficient, optimized code.',
      image: image
    },
    {
      title: 'Data Structures & Algorithms',
      domain: 'Software Engineering',
      objective: 'Gain knowledge of core data structures and algorithms critical for coding interviews.',
      outcome: 'Excel in problem-solving rounds of tech interviews and competitive programming.',
      image: dataStructureImage
    },
    {
      title: 'HTML, CSS & JavaScript',
      domain: 'Web Development',
      objective: 'Build the foundation of front-end development and responsive design.',
      outcome: 'Ability to create interactive, mobile-friendly websites and UI components.',
      image: 'https://cdn-icons-png.flaticon.com/512/919/919827.png'
    },
    {
      title: 'React JS + MERN Stack',
      domain: 'Full Stack Development',
      objective: 'Learn full-cycle web application development with hands-on projects.',
      outcome: 'Build scalable and production-ready applications independently.',
      image: 'https://cdn-icons-png.flaticon.com/512/919/919851.png'
    },
    {
      title: 'Placement Preparation & Mock Interviews',
      domain: 'Interview Readiness',
      objective: 'Enhance aptitude, communication, resume-building, and interview skills.',
      outcome: 'Be thoroughly prepared for both technical and HR rounds in top companies.',
      image: 'https://cdn-icons-png.flaticon.com/512/942/942748.png'
    }
  ];
  
  return (
    <section id="courses" className="section courses-section">
      <div className="container">
        <h2 className="section-title">Courses Offered</h2>
        <div className="courses-list">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-icon-container">
                <img src={course.image} alt={`${course.title} icon`} className="course-icon" />
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <span className="course-domain">{course.domain}</span>
                <div className="course-details">
                  <h4>Objective:</h4>
                  <p>{course.objective}</p>
                  <h4>Outcome:</h4>
                  <p>{course.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="course-fee">
          <h3>Course Fee: <span>₹2.5 Lakhs</span></h3>
          <p>Includes access to training modules, assessments, projects, soft skills sessions, and placement support.</p>
          <p><strong>Flexible payment options and scholarships are available.</strong></p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
