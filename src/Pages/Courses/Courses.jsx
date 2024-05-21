import React, { useState } from 'react';
import './Courses.css';

const courseContent = {
    weekly: [
        { week: 1, content: 'HTML & CSS Basics' },
        { week: 2, content: 'JavaScript Fundamentals' },
        { week: 3, content: 'Advanced JavaScript' },
        { week: 4, content: 'React Introduction' },
    ],
    daily: [
        { day: 'Week 1 - Day 1', content: 'HTML Introduction' },
        { day: 'Week 1 - Day 2', content: 'CSS Basics' },
        { day: 'Week 1 - Day 3', content: 'HTML & CSS Practice' },
        { day: 'Week 1 - Day 4', content: 'Project 1' },
        { day: 'Week 2 - Day 1', content: 'JavaScript Introduction' },
        { day: 'Week 2 - Day 2', content: 'JavaScript Variables' },
        { day: 'Week 2 - Day 3', content: 'JavaScript Functions' },
        { day: 'Week 2 - Day 4', content: 'Project 2' },
        { day: 'Week 3 - Day 1', content: 'Advanced JavaScript Concepts' },
        { day: 'Week 3 - Day 2', content: 'JavaScript DOM Manipulation' },
        { day: 'Week 3 - Day 3', content: 'JavaScript Events' },
        { day: 'Week 3 - Day 4', content: 'Project 3' },
        { day: 'Week 4 - Day 1', content: 'React Basics' },
        { day: 'Week 4 - Day 2', content: 'React Components' },
        { day: 'Week 4 - Day 3', content: 'React State Management' },
        { day: 'Week 4 - Day 4', content: 'Final Project' },
    ]
};

const Courses = () => {
    const [viewMode, setViewMode] = useState('weekly');
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
                    {viewMode === 'weekly' ? `Week ${item.week}: ` : `${item.day}: `}{item.content}
                </div>
            ));
    };

    return (
        <div className="courses">
            <h1>Choose Your Course View</h1>
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
    );
};

export default Courses;
