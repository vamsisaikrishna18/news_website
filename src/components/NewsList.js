// src/components/NewsList.js
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=28df22ce9394488884e46c2d65a06bf8')
      .then(response => response.json())
      .then(data => setNews(data.articles));
  }, []);

  return (
    <div>
      {news?.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
