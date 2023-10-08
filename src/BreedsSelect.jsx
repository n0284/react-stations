// @ts-check

import React, { useState, useEffect } from 'react';
import DogListContainer from './DogListContainer';

export const BreedsSelect = ({breeds,onChangeBreed}) => {

  console.log(breeds);

  return (
    <select name="breedsList" defaultValue={breeds} onChange={onChangeBreed}>
      {Object.values(breeds).map((breed) => (
      <option value="item" key={breed}>{breed}</option>
      ))}
    </select>
  )
}

export default BreedsSelect
