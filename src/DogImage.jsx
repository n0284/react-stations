// @ts-check

import React, { useState } from 'react';

export const DogImage = ({imageUrl}) => {
  const [dogUrl,setDogUrl] = useState(imageUrl);
  const url = 'https://dog.ceo/api/breeds/image/random'

  async function fetchData() {
    const data = await fetch(url);
    console.log(data);
    const res = await data.json();
    const randomImgUrl = res.message;
    console.log(randomImgUrl);
    setDogUrl(randomImgUrl);
  }
  return (
    <div>
    <img src={dogUrl}></img> 
    <p></p>
    <button onClick={fetchData}>更新</button>
    </div>
    )
}

export default DogImage
