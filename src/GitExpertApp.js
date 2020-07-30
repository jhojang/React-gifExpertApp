import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState('random');

  return (
    <>
      <div className='header'>
        <h1>GiftExpertApp</h1>
        <AddCategory setCategories={setCategories}/>
      </div>
      <div className='gif-global'>
        <GifGrid category={categories} />
      </div>
    </>
  );
}

export default GifExpertApp;