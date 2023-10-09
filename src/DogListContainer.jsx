// @ts-check

import React, { useState, useEffect } from 'react';
import BreedsSelect from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds,setBreeds] = useState('');
  const [selectedBreed,setSelectedBreed] = useState('');
  const [selectedBreedsList,setSelectedBreedsList] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => {
        const breedsList = data.message
        setBreeds(Object.keys(breedsList))
        setSelectedBreed(Object.keys(breedsList)[0]);
      });
      console.log(breeds)
  },[]);

  const onChange = (e) => {
    setSelectedBreed(e.target.value);
  }

  const pushDisplayButton = () => {
    console.log('https://dog.ceo/api/breed/' + selectedBreed + '/images')
    fetch('https://dog.ceo/api/breed/' + selectedBreed + '/images')
    .then((response) => response.json())
    .then((data) => {
      const selectedList = data.message
      console.log(selectedList)
      const filterResult = selectedList.filter(function(value,index) {
        return index < 12;
      })
      console.log(filterResult)
      setSelectedBreedsList(filterResult);
      console.log(selectedBreedsList)
    });
  }

  return (
    <BreedsSelect breeds={breeds} onChangeBreed = {onChange} displayButton = {pushDisplayButton} urlList = {selectedBreedsList}/>
  )
}

export default DogListContainer
