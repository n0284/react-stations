// @ts-check

import React, { useState, useEffect } from 'react';
import BreedsSelect from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds,setBreeds] = useState('');
  const [selectedBreed,setSelectedBreed] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => {
        const breedsList = data.message
        setBreeds(Object.keys(breedsList));
      });
      console.log(breeds)
  },[]);

  const onChange = (e) => {
    setSelectedBreed(e.target.value);
  }

  return (
    <BreedsSelect breeds={breeds} onChangeBreed = {onChange}/>
  )
}

export default DogListContainer
