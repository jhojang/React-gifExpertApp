import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length === 0) {
      alert('Ingrese una categoría');
    } else {
      setCategories(inputValue);
      setInputValue('');
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='inputCategory'
        type='text'
        value={inputValue}
        placeholder='Nueva categoría'
        onChange={handleInput}
      />
      <input
        className='btnCategory'
        type='submit'
        value='Agregar'
      />
    </form>
  );

};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}