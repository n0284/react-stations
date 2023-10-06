// @ts-check

import React, { useState } from 'react';
import DogImage from "./DogImage"

export const Description = () => {

  return (
    <div>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl = 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg'/>
    </div>
  )
}

export default Description
