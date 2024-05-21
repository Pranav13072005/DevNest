// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook, faChalkboardTeacher, faTasks, faFileAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
// import './Courses.css';
// import ParticlesComponent from '../../components/Particles';
// import Navbar from '../../Navbar';

// const courseContent = {
//     weekly: [
//         { 
//             week: 1, 
//             title: 'HTML & CSS Basics', 
//             description: 'Introduction to the building blocks of web development.', 
//             topics: 'HTML elements, CSS styling', 
//             readings: 'Read HTML & CSS by Jon Duckett, Chapters 1-3', 
//             assignments: 'Build a simple webpage with HTML & CSS', 
//             resources: 'MDN Web Docs for HTML & CSS' 
//         },
//         { 
//             week: 2, 
//             title: 'JavaScript Fundamentals', 
//             description: 'Learn the basics of JavaScript programming.', 
//             topics: 'JavaScript syntax, variables, and functions', 
//             readings: 'Eloquent JavaScript, Chapters 1-4', 
//             assignments: 'Create interactive elements on a webpage', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             week: 3, 
//             title: 'Advanced JavaScript', 
//             description: 'Dive deeper into JavaScript and learn advanced concepts.', 
//             topics: 'ES6 features, asynchronous programming', 
//             readings: 'Eloquent JavaScript, Chapters 5-7', 
//             assignments: 'Build a dynamic web application', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             week: 4, 
//             title: 'React Introduction', 
//             description: 'Get started with React, a popular JavaScript library for building user interfaces.', 
//             topics: 'React components, state management', 
//             readings: 'React documentation, Chapters 1-3', 
//             assignments: 'Create a simple React application', 
//             resources: 'Official React Documentation' 
//         },
//     ],
//     daily: [
//         { 
//             day: 'Week 1 - Day 1', 
//             title: 'HTML Introduction', 
//             description: 'Basics of HTML and its elements.', 
//             topics: 'HTML tags, structure', 
//             readings: 'HTML & CSS by Jon Duckett, Chapter 1', 
//             assignments: 'Build a basic HTML page', 
//             resources: 'MDN Web Docs for HTML' 
//         },
//         { 
//             day: 'Week 1 - Day 2', 
//             title: 'CSS Basics', 
//             description: 'Introduction to CSS and styling.', 
//             topics: 'CSS selectors, properties', 
//             readings: 'HTML & CSS by Jon Duckett, Chapter 2', 
//             assignments: 'Style an HTML page using CSS', 
//             resources: 'MDN Web Docs for CSS' 
//         },
//         { 
//             day: 'Week 1 - Day 3', 
//             title: 'HTML & CSS Practice', 
//             description: 'Hands-on practice with HTML & CSS.', 
//             topics: 'Combining HTML & CSS', 
//             readings: 'HTML & CSS by Jon Duckett, Chapter 3', 
//             assignments: 'Complete a small project using HTML & CSS', 
//             resources: 'MDN Web Docs' 
//         },
//         { 
//             day: 'Week 1 - Day 4', 
//             title: 'Project 1', 
//             description: 'First project combining HTML & CSS skills.', 
//             topics: 'Project development', 
//             readings: 'None', 
//             assignments: 'Build a personal webpage', 
//             resources: 'Previous readings and resources' 
//         },
//         { 
//             day: 'Week 2 - Day 1', 
//             title: 'JavaScript Introduction', 
//             description: 'Basics of JavaScript.', 
//             topics: 'JavaScript syntax, data types', 
//             readings: 'Eloquent JavaScript, Chapter 1', 
//             assignments: 'Write basic JavaScript programs', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             day: 'Week 2 - Day 2', 
//             title: 'JavaScript Variables', 
//             description: 'Understanding variables in JavaScript.', 
//             topics: 'Variable declaration and scope', 
//             readings: 'Eloquent JavaScript, Chapter 2', 
//             assignments: 'Practice with variables', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             day: 'Week 2 - Day 3', 
//             title: 'JavaScript Functions', 
//             description: 'Introduction to functions in JavaScript.', 
//             topics: 'Function declaration and invocation', 
//             readings: 'Eloquent JavaScript, Chapter 3', 
//             assignments: 'Write functions for various tasks', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             day: 'Week 2 - Day 4', 
//             title: 'Project 2', 
//             description: 'JavaScript project.', 
//             topics: 'Integrating JavaScript with HTML', 
//             readings: 'None', 
//             assignments: 'Create an interactive webpage', 
//             resources: 'Previous readings and resources' 
//         },
//         { 
//             day: 'Week 3 - Day 1', 
//             title: 'Advanced JavaScript Concepts', 
//             description: 'Learn advanced JavaScript concepts.', 
//             topics: 'ES6 features, closures', 
//             readings: 'Eloquent JavaScript, Chapter 4', 
//             assignments: 'Practice with advanced concepts', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             day: 'Week 3 - Day 2', 
//             title: 'JavaScript DOM Manipulation', 
//             description: 'Manipulate the DOM using JavaScript.', 
//             topics: 'DOM methods, events', 
//             readings: 'Eloquent JavaScript, Chapter 5', 
//             assignments: 'Build dynamic webpages', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             day: 'Week 3 - Day 3', 
//             title: 'JavaScript Events', 
//             description: 'Handling events in JavaScript.', 
//             topics: 'Event listeners, event objects', 
//             readings: 'Eloquent JavaScript, Chapter 6', 
//             assignments: 'Implement event-driven programming', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             day: 'Week 3 - Day 4', 
//             title: 'Project 3', 
//             description: 'JavaScript and DOM project.', 
//             topics: 'Creating a fully interactive webpage', 
//             readings: 'None', 
//             assignments: 'Complete a JavaScript project', 
//             resources: 'Previous readings and resources' 
//         },
//         { 
//             day: 'Week 4 - Day 1', 
//             title: 'React Basics', 
//             description: 'Introduction to React.', 
//             topics: 'React components, JSX', 
//             readings: 'React documentation, Chapter 1', 
//             assignments: 'Build a basic React app', 
//             resources: 'Official React Documentation' 
//         },
//         { 
//             day: 'Week 4 - Day 2', 
//             title: 'React Components', 
//             description: 'Understanding React components.', 
//             topics: 'Component lifecycle, props', 
//             readings: 'React documentation, Chapter 2', 
//             assignments: 'Create reusable components', 
//             resources: 'Official React Documentation' 
//         },
//         { 
//             day: 'Week 4 - Day 3', 
//             title: 'React State Management', 
//             description: 'Managing state in React.', 
//             topics: 'useState, useEffect hooks', 
//             readings: 'React documentation, Chapter 3', 
//             assignments: 'Implement stateful components', 
//             resources: 'Official React Documentation' 
//         },
//         { 
//             day: 'Week 4 - Day 4', 
//             title: 'Final Project', 
//             description: 'Build a complete React application.', 
//             topics: 'Project planning and development', 
//             readings: 'None', 
//             assignments: 'Complete the final project', 
//             resources: 'Previous readings and resources' 
//         }
//     ]
// };

