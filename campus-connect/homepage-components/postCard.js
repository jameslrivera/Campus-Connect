import React from 'react';
import './postCard.css';

const PostCard = ({ title, content, author, onAnswer }) => {
    return (
        <div className="post-card">
            <h3>{title}</h3>
            <p>{content}</p>
            <footer>
                <span>Asked by {author}</span>
                <button onClick={onAnswer}>Answer</button>
            </footer>
        </div>
    );
};

export default PostCard;
