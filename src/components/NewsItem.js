
import React from 'react';
import "./news.css"
const NewsItem = ({ article }) => {
  return (
    <div className='news-container'>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default NewsItem;