// const Courses = () => {
//     const [viewMode, setViewMode] = useState('weekly');
//     const [selectedContent, setSelectedContent] = useState('');

//     const handleViewChange = (event) => {
//         setViewMode(event.target.value);
//         setSelectedContent('');
//     };

//     const handleContentSelect = (event) => {
//         setSelectedContent(event.target.value);
//     };

//     const renderContent = () => {
//         const contents = viewMode === 'weekly' ? courseContent.weekly : courseContent.daily;
//         return contents
//             .filter(item => {
//                 if (!selectedContent) return true;
//                 return viewMode === 'weekly' 
//                     ? `Week ${item.week}` === selectedContent 
//                     : item.day === selectedContent;
//             })
//             .map((item, index) => (
//                 <div key={index} className="course-item">
//                     <h2>{item.title}</h2>
//                     <p><FontAwesomeIcon icon={faBook} /> <strong>Description:</strong> {item.description}</p>
//                     <p><FontAwesomeIcon icon={faChalkboardTeacher} /> <strong>Topics:</strong> {item.topics}</p>
//                     <p><FontAwesomeIcon icon={faFileAlt} /> <strong>Readings:</strong> {item.readings}</p>
//                     <p><FontAwesomeIcon icon={faTasks} /> <strong>Assignments:</strong> {item.assignments}</p>
//                     <p><FontAwesomeIcon icon={faExternalLinkAlt} /> <strong>Resources:</strong> {item.resources}</p>
//                 </div>
//             ));
//     };

