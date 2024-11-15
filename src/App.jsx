import React, { useState } from 'react';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';

const App = () => {
  const [category, setCategory] = useState('general'); // Default category

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory); // Update category based on user selection
  };

  return (
    <div>
      <Header onCategoryChange={handleCategoryChange} />
       <NewsCard category={category} /> 
      <Footer />
    </div>
  );
};

export default App;
