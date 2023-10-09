// @ts-check

import React, { useState, useEffect } from 'react';
import DogListContainer from './DogListContainer';

export const BreedsSelect = ({breeds,onChangeBreed,displayButton,urlList}) => {
  
  return (
    <div>
    <select name="breedsList" defaultValue={breeds[0]} onChange={onChangeBreed}>
      {Object.values(breeds).map((breed,index) => (
      <option value={breed} key={index}>{breed}</option>
      ))}
    </select>
    <button onClick={displayButton}>表示</button>
    {Object.values(urlList).map((url,index) => (
    <img src={url} key={index}></img>
      ))}
    </div>
  )
}

export default BreedsSelect
