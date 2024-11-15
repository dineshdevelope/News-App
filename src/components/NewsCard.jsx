import React from 'react'
import axios from 'axios'
const API_KEY = '1d22ae4f6ade49279f2301735481aac0';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';


const NewsCard = () => {
  
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
      

    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }

  fetchNews()
  
  return (
    <div className='border border-gray-200   border-4 space-y-2 sm:max-w-lg lg:max-w-4xl sm:mx-auto lg:flex'>
      <div className='mx-2'>
        <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" alt="NewsImage" className='w-full border border-amber-60  rounded pt-2' />
      </div>
      <div className='mx-2 space-y-1'>
        <p className='font-light text-xl text-gray-700  cursor-pointer'>European Commission fines Meta $7,000 cr over abusive practices in ads business</p>
        <span className='cursor-pointer text-gray-700 text-md font-semibold '>shorts</span> <span className='font-light text-gray-500'>by Anmol Sharma / 11:56 am on Friday 15 November, 2024</span>
        <p className='font-light text-gray-700'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel et ipsum beatae! Totam, ratione nisi dolor explicabo suscipit similique autem! Perferendis quae nisi a aspernatur molestiae ab. Repellat, quis tenetur.
        </p>
        <h1 className='font-semibold text-gray-800 cursor-pointer pb-1'>read more at News 18</h1>
      </div>
    </div>
  ) 
}

export default NewsCard