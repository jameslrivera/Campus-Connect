'use client'
import React, { useState } from 'react';
import NavBar from '../../homepage-components/navBar';
import Sidebar from '../../homepage-components/sideBar';
import PostCard from '../../homepage-components/postCard';

// Assuming you have some mock data for topics and posts
const topics = [{ id: '1', name: 'Mathematics' },{id:'2', name: 'Teachers'} ];

const posts = [{ id: '1', title: 'How to solve an equation?', content: '...', author: 'User123' }, /* more posts */];

const ForumPage = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            // Implement search functionality
            console.log(e.target.value);
        }
    };

    const handleSelectTopic = (topicId) => {
        setSelectedTopic(topicId);
        // Implement topic selection functionality
    };

    return (
        <div>
            <NavBar onSearch={handleSearch} />
            <div className="main-content">
                <Sidebar topics={topics} onSelectTopic={handleSelectTopic} />
                <section className="posts">
                    {posts.map((post) => (
                        <PostCard key={post.id} {...post} onAnswer={() => {/* Implement answer functionality */}} />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default ForumPage;
