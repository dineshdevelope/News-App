import React, { useState } from 'react';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';


const App = () => {
  const [category, setCategory] = useState('general'); // Default category

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory); // Update category based on user selection
  };

  return (
    <div>
      <Header onCategoryChange={handleCategoryChange} />
      <Toaster 
      position="bottom-center"
      reverseOrder={false}
      />
      <NewsCard category={category} />   
      <Footer />
    </div>
  );
};

export default App;