//     return (
//         <div>
//             <Navbar/>
//             <ParticlesComponent id="particles"/>
//         <div className="courses">
//             <h1 className="course-title">How would you like to structure your learning?</h1>
//             <div className="view-selector">
//                 <label>
//                     <input type="radio" value="weekly" checked={viewMode === 'weekly'} onChange={handleViewChange} />
//                     Weekly
//                 </label>
//                 <label>
//                     <input type="radio" value="daily" checked={viewMode === 'daily'} onChange={handleViewChange} />
//                     Daily
//                 </label>
//             </div>

//             <div className="content-dropdown">
//                 <select value={selectedContent} onChange={handleContentSelect}>
//                     <option value="">Select {viewMode === 'weekly' ? 'Week' : 'Day'}</option>
//                     {courseContent[viewMode].map((item, index) => (
//                         <option key={index} value={viewMode === 'weekly' ? `Week ${item.week}` : item.day}>
//                             {viewMode === 'weekly' ? `Week ${item.week}` : item.day}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             <div className="course-content">
//                 {renderContent()}
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Courses;

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook, faChalkboardTeacher, faTasks, faFileAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
// import './Courses.css';
// import ParticlesComponent from '../../components/Particles';
// import Navbar from '../../Navbar';

// const courseContent = {
//     weekly: [
//         { 
//             week: 1, 
//             title: 'HTML & CSS Basics', 
//             description: 'Introduction to the building blocks of web development.', 
//             topics: 'HTML elements, CSS styling', 
//             readings: 'Read HTML & CSS by Jon Duckett, Chapters 1-3', 
//             assignments: 'Build a simple webpage with HTML & CSS', 
//             resources: 'MDN Web Docs for HTML & CSS' 
//         },
//         { 
//             week: 2, 
//             title: 'JavaScript Fundamentals', 
//             description: 'Learn the basics of JavaScript programming.', 
//             topics: 'JavaScript syntax, variables, and functions', 
//             readings: 'Eloquent JavaScript, Chapters 1-4', 
//             assignments: 'Create interactive elements on a webpage', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             week: 3, 
//             title: 'Advanced JavaScript', 
//             description: 'Dive deeper into JavaScript and learn advanced concepts.', 
//             topics: 'ES6 features, asynchronous programming', 
//             readings: 'Eloquent JavaScript, Chapters 5-7', 
//             assignments: 'Build a dynamic web application', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             week: 4, 
//             title: 'React Introduction', 
//             description: 'Get started with React, a popular JavaScript library for building user interfaces.', 
//             topics: 'React components, state management', 
//             readings: 'React documentation, Chapters 1-3', 
//             assignments: 'Create a simple React application', 
//             resources: 'Official React Documentation' 
//         },
//     ],
//     daily: [
//         { 
//             day: 'Week 1 - Day 1', 
//             title: 'HTML Introduction', 
//             description: 'Basics of HTML and its elements.', 
//             topics: 'HTML tags, structure', 
//             readings: 'HTML & CSS by Jon Duckett, Chapter 1', 
//             assignments: 'Build a basic HTML page', 
//             resources: 'MDN Web Docs for HTML' 
//         },
//         { 
//             day: 'Week 1 - Day 2', 
//             title: 'CSS Basics', 
//             description: 'Introduction to CSS and styling.', 
//             topics: 'CSS selectors, properties', 
//             readings: 'HTML & CSS by Jon Duckett, Chapter 2', 
//             assignments: 'Style an HTML page using CSS', 
//             resources: 'MDN Web Docs for CSS' 
//         },
//         { 
//             day: 'Week 1 - Day 3', 
//             title: 'HTML & CSS Practice', 
//             description: 'Hands-on practice with HTML & CSS.', 
//             topics: 'Combining HTML & CSS', 
//             readings: 'HTML & CSS by Jon Duckett, Chapter 3', 
//             assignments: 'Complete a small project using HTML & CSS', 
//             resources: 'MDN Web Docs' 
//         },
//         { 
//             day: 'Week 1 - Day 4', 
//             title: 'Project 1', 
//             description: 'First project combining HTML & CSS skills.', 
//             topics: 'Project development', 
//             readings: 'None', 
//             assignments: 'Build a personal webpage', 
//             resources: 'Previous readings and resources' 
//         },
//         { 
//             day: 'Week 2 - Day 1', 
//             title: 'JavaScript Introduction', 
//             description: 'Basics of JavaScript.', 
//             topics: 'JavaScript syntax, data types', 
//             readings: 'Eloquent JavaScript, Chapter 1', 
//             assignments: 'Write basic JavaScript programs', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             day: 'Week 2 - Day 2', 
//             title: 'JavaScript Variables', 
//             description: 'Understanding variables in JavaScript.', 
//             topics: 'Variable declaration and scope', 
//             readings: 'Eloquent JavaScript, Chapter 2', 
//             assignments: 'Practice with variables', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             day: 'Week 2 - Day 3', 
//             title: 'JavaScript Functions', 
//             description: 'Introduction to functions in JavaScript.', 
//             topics: 'Function declaration and invocation', 
//             readings: 'Eloquent JavaScript, Chapter 3', 
//             assignments: 'Write functions for various tasks', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             day: 'Week 2 - Day 4', 
//             title: 'Project 2', 
//             description: 'JavaScript project.', 
//             topics: 'Integrating JavaScript with HTML', 
//             readings: 'None', 
//             assignments: 'Create an interactive webpage', 
//             resources: 'Previous readings and resources' 
//         },
//         { 
//             day: 'Week 3 - Day 1', 
//             title: 'Advanced JavaScript Concepts', 
//             description: 'Learn advanced JavaScript concepts.', 
//             topics: 'ES6 features, closures', 
//             readings: 'Eloquent JavaScript, Chapter 4', 
//             assignments: 'Practice with advanced concepts', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             day: 'Week 3 - Day 2', 
//             title: 'JavaScript DOM Manipulation', 
//             description: 'Manipulate the DOM using JavaScript.', 
//             topics: 'DOM methods, events', 
//             readings: 'Eloquent JavaScript, Chapter 5', 
//             assignments: 'Build dynamic webpages', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             day: 'Week 3 - Day 3', 
//             title: 'JavaScript Events', 
//             description: 'Handling events in JavaScript.', 
//             topics: 'Event listeners, event objects', 
//             readings: 'Eloquent JavaScript, Chapter 6', 
//             assignments: 'Implement event-driven programming', 
//             resources: 'JavaScript.info, MDN Web Docs' 
//         },
//         { 
//             day: 'Week 3 - Day 4', 
//             title: 'Project 3', 
//             description: 'JavaScript and DOM project.', 
//             topics: 'Creating a fully interactive webpage', 
//             readings: 'None', 
//             assignments: 'Complete a JavaScript project', 
//             resources: 'Previous readings and resources' 
//         },
//         { 
//             day: 'Week 4 - Day 1', 
//             title: 'React Basics', 
//             description: 'Introduction to React.', 
//             topics: 'React components, JSX', 
//             readings: 'React documentation, Chapter 1', 
//             assignments: 'Build a basic React app', 
//             resources: 'Official React Documentation' 
//         },
//         { 
//             day: 'Week 4 - Day 2', 
//             title: 'React Components', 
//             description: 'Understanding React components.', 
//             topics: 'Component lifecycle, props', 
//             readings: 'React documentation, Chapter 2', 
//             assignments: 'Create reusable components', 
//             resources: 'Official React Documentation' 
//         },
//         { 
//             day: 'Week 4 - Day 3', 
//             title: 'React State Management', 
//             description: 'Managing state in React.', 
//             topics: 'useState, useEffect hooks', 
//             readings: 'React documentation, Chapter 3', 
//             assignments: 'Implement stateful components', 
//             resources: 'Official React Documentation' 
//         },
//         { 
//             day: 'Week 4 - Day 4', 
//             title: 'Final Project', 
//             description: 'Build a complete React application.', 
//             topics: 'Project planning and development', 
//             readings: 'None', 
//             assignments: 'Complete the final project', 
//             resources: 'Previous readings and resources' 
//         }
//     ]
// };

