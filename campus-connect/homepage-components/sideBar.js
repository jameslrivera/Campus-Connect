import React from 'react';
import './sideBar.css';

const Sidebar = ({ topics, onSelectTopic }) => {
    return (
        <aside className="sidebar">
            <ul>
                {topics.map((topic) => (
                    <li key={topic.id} onClick={() => onSelectTopic(topic.id)}>
                        {topic.name}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
