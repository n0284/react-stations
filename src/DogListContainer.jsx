// @ts-check

import React, { useState, useEffect } from 'react';

export const DogListContainer = () => {
  const [breeds,setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => {
        const breedsList = data.message
        setBreeds(Object.keys(breedsList));
      });
      console.log(breeds)
  },[]);

  return (
    <select name="breedsList">
      {Object.values(breeds).map((breed) => (
      <option value="item" key={breed}>{breed}</option>
      ))}
    </select>
  )
}

export default DogListContainer
