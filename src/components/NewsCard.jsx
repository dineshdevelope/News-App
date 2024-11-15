import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
const API_KEY = 'c1e4a0c496c540e0931580178efd9c90';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';


const NewsCard = () => {

  const [newsData, setNewsData] = useState([]);
  
  const fetchNews=async()=>{
    try {
      const response=await axios.get(BASE_URL,{
        params:{
          apiKey:API_KEY,
          category:"general",
          country:'us'
        }
      })
      console.log(response.data.articles);
      setNewsData(response.data.articles)
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }

  useEffect(()=>{
    fetchNews()
  },[])

 

  return (
    <div>
     
      {
      
        newsData.map((item,index)=>{
        return(
          <div className=' border-gray-200   border-4 space-y-2 sm:max-w-lg lg:max-w-4xl sm:mx-auto lg:flex mb-5' key={index}>
      <div className='mx-2 '>
        <img src={item.urlToImage  || 'https://png.pngtree.com/png-clipart/20211009/original/pngtree-404-not-found-mdern-transparent-background-png-image_6839517.png' } alt="NewsImage" className='w-full border border-amber-60  rounded pt-2 object-cover ' />
      </div>
      <div className='mx-2 space-y-1'>
        <p className='font-light text-xl text-gray-700  cursor-pointer'>{item.title}</p>
        <span className='cursor-pointer text-gray-700 text-md font-semibold '>shorts</span> <span className='font-light text-gray-500'>by {item.author} / 11:56 am on Friday 15 November, 2024</span>
        <p className='font-light text-gray-700'>
         {item.description}
        </p>
        <h1 className='font-light text-gray-800 cursor-pointer pb-1'>read more at <a className='font-semibold' target='_blank' href={item.url}>{item.source.name}</a></h1>
      </div>
    </div>
        )
      })
      
    }
    </div>
    
  ) 
}

export default NewsCard