// const Courses = () => {
//     const [viewMode, setViewMode] = useState('');
//     const [selectedContent, setSelectedContent] = useState('');

//     const handleViewChange = (event) => {
//         setViewMode(event.target.value);
//         setSelectedContent('');
//     };

//     const handleContentSelect = (event) => {
//         setSelectedContent(event.target.value);
//     };

//     const renderContent = () => {
//         const contents = viewMode === 'weekly' ? courseContent.weekly : courseContent.daily;
//         return contents
//             .filter(item => {
//                 if (!selectedContent) return true;
//                 return viewMode === 'weekly' 
//                     ? `Week ${item.week}` === selectedContent 
//                     : item.day === selectedContent;
//             })
//             .map((item, index) => (
//                 <div key={index} className="course-item">
//                     <h2>{item.title}</h2>
//                     <p><FontAwesomeIcon icon={faBook} /> <strong>Description:</strong> {item.description}</p>
//                     <p><FontAwesomeIcon icon={faChalkboardTeacher} /> <strong>Topics:</strong> {item.topics}</p>
//                     <p><FontAwesomeIcon icon={faFileAlt} /> <strong>Readings:</strong> {item.readings}</p>
//                     <p><FontAwesomeIcon icon={faTasks} /> <strong>Assignments:</strong> {item.assignments}</p>
//                     <p><FontAwesomeIcon icon={faExternalLinkAlt} /> <strong>Resources:</strong> {item.resources}</p>
//                 </div>
//             ));
//     };

