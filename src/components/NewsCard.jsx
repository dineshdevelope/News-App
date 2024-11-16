import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from "dotenv"


const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = 'https://newsapi.org/v2/top-headlines';

const NewsCard = ({ category }) => {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          apiKey: API_KEY,
          category, // Dynamic category from props
          country: 'us',
        },
      });
      setNewsData(response.data.articles);
      //console.log(category);
      //console.log(response.data.articles);
      
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to load news. Please try again later.');
      
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]); // Refetch news whenever the category changes

  return (
    <div>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        newsData.map((item, index) => (
          <div
            className="border-gray-200 border-4 space-y-2 sm:max-w-lg lg:max-w-4xl sm:mx-auto lg:flex mb-5"
            key={index}
          >
            <div className="mx-2">
              <div className="lg:w-96">
                <img
                  src={
                    item.urlToImage ||
                    'https://elementor.com/cdn-cgi/image/f=auto,w=1201,h=631/https://elementor.com/blog/wp-content/uploads/2021/03/Redesign-Your-Website_8.png'
                  }
                  alt={item.title || 'News Image'}
                  className="w-full border border-amber-60 rounded pt-2 object-cover"
                />
              </div>
            </div>
            <div className="mx-2 space-y-1">
              <p className="font-light text-xl text-gray-700 cursor-pointer">{item.title}</p>
              <span className="cursor-pointer text-gray-700 text-md font-semibold">shorts </span>
              <span className="font-light text-gray-500">
                by {item.author || 'Unknown'} / {new Date(item.publishedAt).toLocaleString()}
              </span>
              <p className="font-light text-gray-700">{item.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}</p>
              <h1 className="font-light text-gray-800 cursor-pointer pb-1">
                read more at{' '}
                <a
                  className="font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.url}
                >
                  {item.source.name}
                </a>
              </h1>
            </div>
          </div>
        ))
      )}   
    </div>
  );
};

export default NewsCard;