//     return (
//         <div className="courses">
//             {viewMode ? (
//                 <>
//                     <div className="content-dropdown">
//                         <select value={selectedContent} onChange={handleContentSelect}>
//                             <option value="">Select {viewMode === 'weekly' ? 'Week' : 'Day'}</option>
//                             {courseContent[viewMode].map((item, index) => (
//                                 <option key={index} value={viewMode === 'weekly' ? `Week ${item.week}` : item.day}>
//                                     {viewMode === 'weekly' ? `Week ${item.week}` : item.day}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                     <div className="course-content">
//                         {renderContent()}
//                     </div>
//                 </>
//             ) : (
//                 <div className="view-selector-container">
//                     <h1 className="course-title">How would you like to structure your learning?</h1>
//                     <div className="view-selector">
//                         <label>
//                             <input type="radio" value="weekly" checked={viewMode === 'weekly'} onChange={handleViewChange} />
//                             Weekly
//                         </label>
//                         <label>
//                             <input type="radio" value="daily" checked={viewMode === 'daily'} onChange={handleViewChange} />
//                             Daily
//                         </label>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Courses;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faTasks, faFileAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Courses.css';
import ParticlesComponent from '../../components/Particles';
import Navbar from '../../Navbar';

const courseContent = {
    weekly: [
        { 
            week: 1, 
            title: 'HTML & CSS Basics', 
            description: 'Introduction to the building blocks of web development.', 
            topics: 'HTML elements, CSS styling', 
            readings: 'Read HTML & CSS by Jon Duckett, Chapters 1-3', 
            assignments: 'Build a simple webpage with HTML & CSS', 
            resources: 'MDN Web Docs for HTML & CSS' 
        },
        { 
            week: 2, 
            title: 'JavaScript Fundamentals', 
            description: 'Learn the basics of JavaScript programming.', 
            topics: 'JavaScript syntax, variables, and functions', 
            readings: 'Eloquent JavaScript, Chapters 1-4', 
            assignments: 'Create interactive elements on a webpage', 
            resources: 'JavaScript.info, MDN Web Docs' 
        },
        { 
            week: 3, 
            title: 'Advanced JavaScript', 
            description: 'Dive deeper into JavaScript and learn advanced concepts.', 
            topics: 'ES6 features, asynchronous programming', 
            readings: 'Eloquent JavaScript, Chapters 5-7', 
            assignments: 'Build a dynamic web application', 
            resources: 'JavaScript.info, MDN Web Docs' 
        },
        { 
            week: 4, 
            title: 'React Introduction', 
            description: 'Get started with React, a popular JavaScript library for building user interfaces.', 
            topics: 'React components, state management', 
            readings: 'React documentation, Chapters 1-3', 
            assignments: 'Create a simple React application', 
            resources: 'Official React Documentation' 
        },
    ],
    daily: [
        { 
            day: 'Week 1 - Day 1', 
            title: 'HTML Introduction', 
            description: 'Basics of HTML and its elements.', 
            topics: 'HTML tags, structure', 
            readings: 'HTML & CSS by Jon Duckett, Chapter 1', 
            assignments: 'Build a basic HTML page', 
            resources: 'MDN Web Docs for HTML' 
        },
        { 
            day: 'Week 1 - Day 2', 
            title: 'CSS Basics', 
            description: 'Introduction to CSS and styling.', 
            topics: 'CSS selectors, properties', 
            readings: 'HTML & CSS by Jon Duckett, Chapter 2', 
            assignments: 'Style an HTML page using CSS', 
            resources: 'MDN Web Docs for CSS' 
        },
        { 
            day: 'Week 1 - Day 3', 
            title: 'HTML & CSS Practice', 
            description: 'Hands-on practice with HTML & CSS.', 
            topics: 'Combining HTML & CSS', 
            readings: 'HTML & CSS by Jon Duckett, Chapter 3', 
            assignments: 'Complete a small project using HTML & CSS', 
            resources: 'MDN Web Docs' 
        },
        { 
            day: 'Week 1 - Day 4', 
            title: 'Project 1', 
            description: 'First project combining HTML & CSS skills.', 
            topics: 'Project development', 
            readings: 'None', 
            assignments: 'Build a personal webpage', 
            resources: 'Previous readings and resources' 
        },
        { 
            day: 'Week 2 - Day 1', 
            title: 'JavaScript Introduction', 
            description: 'Basics of JavaScript.', 
            topics: 'JavaScript syntax, data types', 
            readings: 'Eloquent JavaScript, Chapter 1', 
            assignments: 'Write basic JavaScript programs', 
            resources: 'JavaScript.info, MDN Web Docs' 
        },
        { 
            day: 'Week 2 - Day 2', 
            title: 'JavaScript Variables', 
            description: 'Understanding variables in JavaScript.', 
            topics: 'Variable declaration and scope', 
            readings: 'Eloquent JavaScript, Chapter 2', 
            assignments: 'Practice with variables', 
            resources: 'JavaScript.info, MDN Web Docs' 
        },
        { 
            day: 'Week 2 - Day 3', 
            title: 'JavaScript Functions', 
            description: 'Introduction to functions in JavaScript.', 
            topics: 'Function declaration and invocation', 
            readings: 'Eloquent JavaScript, Chapter 3', 
            assignments: 'Write functions for various tasks', 
            resources: 'JavaScript.info, MDN Web Docs' 
        },
        { 
            day: 'Week 2 - Day 4', 
            title: 'Project 2', 
            description: 'JavaScript project.', 
            topics: 'Integrating JavaScript with HTML', 
            readings: 'None', 
            assignments: 'Create an interactive webpage', 
            resources: 'Previous readings and resources' 
        },
        { 
            day: 'Week 3 - Day 1', 
            title: 'Advanced JavaScript Concepts', 
            description: 'Learn advanced JavaScript concepts.', 
            topics: 'ES6 features, closures', 
            readings: 'Eloquent JavaScript, Chapter 4', 
            assignments: 'Practice with advanced concepts', 
            resources: 'JavaScript.info, MDN Web Docs' 
        },
        { 
            day: 'Week 3 - Day 2', 
            title: 'JavaScript DOM Manipulation', 
            description: 'Manipulate the DOM using JavaScript.', 
            topics: 'DOM methods, events', 
            readings: 'Eloquent JavaScript, Chapter 5', 
            assignments: 'Build dynamic webpages', 
            resources: 'JavaScript.info, MDN Web Docs' 
        },
        { 
            day: 'Week 3 - Day 3', 
            title: 'JavaScript Events', 
            description: 'Handling events in JavaScript.', 
            topics: 'Event listeners, event objects', 
            readings: 'Eloquent JavaScript, Chapter 6', 
            assignments: 'Implement event-driven programming', 
            resources: 'JavaScript.info, MDN Web Docs' 
        },
        { 
            day: 'Week 3 - Day 4', 
            title: 'Project 3', 
            description: 'JavaScript and DOM project.', 
            topics: 'Creating a fully interactive webpage', 
            readings: 'None', 
            assignments: 'Complete a JavaScript project', 
            resources: 'Previous readings and resources' 
        },
        { 
            day: 'Week 4 - Day 1', 
            title: 'React Basics', 
            description: 'Introduction to React.', 
            topics: 'React components, JSX', 
            readings: 'React documentation, Chapter 1', 
            assignments: 'Build a basic React app', 
            resources: 'Official React Documentation' 
        },
        { 
            day: 'Week 4 - Day 2', 
            title: 'React Components', 
            description: 'Understanding React components.', 
            topics: 'Component lifecycle, props', 
            readings: 'React documentation, Chapter 2', 
            assignments: 'Create reusable components', 
            resources: 'Official React Documentation' 
        },
        { 
            day: 'Week 4 - Day 3', 
            title: 'React State Management', 
            description: 'Managing state in React.', 
            topics: 'useState, useEffect hooks', 
            readings: 'React documentation, Chapter 3', 
            assignments: 'Implement stateful components', 
            resources: 'Official React Documentation' 
        },
        { 
            day: 'Week 4 - Day 4', 
            title: 'Final Project', 
            description: 'Build a complete React application.', 
            topics: 'Project planning and development', 
            readings: 'None', 
            assignments: 'Complete the final project', 
            resources: 'Previous readings and resources' 
        }
    ]
};

const Courses = () => {
    const [viewMode, setViewMode] = useState('');
    const [selectedContent, setSelectedContent] = useState('');

    const handleViewChange = (event) => {
        setViewMode(event.target.value);
        setSelectedContent('');
    };

    const handleContentSelect = (event) => {
        setSelectedContent(event.target.value);
    };

    const renderContent = () => {
        const contents = viewMode === 'weekly' ? courseContent.weekly : courseContent.daily;
        return contents
            .filter(item => {
                if (!selectedContent) return true;
                return viewMode === 'weekly' 
                    ? `Week ${item.week}` === selectedContent 
                    : item.day === selectedContent;
            })
            .map((item, index) => (
                <div key={index} className="course-item">
                    <h2>{item.title}</h2>
                    <p><FontAwesomeIcon icon={faBook} /> <span className='bold'>Description:</span> {item.description}</p>
                    <p><FontAwesomeIcon icon={faChalkboardTeacher} /> <span className='bold'>Topics:</span> {item.topics}</p>
                    <p><FontAwesomeIcon icon={faFileAlt} /> <span className='bold'>Readings:</span> {item.readings}</p>
                    <p><FontAwesomeIcon icon={faTasks} /> <span className='bold'>Assignments:</span> {item.assignments}</p>
                    <p><FontAwesomeIcon icon={faExternalLinkAlt} /> <span className='bold'>Resources:</span> {item.resources}</p>
                </div>
            ));
    };
    const [showOutcomes, setShowOutcomes] = useState(false);

const toggleOutcomes = () => {
    setShowOutcomes(!showOutcomes);
};


    return (
        <div className="courses">
            <ParticlesComponent id="particles"></ParticlesComponent>
            <Navbar/>
            <div className='outcomesbutton'>
            <button className="outcomes-button" onClick={toggleOutcomes}>
    {showOutcomes ? 'Hide Learning Outcomes' : 'View Learning Outcomes'}
</button>
</div>

{showOutcomes && (
    <div className="learning-outcomes">
        <h2>Learning Outcomes</h2>
        <ul>
            <li>Understand the fundamental concepts of HTML, CSS, and JavaScript.</li>
            <li>Build responsive and accessible web pages.</li>
            <li>Develop interactive user interfaces using React.</li>
            <li>Implement best practices for modern web development.</li>
            <li>Apply asynchronous programming techniques in JavaScript.</li>
            <li>Create dynamic and data-driven web applications.</li>
        </ul>
    </div>
)}
            <div className="view-selector-container">
                <h1 className="course-title">How would you like to structure your learning?</h1>
                <div className="view-selector">
                    <label>
                        <input type="radio" value="weekly" checked={viewMode === 'weekly'} onChange={handleViewChange} />
                        Weekly
                    </label>
                    <label>
                        <input type="radio" value="daily" checked={viewMode === 'daily'} onChange={handleViewChange} />
                        Daily
                    </label>
                </div>
            

            </div>
            {viewMode && (
                <div>
                    <div className="content-dropdown">
                        <select value={selectedContent} onChange={handleContentSelect}>
                            <option value="">Select {viewMode === 'weekly' ? 'Week' : 'Day'}</option>
                            {courseContent[viewMode].map((item, index) => (
                                <option key={index} value={viewMode === 'weekly' ? `Week ${item.week}` : item.day}>
                                    {viewMode === 'weekly' ? `Week ${item.week}` : item.day}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="course-content">
                        {renderContent()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Courses;
